// Zero-dependency static build.
//   node build.js          → dist/ with pretty URLs (for hosting / WordPress)
//   node build.js --file   → dist/ with links ending in index.html (double-click preview)
const fs = require('fs');
const path = require('path');
const cfg = require('./site.config');
const { layout } = require('./src/layout');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const FILE_MODE = process.argv.includes('--file');
// Preview builds (GitHub Pages review copy): noindex everything so the
// preview never competes with the real domain in Google.
const PREVIEW = process.argv.includes('--preview');

function rmrf(p) { if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true }); }
function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name), d = path.join(dst, e.name);
    e.isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
  }
}

// Rewrite root-absolute URLs ("/x/") to page-relative ("../x/").
function relativize(html, url) {
  const depth = url.split('/').filter(Boolean).length;
  const prefix = depth ? '../'.repeat(depth) : './';
  const fix = (v) => {
    if (!v.startsWith('/') || v.startsWith('//')) return v;
    const [p, h] = v.split('#');
    let out = prefix + p.slice(1);
    if (FILE_MODE && out.endsWith('/')) out += 'index.html';
    return out + (h !== undefined ? '#' + h : '');
  };
  return html
    .replace(/__ROOT__/g, prefix)
    .replace(/\b(href|src|poster|data-src|action)="([^"]*)"/g, (m, a, v) => `${a}="${fix(v)}"`)
    .replace(/\bsrcset="([^"]*)"/g, (m, v) => `srcset="${v.split(',').map((p) => { const [u, w] = p.trim().split(/\s+/); return `${fix(u)} ${w || ''}`.trim(); }).join(', ')}"`);
}

function build() {
  // Empty dist/ rather than deleting it: on Windows the folder may be held open
  // by an editor or the preview server.
  fs.mkdirSync(DIST, { recursive: true });
  for (const e of fs.readdirSync(DIST)) rmrf(path.join(DIST, e));
  copyDir(path.join(ROOT, 'assets'), path.join(DIST, 'assets'));

  const dir = path.join(ROOT, 'src', 'pages');
  const pages = fs.readdirSync(dir).filter((f) => f.endsWith('.js')).sort().map((f) => {
    delete require.cache[require.resolve(path.join(dir, f))];
    return require(path.join(dir, f))();
  }).flat();

  const sitemap = [];
  for (const page of pages) {
    if (PREVIEW) page.noindex = true;
    // 404 can be served at any depth, so it keeps root-absolute URLs.
    const raw = layout(page, page.body);
    const html = page.file ? raw.replace(/__ROOT__/g, '/') : relativize(raw, page.url);
    const out = page.file ? path.join(DIST, page.file) : path.join(DIST, page.url, 'index.html');
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html);
    if (!page.noindex) sitemap.push({ loc: cfg.domain + page.url, pri: page.priority || 0.7 });
    console.log('  ✓', page.url.padEnd(42), page.title.length > 60 ? `title ${page.title.length} chars` : '');
  }

  const today = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(path.join(DIST, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap
      .map((s) => `  <url><loc>${s.loc}</loc><lastmod>${today}</lastmod><priority>${s.pri}</priority></url>`).join('\n')}\n</urlset>\n`);
  fs.writeFileSync(path.join(DIST, 'robots.txt'), PREVIEW
    ? 'User-agent: *\nAllow: /\n'
    : `User-agent: *\nAllow: /\nDisallow: /thank-you/\n\nSitemap: ${cfg.domain}/sitemap.xml\n`);
  if (PREVIEW) fs.writeFileSync(path.join(DIST, '.nojekyll'), '');
  // Sister-domain placeholders (deploy each as index.html on its own domain)
  const comingSoon = require('./src/coming-soon');
  const cs = path.join(ROOT, 'dist-coming-soon');
  rmrf(cs);
  for (const s of [
    { dir: 'ncrestatepartners.com', brand: 'NCR Estate Partners', domain: 'ncrestatepartners.com', line: 'Buy, sell, rent and manage property across Delhi NCR.' },
    { dir: 'nriestatepartners.com', brand: 'NRI Estate Partners', domain: 'nriestatepartners.com', line: 'Your trusted partner for property in India while you live abroad.' },
  ]) {
    fs.mkdirSync(path.join(cs, s.dir), { recursive: true });
    fs.writeFileSync(path.join(cs, s.dir, 'index.html'), comingSoon(s));
  }

  // Apache: force HTTPS + non-www (WordPress hosts use Apache/LiteSpeed)
  fs.writeFileSync(path.join(DIST, '.htaccess'), `# Force HTTPS and non-www
RewriteEngine On
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} ^www\\. [NC]
RewriteCond %{HTTP_HOST} ^(?:www\\.)?(.+)$ [NC]
RewriteRule ^ https://%1%{REQUEST_URI} [L,NE,R=301]
ErrorDocument 404 /404.html
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType video/mp4 "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
</IfModule>
`);
  console.log(`\nBuilt ${pages.length} pages → dist/${FILE_MODE ? ' (file mode)' : ''}  ·  coming-soon pages → dist-coming-soon/`);
}

build();
