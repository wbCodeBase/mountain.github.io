const cfg = require('../site.config');
const { services, guides } = require('./data');
const { icon, logoMark, wa, esc } = require('./components');

const abs = (url) => cfg.domain + url;

function schema(page) {
  const org = {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    '@id': cfg.domain + '/#org',
    name: cfg.brand,
    url: cfg.domain + '/',
    logo: cfg.domain + '/assets/img/logo.svg',
    image: cfg.domain + '/assets/img/doon-valley.webp',
    telephone: cfg.phoneHref,
    email: cfg.email,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: cfg.address.street,
      addressLocality: cfg.address.locality,
      addressRegion: cfg.address.region,
      postalCode: cfg.address.postal,
      addressCountry: cfg.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: cfg.geo.lat, longitude: cfg.geo.lng },
    areaServed: [{ '@type': 'City', name: 'Dehradun' }, { '@type': 'State', name: 'Uttarakhand' }],
    sameAs: Object.values(cfg.social).filter(Boolean),
  };
  const out = [org];
  if (page.crumbs) {
    out.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: page.crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.url) })),
    });
  }
  if (page.faqs && page.faqs.length) {
    out.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') },
      })),
    });
  }
  if (page.service) {
    out.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: page.service,
      serviceType: page.service,
      provider: { '@id': cfg.domain + '/#org' },
      areaServed: { '@type': 'City', name: 'Dehradun' },
      url: abs(page.url),
    });
  }
  if (page.article) {
    out.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: page.h1,
      description: page.description,
      dateModified: page.article.updated,
      datePublished: page.article.published,
      author: { '@type': 'Organization', name: cfg.brand },
      publisher: { '@id': cfg.domain + '/#org' },
      mainEntityOfPage: abs(page.url),
      image: abs(`/assets/img/${page.ogImage || 'doon-valley'}.webp`),
    });
  }
  return out.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n');
}

function header(page) {
  const svcLinks = services
    .map(
      (s) => `<li><a href="/dehradun/${s.slug}/"${page.url === `/dehradun/${s.slug}/` ? ' aria-current="page"' : ''}><span class="mega__ic">${icon(s.icon)}</span><span><strong>${s.name}</strong><small>${s.short.split(',')[0].split('.')[0]}</small></span></a></li>`
    )
    .join('');
  const is = (p) => (page.url === p || (p !== '/' && page.url.startsWith(p)) ? ' aria-current="page"' : '');
  return `
<a class="skip" href="#main">Skip to content</a>
<header class="site-header ${page.solidHeader ? 'is-solid' : ''}" data-header>
  <div class="container site-header__inner">
    <a class="logo" href="/" aria-label="${cfg.brand} home">${logoMark}<span class="logo__text"><strong>Mountain Estate</strong><small>Partners</small></span></a>
    <nav class="nav" aria-label="Main">
      <ul class="nav__list">
        <li><a href="/"${page.url === '/' ? ' aria-current="page"' : ''}>Home</a></li>
        <li class="has-mega" data-mega>
          <a href="/dehradun/"${is('/dehradun/')} aria-haspopup="true" aria-expanded="false" data-mega-toggle>Dehradun Services ${icon('chevron', 'nav__chev')}</a>
          <div class="mega" data-mega-panel>
            <div class="mega__inner">
              <div class="mega__intro">
                <p class="eyebrow">Now serving</p>
                <h3>Dehradun</h3>
                <p>Eight services for owners and buyers, run by a team that lives here.</p>
                <a class="btn btn--sm" href="/dehradun/"><span>Dehradun hub</span>${icon('arrow')}</a>
              </div>
              <ul class="mega__list">${svcLinks}</ul>
            </div>
          </div>
        </li>
        <li><a href="/for-nris/"${is('/for-nris/')}>For NRIs</a></li>
        <li><a href="/guides/"${is('/guides/')}>Guides</a></li>
        <li><a href="/about/"${is('/about/')}>About</a></li>
        <li><a href="/contact/"${is('/contact/')}>Contact</a></li>
      </ul>
    </nav>
    <div class="site-header__cta">
      <a class="btn btn--wa btn--sm" href="${wa(page.wa)}" target="_blank" rel="noopener" data-track="whatsapp">${icon('whatsapp')}<span>WhatsApp Us</span></a>
      <button class="menu-btn" data-menu-toggle aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span></button>
    </div>
  </div>
</header>

<div class="mobile-menu" id="mobile-menu" data-menu hidden>
  <div class="mobile-menu__inner">
    <ul class="mobile-menu__main">
      <li><a href="/">Home</a></li>
      <li>
        <button class="mobile-menu__acc" data-acc aria-expanded="false">Dehradun Services ${icon('chevron')}</button>
        <ul class="mobile-menu__sub" hidden>
          <li><a href="/dehradun/">Dehradun hub</a></li>
          ${services.map((s) => `<li><a href="/dehradun/${s.slug}/">${s.name}</a></li>`).join('')}
        </ul>
      </li>
      <li><a href="/for-nris/">For NRIs</a></li>
      <li><a href="/guides/">Guides</a></li>
      <li><a href="/about/">About</a></li>
      <li><a href="/contact/">Contact</a></li>
    </ul>
    <div class="mobile-menu__foot">
      <a class="btn btn--wa btn--block" href="${wa(page.wa)}" target="_blank" rel="noopener" data-track="whatsapp">${icon('whatsapp')}<span>WhatsApp Us</span></a>
      <a class="btn btn--line btn--block" href="tel:${cfg.phoneHref}">${icon('phone')}<span>${cfg.phone}</span></a>
    </div>
  </div>
</div>`;
}

