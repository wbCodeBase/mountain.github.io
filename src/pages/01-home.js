const C = require('../components');
const cfg = require('../../site.config');

module.exports = () => {
  const wa = "Hi, I'm interested in your property services in Dehradun.";
  const faqs = [
    { q: 'What does Mountain Estate Partners do?', a: '<p>We are a local Dehradun team that helps you buy, verify, sell, rent out, run as a homestay, look after, repair and sort the paperwork for property in the hills. You get one point of contact and one monthly report, whether you live in Delhi, Dubai or Toronto.</p>' },
    { q: 'I live abroad. Can you manage my Dehradun home end to end?', a: '<p>Yes. Most of our clients are NRIs. We do video site visits, handle tenants or guests, arrange repairs with your approval on WhatsApp, and send monthly photo and video reports. Calls are scheduled in your time zone. See <a href="/for-nris/">For NRIs</a>.</p>' },
    { q: 'Which areas of Dehradun do you cover?', a: '<p>All of Dehradun city and nearby areas, including Rajpur Road, Sahastradhara Road, Mussoorie Diversion, Malsi, Jakhan, Vasant Vihar and Shimla Bypass. Mussoorie and Rishikesh are coming next.</p>' },
    { q: 'How do your fees work?', a: '<p>Fixed and transparent. Caretaking and rental management are monthly plans; verification is a fixed fee per property; homestay management is a revenue share; buying and selling are success-based. We share the full fee in writing before we start.</p>' },
    { q: 'Can outsiders or NRIs buy property in Uttarakhand?', a: '<p>Yes, with limits. Since the 2025 amendment, people from outside the state cannot buy agricultural land in 11 of 13 districts, including Dehradun, and residential land purchases are capped. Flats and homes in approved projects are usually fine. Read our <a href="/guides/uttarakhand-land-law/">Uttarakhand land law guide</a>.</p>' },
    { q: 'How quickly do you respond?', a: `<p>${cfg.responsePromise} Urgent issues at a managed property, such as a leak or a break-in, are attended the same day.</p>` },
  ];

  const body = `
${C.hero({
  size: 'full',
  video: 'hero-clouds',
  eyebrow: 'Property partner in Dehradun, Uttarakhand',
  title: 'Your Trusted Property Partner in the Hills',
  lead: 'A local Dehradun team that buys, sells, rents and cares for your home while you are away, with a photo and video report every month.',
  actions: `${C.btnWa(wa, 'WhatsApp us', 'btn--lg')}<a class="btn btn--ghost btn--lg" href="/contact/#book"><span>Book a free call</span>${C.icon('calendar')}</a>`,
  aside: `<div class="hero-aside" aria-label="Local time in Dehradun">
    <div class="hero-aside__row"><span class="hero-aside__label"><span class="live-dot"></span><span data-greet>Live from Dehradun</span></span></div>
    <div class="hero-aside__row"><span class="hero-aside__time" data-clock="Asia/Kolkata">--:--</span><span class="hero-aside__label">IST</span></div>
    <p>Our field team is on the ground today, checking on homes like yours.</p>
  </div>`,
})}
<div id="main-start"></div>
${C.trustStrip()}

<section class="section">
  <div class="container">
    ${C.split({
      image: 'doon-homes',
      alt: 'Family homes in the Doon valley, Dehradun',
      eyebrow: 'Why owners choose us',
      title: 'We are not a call centre. We live here.',
      body: `<p class="lead">Owning a home in the hills from far away is hard. Damp creeps in during the monsoon, tenants go quiet, and paperwork stalls. Our Dehradun team visits your property in person and tells you exactly what we see.</p>
      ${C.checks(['Every property visited in person', 'Monthly photo and video reports', 'Transparent, fixed pricing', 'Monsoon damp and winter checks', 'Partner lawyers and CAs', 'One point of contact'], 2)}
      <div class="actions">${C.btn('/about/', 'Meet the team', 'btn--line')}</div>`,
      badge: `<div class="badge-card">${C.icon('video')}<div><strong>Monthly video report</strong><span>Walkthrough, meter readings, repairs logged</span></div></div>`,
    })}
  </div>
</section>

<section class="section section--fill" id="services">
  <div class="container">
    ${C.head({ eyebrow: 'Dehradun services', title: 'Everything your hill property needs, under one roof', text: 'Eight services, one local team. Use one, or let us run everything.' })}
    ${C.servicesGrid()}
  </div>
</section>

${C.marquee()}

<section class="section">
  <div class="container">
    ${C.head({ eyebrow: 'Where we work', title: 'Now serving Dehradun. Mussoorie and Rishikesh coming soon.', text: 'We are starting where our team lives and expanding town by town, with the same eight services in every hill town.' })}
    ${C.locationsRow()}
  </div>
</section>

<section class="section section--fill">
  <div class="container">
    ${C.head({ eyebrow: 'How it works', title: 'Four simple steps, from wherever you are' })}
    <ol class="steps steps--h" data-steps>
      ${[
        { t: 'Tell us what you need', d: 'Message us on WhatsApp or fill a short form. Takes two minutes.' },
        { t: 'Free call in your time zone', d: 'We understand your property, goals and budget. No obligation.' },
        { t: 'We visit and send a plan', d: 'Our team inspects in person and shares a fixed-price plan.' },
        { t: 'Relax, we report monthly', d: 'Photo and video updates, statements and quick WhatsApp replies.' },
      ].map((s, i) => `<li class="step" data-reveal style="--d:${i * 140}ms"><span class="step__num">${String(i + 1).padStart(2, '0')}</span><h3>${s.t}</h3><p>${s.d}</p></li>`).join('')}
    </ol>
  </div>
</section>

<section class="section section--dark">
  <div class="container">
    ${C.split({
      image: 'deodar-forest',
      alt: 'Deodar trees above the Doon valley',
      eyebrow: 'For NRIs',
      title: 'Own property in the hills, from anywhere in the world',
      reverse: true,
      body: `<p>Whether you are in Dubai, London, New York, Toronto or Singapore, we are your eyes, hands and signature in Dehradun: video site visits, digital documents, power of attorney help and calls at a time that suits you.</p>
      <div class="zones">
        <span class="zone"><b>UAE</b><time data-clock="Asia/Dubai">--:--</time></span>
        <span class="zone"><b>UK</b><time data-clock="Europe/London">--:--</time></span>
        <span class="zone"><b>US</b><time data-clock="America/New_York">--:--</time></span>
        <span class="zone"><b>CA</b><time data-clock="America/Toronto">--:--</time></span>
        <span class="zone"><b>SG</b><time data-clock="Asia/Singapore">--:--</time></span>
        <span class="zone"><b>IN</b><time data-clock="Asia/Kolkata">--:--</time></span>
      </div>
      <div class="actions">${C.btn('/for-nris/', 'How we work for NRIs', '', 'arrow')}${C.btnWa("Hi, I'm an NRI and I own / want property in Dehradun.", 'WhatsApp from abroad', '')}</div>`,
    })}
  </div>
</section>

<section class="section">
  <div class="container">
    <p class="big-statement" data-words>Your home in the hills should be a joy, not a worry. <em>We keep it safe, dry, earning and ready for the day you come back.</em></p>
    <div class="stats">
      <div class="stat"><strong data-count="8">8</strong><span>Services under one roof</span></div>
      <div class="stat"><strong data-count="12">12</strong><span>Reports a year, photo and video</span></div>
      <div class="stat"><strong data-count="2" data-prefix="&lt;" data-suffix="h">&lt;2h</strong><span>WhatsApp reply in working hours</span></div>
      <div class="stat"><strong data-count="100" data-suffix="%">100%</strong><span>Properties visited in person</span></div>
    </div>
  </div>
</section>

<section class="section section--fill">
  <div class="container">
    ${C.head({ eyebrow: 'Owners and buyers', title: 'What our clients say' })}
    ${C.testimonialSlider()}
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="s-head head-row" data-reveal>
      <div><p class="eyebrow">Guides</p><h2 class="s-title">Know before you buy, rent or build</h2></div>
      ${C.btn('/guides/', 'All guides', 'btn--line')}
    </div>
    ${C.guidesGrid(require('../data').guides.slice(0, 3))}
  </div>
</section>

${C.faq(faqs)}

${C.ctaForm({
  eyebrow: 'Book a free call',
  title: 'Tell us about your hill property',
  text: 'Buying, selling, renting or just need someone to keep an eye on things? Share a few details and we will get back to you on WhatsApp.',
  waMsg: wa,
  id: 'form-home',
})}`;

  return {
    key: 'home',
    url: '/',
    title: 'Hill Property Management in Uttarakhand | Mountain Estate Partners',
    description: 'Local Dehradun team for NRIs and second-home owners: buy, verify, sell, rent, homestay, caretaking, maintenance and legal help. Monthly photo & video reports.',
    h1: 'Your Trusted Property Partner in the Hills',
    wa,
    faqs,
    heroVideo: 'hero-clouds',
    ogImage: 'doon-valley',
    priority: 1.0,
    body,
  };
};
