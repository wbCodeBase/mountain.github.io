// Tiny static server for local preview: node server.js → http://localhost:5173
const http = require('http'), fs = require('fs'), path = require('path');
const root = path.join(__dirname, 'dist'), port = process.env.PORT || 5173;
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.mp4': 'video/mp4', '.xml': 'application/xml', '.txt': 'text/plain', '.json': 'application/json', '.ico': 'image/x-icon' };
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  let file = path.join(root, p);
  if (!file.startsWith(root)) { res.writeHead(403); return res.end(); }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file)) { res.writeHead(404, { 'Content-Type': types['.html'] }); return fs.createReadStream(path.join(root, '404.html')).on('error', () => res.end('Not found')).pipe(res); }
  const stat = fs.statSync(file), type = types[path.extname(file)] || 'application/octet-stream';
  const range = req.headers.range;
  if (range && type === 'video/mp4') {
    const [s, e] = range.replace('bytes=', '').split('-'); const start = +s, end = e ? +e : stat.size - 1;
    res.writeHead(206, { 'Content-Range': `bytes ${start}-${end}/${stat.size}`, 'Accept-Ranges': 'bytes', 'Content-Length': end - start + 1, 'Content-Type': type });
    return fs.createReadStream(file, { start, end }).pipe(res);
  }
  res.writeHead(200, { 'Content-Type': type, 'Content-Length': stat.size });
  fs.createReadStream(file).pipe(res);
}).listen(port, () => console.log(`Preview → http://localhost:${port}`));
