// Standalone "Coming soon — WhatsApp us" pages for the sister domains
// (NCREstatepartners.com, NRIEstatepartners.com). Self-contained single HTML files.
const cfg = require('../site.config');

module.exports = ({ brand, domain, line }) => {
  const wa = `https://wa.me/${cfg.whatsapp}?text=${encodeURIComponent(`Hi, I found ${brand} and would like to talk about my property.`)}`;
  return `<!doctype html>
<html lang="en-IN">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${brand} | Coming soon</title>
<meta name="description" content="${brand} is coming soon. ${line} WhatsApp us today.">
<link rel="canonical" href="https://${domain}/">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box}html,body{margin:0;height:100%}
body{font-family:Inter,Arial,sans-serif;background:#fff;color:#2b2e33;display:grid;place-items:center;padding:24px;-webkit-font-smoothing:antialiased}
main{max-width:640px;text-align:center}
.mark{width:56px;height:56px;margin:0 auto 28px;opacity:0;animation:up .8s .1s cubic-bezier(.16,1,.3,1) forwards}
.eyebrow{font-size:.78rem;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:#62666d;margin:0 0 16px;opacity:0;animation:up .8s .2s cubic-bezier(.16,1,.3,1) forwards}
h1{font-size:clamp(2.4rem,7vw,4.2rem);line-height:1.02;letter-spacing:-.035em;color:#111214;margin:0 0 18px;font-weight:800;opacity:0;animation:up .9s .3s cubic-bezier(.16,1,.3,1) forwards}
p.lead{font-size:1.15rem;color:#62666d;margin:0 auto 32px;max-width:46ch;opacity:0;animation:up .9s .45s cubic-bezier(.16,1,.3,1) forwards}
.btn{display:inline-flex;align-items:center;gap:10px;height:56px;padding:0 28px;border-radius:999px;background:#25d366;color:#06301a;font-weight:700;text-decoration:none;box-shadow:0 14px 30px -12px rgba(6,48,26,.55);transition:transform .3s;opacity:0;animation:up .9s .6s cubic-bezier(.16,1,.3,1) forwards}
.btn:hover{transform:translateY(-2px)}
.btn svg{width:22px;height:22px}
.fam{margin-top:48px;padding-top:24px;border-top:1px solid #e4e4e0;font-size:.9rem;color:#62666d;opacity:0;animation:up .9s .8s forwards}
.fam a{color:#111214;font-weight:600}
@keyframes up{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
@media (prefers-reduced-motion:reduce){*{animation:none!important;opacity:1!important}}
</style>
</head>
<body>
<main>
  <svg class="mark" viewBox="0 0 40 40" aria-hidden="true"><path d="M2 33 15 12l6.5 10L26 15l12 18Z" fill="#111214"/></svg>
  <p class="eyebrow">Coming soon</p>
  <h1>${brand}</h1>
  <p class="lead">${line} Our website is on its way. Until then, our team is one message away.</p>
  <a class="btn" href="${wa}" target="_blank" rel="noopener"><svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3Zm5.9 15.7c-.3-.2-1.9-1-2.2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6a9.8 9.8 0 0 1-1.8-2.3c-.2-.3 0-.5.1-.6l.5-.6.3-.5v-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6 0-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.2 1.3 3.4c.2.2 2.3 3.6 5.7 5 2.8 1.1 3.4.9 4 .8.6 0 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5l-.6-.4Z"/></svg>WhatsApp us</a>
  <p class="fam">Part of the Estate Partners family · Live now: <a href="${cfg.domain}/">Mountain Estate Partners</a> (Dehradun)</p>
</main>
</body>
</html>`;
};
