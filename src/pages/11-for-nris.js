const C = require('../components');
const { services } = require('../data');
const { HOME } = require('../templates');

module.exports = () => {
  const wa = "Hi, I'm an NRI and I'd like help with my property in Uttarakhand.";
  const crumbs = [HOME, { name: 'For NRIs', url: '/for-nris/' }];
  const faqs = [
    { q: 'Can NRIs buy property in Uttarakhand?', a: '<p>NRIs who are Indian citizens can buy residential and commercial property, but Uttarakhand\'s 2025 land law restricts buyers from outside the state from buying agricultural land in 11 of 13 districts, including Dehradun, and limits residential land. OCI holders cannot buy agricultural land, plantations or farmhouses. See our <a href="/guides/uttarakhand-land-law/">land law guide</a>.</p>' },
    { q: 'How do I pay for services from abroad?', a: '<p>By bank transfer to our Indian account against a GST invoice. Many NRI clients pay from their NRO or NRE account; your CA can advise which suits you.</p>' },
    { q: 'Can I see my property without travelling?', a: '<p>Yes. We do live video walkthroughs on WhatsApp or Zoom at a time that suits your time zone, and send recorded videos with every report.</p>' },
    { q: 'Where should rent from my Dehradun property go?', a: '<p>Rent is generally paid into your NRO account, and tenants may need to deduct TDS on rent paid to NRIs. Our partner CA can help you with tax filing and repatriation.</p>' },
    { q: 'Do you need a power of attorney for everything?', a: '<p>No. Caretaking, rentals and repairs work on a simple service agreement. A POA is needed for selling, buying registration or some government filings. We keep POAs specific and limited.</p>' },
  ];

  const body = `
${C.hero({
  video: 'hero-range',
  crumbs,
  eyebrow: 'For NRIs in UAE, US, UK, Canada & Singapore',
  title: 'Own Property in the Hills, from Anywhere in the World',
  lead: 'Your eyes, hands and signature in Dehradun: video site visits, digital documents, power of attorney help and calls in your time zone.',
  actions: `<a class="btn btn--wa" href="#book">${C.icon('calendar')}<span>Book a call in your time zone</span></a>${C.btnWa(wa, 'WhatsApp us', 'btn--ghost')}`,
})}
<div id="main-start"></div>
${C.trustStrip([
  { ic: 'globe', t: 'Calls in your time zone', d: 'Early or late, IST is our problem' },
  { ic: 'video', t: 'Live video site visits', d: 'See your property any time' },
  { ic: 'file', t: 'Digital documents', d: 'Scans, e-signatures, couriered originals' },
  { ic: 'rupee', t: 'Partner CA for tax', d: 'TDS, filing & repatriation guidance' },
])}

<section class="section">
  <div class="container">
    ${C.head({ eyebrow: 'How we work for owners abroad', title: 'Built for people who cannot just drop by' })}
    ${C.features([
      { ic: 'video', t: 'Video site visits', d: 'Live walkthroughs on WhatsApp or Zoom, plus recorded videos with every report.' },
      { ic: 'file', t: 'Digital documents', d: 'Scanned papers, e-signed agreements where allowed, and a secure shared folder for your property.' },
      { ic: 'key', t: 'Power of attorney help', d: 'Specific, limited POAs drafted by partner lawyers and guidance on signing at your embassy.' },
      { ic: 'clock', t: 'Time-zone calls', d: 'We schedule calls to suit Dubai, London, New York, Toronto or Singapore.' },
      { ic: 'camera', t: 'Monthly reports', d: 'Photos, video, meter readings, rent and expenses in one monthly report.' },
      { ic: 'rupee', t: 'Repatriation guidance', d: 'Rent, sale proceeds and TDS handled with our partner chartered accountant.' },
    ], 3)}
  </div>
</section>

<section class="section section--dark">
  <div class="container">
    ${C.head({ eyebrow: 'Wherever you are', title: 'Working with families across the world' })}
    <div class="feat feat--3" style="background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.1)">
      ${[
        { c: 'UAE & the Gulf', tz: 'Asia/Dubai', d: 'Just 1.5 hours behind IST. Calls during your lunch break or after work, and quick WhatsApp turnarounds.' },
        { c: 'United Kingdom', tz: 'Europe/London', d: 'Morning calls in the UK are afternoon in Dehradun, so our field team can show you the house live.' },
        { c: 'US & Canada', tz: 'America/New_York', d: 'We take early-morning IST calls so you can talk in your evening. Reports are ready when you wake up.' },
      ].map((x, i) => `<div class="feat__item" style="background:var(--ink);--d:${i * 80}ms" data-reveal><span class="zone" style="margin-bottom:18px"><b>${x.c.split(' ')[0]}</b><time data-clock="${x.tz}">--:--</time></span><h3>${x.c}</h3><p style="color:rgba(255,255,255,.7)">${x.d}</p></div>`).join('')}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.head({ eyebrow: 'Services', title: 'Everything you need in Dehradun' })}
    ${C.servicesGrid()}
  </div>
</section>

<section class="section section--fill" id="book">
  <div class="container contact-grid">
    <div data-reveal>
      <p class="eyebrow">Book a call</p>
      <h2 class="s-title">Talk to us at a time that suits you</h2>
      <p class="s-text">A free 20-minute call with our Dehradun team. Tell us about your property or plans, and we will explain exactly how we would help, and what it would cost.</p>
      ${C.checks(['No obligation', 'Calls on WhatsApp, Zoom or phone', 'Your time zone, detected automatically'], 1)}
    </div>
    <div data-reveal style="--d:100ms">${C.callBooking({ waMsg: "Hi, I'm an NRI and I'd like to book a call." })}</div>
  </div>
</section>

${C.faq(faqs)}

${C.ctaForm({
  eyebrow: 'Get in touch',
  title: 'Tell us about your property back home',
  text: 'Share a few details and we will reply on WhatsApp, at a time that works for your time zone.',
  waMsg: wa,
  service: 'NRI property management',
  id: 'form-nri',
  image: 'snow-peaks',
})}`;

  return {
    key: 'for-nris',
    url: '/for-nris/',
    title: 'NRI Property Management in Uttarakhand | Manage from Abroad',
    description: 'NRI property management in Uttarakhand: video site visits, digital documents, POA help, time-zone calls, monthly reports and repatriation guidance via partner CA.',
    h1: 'Own Property in the Hills, from Anywhere in the World',
    wa,
    crumbs,
    faqs,
    heroVideo: 'hero-range',
    ogImage: 'deodar-forest',
    priority: 0.9,
    body,
  };
};