function footer(page) {
  const year = new Date().getFullYear();
  return `
<footer class="site-footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <a class="logo logo--dark" href="/">${logoMark}<span class="logo__text"><strong>Mountain Estate</strong><small>Partners</small></span></a>
        <p>Your trusted property partner in the hills. A local Dehradun team that buys, sells, rents and cares for your home while you are away.</p>
        <a class="btn btn--wa" href="${wa(page.wa)}" target="_blank" rel="noopener" data-track="whatsapp">${icon('whatsapp')}<span>WhatsApp Us</span></a>
      </div>
      <div class="footer-col">
        <h4>Dehradun services</h4>
        <ul>${services.map((s) => `<li><a href="/dehradun/${s.slug}/">${s.name}</a></li>`).join('')}</ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="/dehradun/">Dehradun hub</a></li>
          <li><a href="/for-nris/">For NRIs</a></li>
          <li><a href="/about/">About us</a></li>
          <li><a href="/contact/">Contact</a></li>
        </ul>
        <h4>Guides</h4>
        <ul>${guides.filter((g) => g.live).map((g) => `<li><a href="${g.url}">${g.title}</a></li>`).join('')}<li><a href="/guides/">All guides</a></li></ul>
      </div>
      <div class="footer-col footer-contact">
        <h4>Contact</h4>
        <ul>
          <li>${icon('whatsapp')}<a href="${wa(page.wa)}" target="_blank" rel="noopener">WhatsApp ${cfg.phone}</a></li>
          <li>${icon('phone')}<a href="tel:${cfg.phoneHref}">${cfg.phone}</a></li>
          <li>${icon('mail')}<a href="mailto:${cfg.email}">${cfg.email}</a></li>
          <li>${icon('pin')}<span>${cfg.address.street}, ${cfg.address.locality},<br>${cfg.address.region} ${cfg.address.postal}</span></li>
          <li>${icon('clock')}<span>${cfg.hours}</span></li>
        </ul>
      </div>
    </div>
    <div class="footer-mid">
      <p><strong>Coming soon:</strong> Mussoorie &amp; Landour · Rishikesh · Nainital &amp; Bhimtal · Himachal</p>
      <p>Part of the Estate Partners family: ${cfg.family.map((f) => `<a href="${f.url}" target="_blank" rel="noopener">${f.name}</a>`).join(' · ')}</p>
    </div>
    <div class="footer-bottom">
      <p>© ${year} ${cfg.brand}. All rights reserved.${cfg.rera ? ` · RERA No. ${esc(cfg.rera)}` : ''}</p>
      <ul><li><a href="/privacy/">Privacy policy</a></li><li><a href="/terms/">Terms</a></li><li><a href="/sitemap.xml">Sitemap</a></li></ul>
    </div>
  </div>
  <div class="footer-mountains" aria-hidden="true">
    <svg viewBox="0 0 1440 160" preserveAspectRatio="none"><path d="M0 160V118l120-46 90 30 150-80 110 54 130-62 140 76 120-40 160 70 110-48 130 52 180-60v136Z" fill="currentColor"/></svg>
  </div>
</footer>

<a class="wa-float" href="${wa(page.wa)}" target="_blank" rel="noopener" data-track="whatsapp" aria-label="Chat with us on WhatsApp">
  <span class="wa-float__ring"></span>
  <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3Zm0 23.7c-2 0-4-.6-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.7Zm5.9-8c-.3-.2-1.9-1-2.2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6a9.8 9.8 0 0 1-1.8-2.3c-.2-.3 0-.5.1-.6l.5-.6.3-.5v-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6 0-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.2 1.3 3.4c.2.2 2.3 3.6 5.7 5 2.8 1.1 3.4.9 4 .8.6 0 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5l-.6-.4Z"/></svg>
  <span class="wa-float__label">Chat with us</span>
</a>`;
}

function layout(page, body) {
  const title = page.title;
  const og = abs(`/assets/img/${page.ogImage || 'doon-valley'}.webp`);
  const runtime = {
    whatsapp: cfg.whatsapp,
    formEndpoint: cfg.formEndpoint,
    calendly: cfg.calendly,
    page: page.key,
    waMsg: page.wa,
    thankYou: '__ROOT__thank-you/',
  };
  return `<!doctype html>
<html lang="en-IN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<script>document.documentElement.className+=' js'</script>
<title>${esc(title)}</title>
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${abs(page.url)}">
${page.noindex ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow, max-image-preview:large">'}
<meta name="theme-color" content="#111214">
<meta property="og:type" content="${page.article ? 'article' : 'website'}">
<meta property="og:site_name" content="${cfg.brand}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${abs(page.url)}">
<meta property="og:image" content="${og}">
<meta property="og:locale" content="en_IN">
<meta name="twitter:card" content="summary_large_image">
<meta name="geo.region" content="IN-UT">
<meta name="geo.placename" content="Dehradun">
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/main.css">
${page.heroVideo ? `<link rel="preload" as="image" href="/assets/video/${page.heroVideo}-poster.webp">` : ''}
${schema(page)}
${cfg.gaId ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${cfg.gaId}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${cfg.gaId}');</script>` : ''}
</head>
<body class="page-${page.key}${page.solidHeader ? ' has-solid-header' : ''}">
${header(page)}
<main id="main">
${body}
</main>
${footer(page)}
<script>window.MEP=${JSON.stringify(runtime)};</script>
<script src="/assets/js/main.js" defer></script>
</body>
</html>`;
}

module.exports = { layout };
