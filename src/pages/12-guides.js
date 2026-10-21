const C = require('../components');
const { HOME } = require('../templates');

module.exports = () => {
  const wa = "Hi, I have a question about property in Uttarakhand.";
  const crumbs = [HOME, { name: 'Guides', url: '/guides/' }];
  const body = `
${C.hero({
  video: 'hero-valley',
  crumbs,
  eyebrow: 'Uttarakhand property guides',
  title: 'Property Guides',
  lead: 'Plain-English guides for NRIs and buyers on land law, buying, renting and caring for a home in the hills. New guides every month.',
  actions: `<a class="btn btn--ghost" href="#guides"><span>Read a guide</span>${C.icon('arrow')}</a>`,
})}
<div id="main-start"></div>
<section class="section" id="guides">
  <div class="container">
    ${C.head({ eyebrow: 'Latest', title: 'Start here', text: 'Our first guide covers the question we are asked most: who can buy what in Uttarakhand.' })}
    ${C.guidesGrid()}
  </div>
</section>
${C.ctaBand({
  title: 'Have a question we have not covered?',
  text: 'Ask us on WhatsApp. If it is a common question, it may become our next guide.',
  waMsg: wa,
  second: C.btn('/contact/', 'Contact us', 'btn--line btn--lg'),
})}`;
  return {
    key: 'guides',
    url: '/guides/',
    title: 'Uttarakhand Property Guides for NRIs & Buyers',
    description: 'Uttarakhand property guides for NRIs and buyers: land law, buying in Dehradun, homestay registration, monsoon home care and more, from a local team.',
    h1: 'Property Guides',
    wa,
    crumbs,
    heroVideo: 'hero-valley',
    ogImage: 'misty-hills',
    priority: 0.7,
    body,
  };
};
