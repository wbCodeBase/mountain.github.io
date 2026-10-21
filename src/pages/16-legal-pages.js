// Privacy, terms, thank-you and 404. Simple pages with a solid header.
// TODO: privacy & terms are starting templates and must be reviewed by a lawyer.
const C = require('../components');
const cfg = require('../../site.config');
const { HOME } = require('../templates');

const simple = (key, url, title, h1, description, inner, extra = {}) => ({
  key, url, title, description, h1,
  wa: "Hi, I have a question for Mountain Estate Partners.",
  crumbs: [HOME, { name: h1, url }],
  solidHeader: true,
  priority: 0.3,
  body: `<section class="section"><div class="container">${C.breadcrumbs([HOME, { name: h1, url }])}<article class="prose"><h1 style="font-size:var(--fs-h2)">${h1}</h1><p class="muted">Last updated: 20 October 2026</p>${inner}</article></div></section>`,
  ...extra,
});

const privacy = simple('privacy', '/privacy/', 'Privacy Policy | Mountain Estate Partners', 'Privacy policy',
  'How Mountain Estate Partners collects, uses and protects your personal information.', `
<div class="callout callout--warn"><p>Template text. Review with a lawyer before launch.</p></div>
<h2>What we collect</h2>
<p>When you contact us or fill a form we collect your name, WhatsApp number, country of residence, property location and the service you need. We also record the page you came from, campaign (UTM) parameters, your time zone and basic analytics data.</p>
<h2>How we use it</h2>
<ul><li>To reply to your enquiry on WhatsApp, phone or email</li><li>To provide and improve our services</li><li>To understand which pages and campaigns bring enquiries</li></ul>
<p>We do not sell your data. We share it only with partners needed to deliver a service you asked for (for example our partner lawyer or CA), and with service providers such as our form, email and analytics tools.</p>
<h2>Your rights</h2>
<p>You can ask us to access, correct or delete your information at any time by writing to <a href="mailto:${cfg.email}">${cfg.email}</a>. We handle personal data in line with India's Digital Personal Data Protection Act, 2023.</p>
<h2>Cookies & analytics</h2>
<p>We use analytics cookies to understand how visitors use the site. You can block cookies in your browser settings.</p>
<h2>Contact</h2>
<p>${cfg.brand}, ${cfg.address.street}, ${cfg.address.locality}, ${cfg.address.region} ${cfg.address.postal}. Email: <a href="mailto:${cfg.email}">${cfg.email}</a></p>`);

const terms = simple('terms', '/terms/', 'Terms of Use | Mountain Estate Partners', 'Terms of use',
  'Terms of use for the Mountain Estate Partners website.', `
<div class="callout callout--warn"><p>Template text. Review with a lawyer before launch.</p></div>
<h2>About this website</h2>
<p>This website is run by ${cfg.brand}, ${cfg.address.locality}, ${cfg.address.region}. By using it you agree to these terms.</p>
<h2>Information only</h2>
<p>Content on this site, including our guides, is general information and not legal, tax or financial advice. Laws and rules change. Always take professional advice for your situation. Legal and tax services are provided by independent partner professionals.</p>
<h2>Prices</h2>
<p>Prices shown are indicative and may change. Your final fee is the one agreed in writing before work starts.</p>
<h2>Services</h2>
<p>Each service is governed by a separate written agreement, which takes priority over these terms.</p>
<h2>Liability</h2>
<p>We take care to keep information accurate, but we are not liable for decisions made only on the basis of website content.</p>
<h2>Governing law</h2>
<p>These terms are governed by the laws of India, with courts at Dehradun, Uttarakhand having jurisdiction.</p>`);

const thankYou = {
  key: 'thank-you',
  url: '/thank-you/',
  title: 'Thank You | Mountain Estate Partners',
  description: 'Thank you for contacting Mountain Estate Partners.',
  h1: 'Thank you',
  wa: "Hi, I just sent an enquiry on your website.",
  solidHeader: true,
  noindex: true,
  body: `
<section class="ty">
  <div class="container">
    <div class="ty__tick">${C.icon('check')}</div>
    <h1>Thank you<span data-ty-name></span>.</h1>
    <p>Your enquiry has reached our Dehradun team. ${cfg.responsePromise} Want a faster reply? Send us your details on WhatsApp now.</p>
    <div class="ty__actions">
      <a class="btn btn--wa btn--lg" data-ty-wa href="${C.wa("Hi, I just sent an enquiry on your website.")}" target="_blank" rel="noopener" data-track="whatsapp">${C.icon('whatsapp')}<span>Continue on WhatsApp</span></a>
      ${C.btn('/guides/', 'Read our guides', 'btn--line btn--lg')}
    </div>
  </div>
</section>`,
};

const notFound = {
  key: '404',
  url: '/404/',
  file: '404.html',
  title: 'Page Not Found | Mountain Estate Partners',
  description: 'This page could not be found.',
  h1: 'Page not found',
  wa: "Hi, I couldn't find a page on your website.",
  solidHeader: true,
  noindex: true,
  body: `
<section class="ty">
  <div class="container">
    <p class="eyebrow">404</p>
    <h1>This trail ends here.</h1>
    <p>The page you were looking for has moved or does not exist. Try one of these instead.</p>
    <div class="ty__actions">${C.btn('/', 'Go home', 'btn--lg')}${C.btn('/dehradun/', 'Dehradun services', 'btn--line btn--lg')}</div>
  </div>
</section>`,
};

module.exports = () => [privacy, terms, thankYou, notFound];
