const C = require('../components');
const cfg = require('../../site.config');
const { HOME } = require('../templates');

module.exports = () => {
  const wa = "Hi, I'd like to know more about Mountain Estate Partners.";
  const crumbs = [HOME, { name: 'About', url: '/about/' }];
  const body = `
${C.hero({
  video: 'hero-green-hills',
  crumbs,
  eyebrow: 'About Mountain Estate Partners',
  title: 'A Local Team You Can Trust',
  lead: 'We live and work in Dehradun. We started Mountain Estate Partners to give hill-home owners the honest, hands-on partner we wished our own families had.',
  actions: `${C.btnWa(wa, 'WhatsApp us')}<a class="btn btn--ghost" href="/contact/"><span>Meet us in Dehradun</span>${C.icon('arrow')}</a>`,
})}
<div id="main-start"></div>

<section class="section">
  <div class="container">
    ${C.split({
      image: 'himalaya-view',
      alt: 'Himalayan peaks framed by deodar trees, seen from Landour',
      eyebrow: 'Our story',
      title: 'Built in Dehradun, for people who love the hills',
      body: `<p class="lead">Our founder grew up watching family homes in the hills fall into disrepair while their owners lived in Delhi, Dubai and London. Not for lack of love, but for lack of someone local they could trust.</p>
      <p>Mountain Estate Partners is that someone. We are based in Dehradun, we visit every property ourselves and we report everything honestly, the good and the bad. We are part of the Estate Partners family, alongside NRI Estate Partners and NCR Estate Partners.</p>
      <p class="muted"><em>Founder story and photo to be added.</em></p>`,
    })}
  </div>
</section>

<section class="section section--fill">
  <div class="container">
    ${C.head({ eyebrow: 'Team & partners', title: 'The people behind your property' })}
    <div class="team">
      ${[
        { ic: 'users', t: 'Founder', r: 'Dehradun', d: 'Leads client relationships and every new property onboarding personally.' },
        { ic: 'eye', t: 'Field team', r: 'Property managers', d: 'Visit, inspect, photograph and report. The people at your door.' },
        { ic: 'file', t: 'Partner lawyer', r: 'Property law', d: 'Title checks, registry, mutation and power of attorney.' },
        { ic: 'rupee', t: 'Partner CA', r: 'Tax & NRI matters', d: 'TDS, tax filing and repatriation guidance for NRI owners.' },
      ].map((m, i) => `<div class="member" data-reveal style="--d:${i * 80}ms"><span class="member__av">${C.icon(m.ic)}</span><h3>${m.t}</h3><small>${m.r}</small><p>${m.d}</p></div>`).join('')}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.head({ eyebrow: 'Values & process', title: 'How we work' })}
    ${C.features([
      { ic: 'eye', t: 'See it in person', d: 'Every property is visited by our team. We never manage from a spreadsheet.' },
      { ic: 'camera', t: 'Show, not tell', d: 'Photos and video with every report, so you see what we see.' },
      { ic: 'rupee', t: 'Fixed and fair', d: 'Transparent fees agreed in writing. No hidden commissions, no surprises.' },
      { ic: 'shield', t: 'Your approval first', d: 'No spend above your limit without your OK on WhatsApp.' },
      { ic: 'drop', t: 'Hill-specific care', d: 'Monsoon damp, winter checks and slope drainage. We know the hills.' },
      { ic: 'users', t: 'One point of contact', d: 'A named property manager who knows your home and your family.' },
    ], 3)}
  </div>
</section>

<section class="section section--fill">
  <div class="container contact-grid">
    <div data-reveal>
      <p class="eyebrow">Our office</p>
      <h2 class="s-title">Visit us in Dehradun</h2>
      <p class="s-text">${cfg.address.street}, ${cfg.address.locality}, ${cfg.address.region} ${cfg.address.postal}</p>
      <p class="muted">${cfg.hours}</p>
      <dl class="kv" style="margin-top:28px">
        <div><dt>Credentials</dt><dd>${cfg.rera ? `RERA No. ${cfg.rera}` : 'RERA registration in process. Number will be shown here once issued.'}</dd></div>
        <div><dt>Family</dt><dd>${cfg.family.map((f) => f.name).join(' · ')}</dd></div>
      </dl>
    </div>
    <div class="map" data-reveal style="--d:100ms"><iframe src="${cfg.mapEmbed}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mountain Estate Partners office on Google Maps"></iframe></div>
  </div>
</section>

${C.ctaBand({
  title: 'Want to meet the team?',
  text: 'Drop by our Dehradun office or book a video call from wherever you are.',
  waMsg: wa,
  second: C.btn('/contact/#book', 'Book a call', 'btn--line btn--lg', 'calendar'),
})}`;
  return {
    key: 'about',
    url: '/about/',
    title: 'About Mountain Estate Partners | Local Team in Dehradun',
    description: 'Mountain Estate Partners is a local Dehradun property team, with partner lawyers and CAs, caring for hill homes for NRIs and second-home owners.',
    h1: 'A Local Team You Can Trust',
    wa,
    crumbs,
    heroVideo: 'hero-green-hills',
    ogImage: 'himalaya-view',
    priority: 0.6,
    body,
  };
};
