const C = require('../components');
const cfg = require('../../site.config');
const { HOME } = require('../templates');

module.exports = () => {
  const wa = "Hi, I'd like to talk to Mountain Estate Partners about my property.";
  const crumbs = [HOME, { name: 'Contact', url: '/contact/' }];
  const body = `
${C.hero({
  video: 'hero-clouds',
  crumbs,
  eyebrow: 'Contact',
  title: 'Talk to Us',
  lead: `WhatsApp, call, email or send a short form. ${cfg.responsePromise}`,
  actions: `${C.btnWa(wa, 'WhatsApp us', 'btn--lg')}<a class="btn btn--ghost btn--lg" href="tel:${cfg.phoneHref}">${C.icon('phone')}<span>Call ${cfg.phone}</span></a>`,
})}
<div id="main-start"></div>

<section class="section">
  <div class="container contact-grid">
    <div>
      ${C.head({ eyebrow: 'Reach us', title: 'Pick what is easiest for you' })}
      <div class="contact-cards">
        <a class="ccard ccard--wa" href="${C.wa(wa)}" target="_blank" rel="noopener" data-track="whatsapp" data-reveal>${C.icon('whatsapp')}<div><strong>WhatsApp</strong><span>Fastest. ${cfg.responsePromise}</span></div></a>
        <a class="ccard" href="tel:${cfg.phoneHref}" data-reveal style="--d:60ms">${C.icon('phone')}<div><strong>${cfg.phone}</strong><span>${cfg.hours}</span></div></a>
        <a class="ccard" href="mailto:${cfg.email}" data-reveal style="--d:120ms">${C.icon('mail')}<div><strong>${cfg.email}</strong><span>For documents and detailed queries</span></div></a>
        <div class="ccard" data-reveal style="--d:180ms">${C.icon('pin')}<div><strong>Office</strong><span>${cfg.address.street}, ${cfg.address.locality}, ${cfg.address.region} ${cfg.address.postal}</span></div></div>
      </div>
    </div>
    <div data-reveal style="--d:100ms">${C.enquiryForm({ id: 'form-contact', title: 'Send a quick enquiry', note: 'Five fields. We reply on WhatsApp.' })}</div>
  </div>
</section>

<section class="section section--fill" id="book">
  <div class="container contact-grid">
    <div data-reveal>
      <p class="eyebrow">Book a call</p>
      <h2 class="s-title">A free call, in your time zone</h2>
      <p class="s-text">20 minutes with our Dehradun team on WhatsApp, Zoom or phone. We detect your time zone and show our hours in your local time.</p>
      ${C.checks(['No obligation', 'Owners in India and abroad', 'Honest advice, even if it is "do not buy"'], 1)}
    </div>
    <div data-reveal style="--d:100ms">${C.callBooking({ waMsg: "Hi, I'd like to book a call." })}</div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.head({ eyebrow: 'Find us', title: 'Our Dehradun office' })}
    <div class="map" data-reveal><iframe src="${cfg.mapEmbed}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mountain Estate Partners office on Google Maps"></iframe></div>
  </div>
</section>`;
  return {
    key: 'contact',
    url: '/contact/',
    title: 'Contact Mountain Estate Partners | WhatsApp & Call',
    description: `Contact Mountain Estate Partners in Dehradun on WhatsApp, phone or email, or book a call in your time zone. ${cfg.responsePromise}`,
    h1: 'Talk to Us',
    wa,
    crumbs,
    heroVideo: 'hero-clouds',
    ogImage: 'doon-valley',
    priority: 0.7,
    body,
  };
};
