// Page templates shared by many pages (the WordPress equivalent is a page template).
const { services } = require('./data');
const C = require('./components');

const HOME = { name: 'Home', url: '/' };
const DDN = { name: 'Dehradun', url: '/dehradun/' };

/**
 * Service page under a location hub. Every new town copies this pattern:
 * /<town>/<service-slug>/
 */
function servicePage(o) {
  const town = o.town || { name: 'Dehradun', slug: 'dehradun' };
  const hub = { name: town.name, url: `/${town.slug}/` };
  const svc = services.find((s) => s.slug === o.slug);
  const wa = svc.wa.replace('Dehradun', town.name);
  const url = `/${town.slug}/${o.slug}/`;
  const crumbs = [HOME, hub, { name: svc.name, url }];
  const page = {
    key: `${town.slug}-${o.slug}`,
    url,
    title: o.title,
    description: o.description,
    h1: o.h1,
    wa,
    crumbs,
    faqs: o.faqs,
    service: `${svc.name} in ${town.name}`,
    heroVideo: o.video || 'hero-valley',
    ogImage: svc.img,
    priority: 0.8,
  };
  page.body = `
${C.hero({
  video: o.video || 'hero-valley',
  crumbs,
  eyebrow: o.eyebrow || `${svc.name} · ${town.name}`,
  title: o.h1,
  lead: o.lead,
  actions: `${C.btnWa(wa, 'WhatsApp us')}<a class="btn btn--ghost" href="#enquire"><span>${o.cta}</span>${C.icon('arrow')}</a>`,
})}
<div id="main-start"></div>
${C.trustStrip()}
${o.sections}
<section class="section section--related">
  <div class="container">
    ${C.head({ eyebrow: `More in ${town.name}`, title: 'Other services, one local team', text: 'Most owners use two or three of our services together. One point of contact, one monthly report.' })}
    ${C.servicesGrid({ exclude: o.slug, base: hub.url })}
  </div>
</section>
${C.faq(o.faqs, { text: o.faqText || '' })}
${C.ctaForm({
  eyebrow: o.cta,
  title: o.ctaTitle || 'Tell us about your property',
  text: o.ctaText || `Share a few details and our ${town.name} team will get back to you on WhatsApp, usually within two working hours.`,
  waMsg: wa,
  service: svc.formValue,
  formTitle: o.formTitle || o.cta,
  image: o.ctaImage || 'himalaya-view',
  id: `form-${o.slug}`,
})}`;
  return page;
}

module.exports = { servicePage, HOME, DDN };
