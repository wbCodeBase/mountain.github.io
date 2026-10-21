// Reusable blocks. Each returns an HTML string. Links/assets use root-absolute
// paths ("/dehradun/") — build.js rewrites them to relative paths per page.
const cfg = require('../site.config');
const { services, areas, locations, testimonials, guides, countries } = require('./data');

const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const wa = (msg) => `https://wa.me/${cfg.whatsapp}?text=${encodeURIComponent(msg)}`;

// ── Icons (24px line icons, stroke = currentColor) ──────────────
const P = {
  key: '<circle cx="8" cy="15" r="4"/><path d="M10.8 12.2 20 3m-3 3 3 3m-6 0 2 2"/>',
  shield: '<path d="M12 3 4 6v6c0 4.5 3.4 8.2 8 9 4.6-.8 8-4.5 8-9V6l-8-3Z"/><path d="m8.5 12 2.5 2.5L15.5 10"/>',
  tag: '<path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9-9-9Z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
  building: '<path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M16 9h2a2 2 0 0 1 2 2v10M2 21h20M8 7h4M8 11h4M8 15h4"/>',
  bed: '<path d="M3 18V6m0 6h18v6M3 15h18M7 12V9h5a2 2 0 0 1 2 2v1"/>',
  eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8V21h3.2l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6Z"/>',
  file: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',
  whatsapp: '<path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.1 3.1l-4.6 1.4Z"/><path d="M9 8.5c0 3.6 2.9 6.5 6.5 6.5l1-1.6-2-1-1 .9a4.6 4.6 0 0 1-2.8-2.8l.9-1-1-2-1.6 1Z"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  arrowUpRight: '<path d="M7 17 17 7M8 7h9v9"/>',
  check: '<path d="m5 12 5 5L20 7"/>',
  camera: '<path d="M4 7h3l2-3h6l2 3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z"/><circle cx="12" cy="13" r="4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18"/>',
  pin: '<path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  home: '<path d="M3 11 12 4l9 7M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
  rupee: '<path d="M6 4h12M6 9h12M9 4c6 0 6 10 0 10H6l8 7"/>',
  drop: '<path d="M12 3s7 7.5 7 12a7 7 0 0 1-14 0c0-4.5 7-12 7-12Z"/>',
  snow: '<path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1 19.1 4.9"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/>',
  video: '<rect x="2" y="6" width="14" height="12" rx="2"/><path d="m16 10 6-3v10l-6-3"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z"/>',
  quote: '<path d="M7 7h4v4c0 3-1.5 5-4 6M15 7h4v4c0 3-1.5 5-4 6"/>',
  play: '<path d="M7 4v16l13-8L7 4Z"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
};
const icon = (name, cls = '') =>
  `<svg class="i ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || ''}</svg>`;

const logoMark = `<svg class="logo__mark" viewBox="0 0 40 40" aria-hidden="true"><path d="M2 33 15 12l6.5 10L26 15l12 18Z" fill="currentColor"/><path d="m15 12 3.4 5.3-2.2-1.2-1.6 1.6-1.4-1.4Z" fill="var(--logo-snow, #fff)"/></svg>`;

// ── Media ─────────────────────────────────────────────────────
const img = (name, alt, { cls = '', sizes = '(min-width: 900px) 50vw, 100vw', eager = false } = {}) =>
  `<img class="${cls}" src="/assets/img/${name}-sm.webp" srcset="/assets/img/${name}-sm.webp 800w, /assets/img/${name}.webp 1600w" sizes="${sizes}" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;

// ── Buttons ───────────────────────────────────────────────────
const btnWa = (msg, label = 'WhatsApp us', cls = '') =>
  `<a class="btn btn--wa ${cls}" href="${wa(msg)}" target="_blank" rel="noopener" data-track="whatsapp">${icon('whatsapp')}<span>${label}</span></a>`;
const btn = (href, label, cls = '', ic = 'arrow') =>
  `<a class="btn ${cls}" href="${href}"><span>${label}</span>${ic ? icon(ic) : ''}</a>`;

// ── Hero (video) ──────────────────────────────────────────────
// size: 'full' (home) | 'page' (inner pages)
function hero({ video = 'hero-valley', image, eyebrow, title, lead, actions = '', crumbs, size = 'page', aside = '', meta = '' }) {
  const media = video
    ? `<video class="hero__video" muted playsinline loop autoplay preload="none" poster="/assets/video/${video}-poster.webp" data-src="/assets/video/${video}.mp4" aria-hidden="true"></video>`
    : img(image, '', { cls: 'hero__video', sizes: '100vw', eager: true });
  const words = title.split(' ').map((w, i) => `<span class="w"><span style="--i:${i}">${w}</span></span>`).join(' ');
  return `
<section class="hero hero--${size}" data-hero>
  <div class="hero__media">${media}<div class="hero__scrim"></div></div>
  <div class="container hero__inner">
    ${crumbs ? breadcrumbs(crumbs, true) : ''}
    ${eyebrow ? `<p class="eyebrow eyebrow--light hero__eyebrow">${eyebrow}</p>` : ''}
    <h1 class="hero__title">${words}</h1>
    ${lead ? `<p class="hero__lead">${lead}</p>` : ''}
    ${meta}
    ${actions ? `<div class="hero__actions">${actions}</div>` : ''}
  </div>
  ${aside}
  ${size === 'full' ? `<a href="#main-start" class="hero__scroll" aria-label="Scroll to content"><span></span></a>` : ''}
</section>`;
}

function breadcrumbs(items, light = false) {
  return `<nav class="crumbs ${light ? 'crumbs--light' : ''}" aria-label="Breadcrumb"><ol>${items
    .map((c, i) => (i < items.length - 1 ? `<li><a href="${c.url}">${c.name}</a></li>` : `<li aria-current="page">${c.name}</li>`))
    .join('')}</ol></nav>`;
}

// ── Section header ────────────────────────────────────────────
const head = ({ eyebrow, title, text, center = false, tag = 'h2' }) => `
<div class="s-head ${center ? 's-head--center' : ''}" data-reveal>
  ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
  <${tag} class="s-title">${title}</${tag}>
  ${text ? `<p class="s-text">${text}</p>` : ''}
</div>`;

// ── Trust strip ───────────────────────────────────────────────
function trustStrip(items) {
  const list = items || [
    { ic: 'pin', t: 'Local Dehradun team', d: 'We live and work here' },
    { ic: 'eye', t: 'Every property visited', d: 'In person, never remotely' },
    { ic: 'video', t: 'Monthly photo & video', d: 'Reports on WhatsApp and email' },
    { ic: 'rupee', t: 'Fixed, transparent fees', d: 'No hidden commissions' },
  ];
  if (cfg.rera) list.push({ ic: 'shield', t: 'RERA registered', d: cfg.rera });
  return `<div class="trust"><div class="container trust__grid">${list
    .map((x, i) => `<div class="trust__item" data-reveal style="--d:${i * 80}ms">${icon(x.ic)}<div><strong>${x.t}</strong><span>${x.d}</span></div></div>`)
    .join('')}</div></div>`;
}

// ── Services grid ─────────────────────────────────────────────
function servicesGrid({ exclude, base = '/dehradun/' } = {}) {
  const list = services.filter((s) => s.slug !== exclude);
  return `<div class="svc-grid">${list
    .map(
      (s, i) => `
  <a class="svc" href="${base}${s.slug}/" data-reveal style="--d:${(i % 4) * 70}ms">
    <div class="svc__img">${img(s.img, '', { sizes: '(min-width: 1100px) 25vw, (min-width: 640px) 50vw, 100vw' })}<span class="svc__num">${String(i + 1).padStart(2, '0')}</span></div>
    <div class="svc__body">
      <span class="svc__icon">${icon(s.icon)}</span>
      <h3>${s.name}</h3>
      <p>${s.short}</p>
      <span class="svc__more">Explore ${icon('arrow')}</span>
    </div>
  </a>`
    )
    .join('')}</div>`;
}

// ── Marquee of areas ──────────────────────────────────────────
function marquee(items = areas) {
  const row = items.map((a) => `<span>${a}</span><i aria-hidden="true">✦</i>`).join('');
  return `<div class="marquee" aria-label="Areas we cover: ${esc(items.join(', '))}"><div class="marquee__track" aria-hidden="true">${row}${row}</div></div>`;
}

// ── Steps ─────────────────────────────────────────────────────
function steps(list) {
  return `<ol class="steps" data-steps>${list
    .map(
      (s, i) => `<li class="step" data-reveal style="--d:${i * 110}ms"><span class="step__num">${String(i + 1).padStart(2, '0')}</span><h3>${s.t}</h3><p>${s.d}</p></li>`
    )
    .join('')}</ol>`;
}

// ── Split (image + text) ──────────────────────────────────────
function split({ image, alt = '', eyebrow, title, body, reverse = false, badge = '' }) {
  return `
<div class="split ${reverse ? 'split--rev' : ''}">
  <div class="split__media" data-reveal="clip">
    <div class="split__frame" data-parallax>${img(image, alt)}</div>
    ${badge}
  </div>
  <div class="split__body" data-reveal>
    ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
    <h2 class="s-title">${title}</h2>
    ${body}
  </div>
</div>`;
}

// ── Check list / feature cards ────────────────────────────────
const checks = (items, cols = 2) =>
  `<ul class="checks checks--${cols}">${items.map((t) => `<li>${icon('check')}<span>${t}</span></li>`).join('')}</ul>`;

function features(items, cols = 3) {
  return `<div class="feat feat--${cols}">${items
    .map(
      (f, i) =>
        `<div class="feat__item" data-reveal style="--d:${(i % cols) * 80}ms">${f.ic ? `<span class="feat__icon">${icon(f.ic)}</span>` : ''}<h3>${f.t}</h3><p>${f.d}</p></div>`
    )
    .join('')}</div>`;
}

// ── Pricing plans ─────────────────────────────────────────────
function pricing(plans, note = '') {
  return `<div class="plans">${plans
    .map(
      (p, i) => `
  <div class="plan ${p.featured ? 'plan--featured' : ''}" data-reveal style="--d:${i * 90}ms">
    ${p.featured ? '<span class="plan__badge">Most chosen</span>' : ''}
    <h3 class="plan__name">${p.name}</h3>
    <p class="plan__for">${p.for}</p>
    <p class="plan__price"><span>${p.price}</span>${p.per ? `<small>${p.per}</small>` : ''}</p>
    ${checks(p.items, 1)}
    <a class="btn ${p.featured ? '' : 'btn--line'} btn--block" href="${wa(p.wa)}" target="_blank" rel="noopener" data-track="whatsapp"><span>${p.cta || 'Choose plan'}</span>${icon('arrow')}</a>
  </div>`
    )
    .join('')}</div>${note ? `<p class="plans__note">${note}</p>` : ''}`;
}

// ── Report sample (mock phone UI) ─────────────────────────────
function reportSample({ title = 'Monthly property report', rows, image = 'doon-homes' }) {
  const r = rows || [
    ['Exterior & boundary', 'OK'],
    ['Roof & terrace drains', 'Cleared'],
    ['Damp / seepage', 'Bedroom 2 · watch'],
    ['Water & electricity', 'OK'],
    ['Meter readings', 'Logged'],
  ];
  return `
<div class="report" data-reveal>
  <div class="report__bar"><span></span><span></span><span></span><em>${title}</em></div>
  <div class="report__body">
    <div class="report__photos">${img(image, 'Sample report photo', { sizes: '320px' })}<div class="report__vid">${icon('play')}<span>Walkthrough · 3:42</span></div></div>
    <ul>${r.map(([k, v]) => `<li><span>${k}</span><b class="${/watch|due|issue/i.test(v) ? 'warn' : ''}">${v}</b></li>`).join('')}</ul>
    <p class="report__foot">${icon('check')} Visited by field team · Sample report</p>
  </div>
</div>`;
}

// ── Testimonials slider ───────────────────────────────────────
function testimonialSlider(list = testimonials) {
  return `
<div class="tslider" data-slider>
  <div class="tslider__track" data-slider-track>
    ${list
      .map(
        (t) => `<figure class="tcard">
      <div class="tcard__stars" aria-label="5 out of 5">${icon('star').repeat(5)}</div>
      <blockquote>“${t.quote}”</blockquote>
      <figcaption><span class="tcard__avatar">${t.name.replace(/[^A-Z]/g, '').slice(0, 2)}</span><span><strong>${t.name}</strong><small>${t.meta}</small></span><em>${t.service}</em></figcaption>
    </figure>`
      )
      .join('')}
  </div>
  <div class="tslider__nav">
    <button class="icon-btn" data-slider-prev aria-label="Previous testimonial">${icon('arrow', 'flip')}</button>
    <div class="tslider__dots" data-slider-dots></div>
    <button class="icon-btn" data-slider-next aria-label="Next testimonial">${icon('arrow')}</button>
  </div>
</div>`;
}

// ── Locations ─────────────────────────────────────────────────
function locationsRow() {
  return `<div class="locs">${locations
    .map(
      (l, i) => `
  <${l.url ? `a href="${l.url}"` : 'div'} class="loc ${l.status === 'live' ? 'loc--live' : ''}" data-reveal style="--d:${i * 70}ms">
    ${img(l.img, `${l.name} hills`, { sizes: '(min-width: 900px) 20vw, 60vw' })}
    <div class="loc__body"><span class="loc__status">${l.status === 'live' ? '<i></i>Now serving' : l.note}</span><h3>${l.name}</h3>${l.url ? `<span class="loc__go">${icon('arrowUpRight')}</span>` : ''}</div>
  </${l.url ? 'a' : 'div'}>`
    )
    .join('')}</div>`;
}

// ── Guides grid ───────────────────────────────────────────────
function guidesGrid(list = guides) {
  return `<div class="guides">${list
    .map(
      (g, i) => `
  <${g.live ? `a href="${g.url}"` : 'div'} class="guide ${g.live ? '' : 'guide--soon'}" data-reveal style="--d:${i * 80}ms">
    <div class="guide__img">${img(g.img, '', { sizes: '(min-width: 900px) 33vw, 100vw' })}</div>
    <div class="guide__body"><p class="guide__meta"><span>${g.tag}</span><span>${g.read}</span></p><h3>${g.title}</h3><p>${g.summary}</p>${g.live ? `<span class="svc__more">Read guide ${icon('arrow')}</span>` : ''}</div>
  </${g.live ? 'a' : 'div'}>`
    )
    .join('')}</div>`;
}

// ── FAQ accordion ─────────────────────────────────────────────
function faq(items, { title = 'Frequently asked questions', eyebrow = 'FAQ', text = '' } = {}) {
  return `
<section class="section" id="faq">
  <div class="container faq">
    <div class="faq__head">${head({ eyebrow, title, text })}
      <div class="faq__help" data-reveal><p>Still have a question?</p>${btnWa('Hi, I have a question about your property services in Dehradun.', 'Ask on WhatsApp', 'btn--sm')}</div>
    </div>
    <div class="faq__list">${items
      .map(
        (f, i) => `<details class="faq__item" data-reveal style="--d:${i * 50}ms"><summary><span>${f.q}</span><i>${icon('plus')}</i></summary><div class="faq__a"><div>${f.a}</div></div></details>`
      )
      .join('')}</div>
  </div>
</section>`;
}

// ── Enquiry form ──────────────────────────────────────────────
const serviceOptions = (selected) =>
  ['<option value="">Select a service</option>']
    .concat(services.map((s) => `<option${s.formValue === selected ? ' selected' : ''}>${s.formValue}</option>`))
    .concat([`<option${selected === 'NRI property management' ? ' selected' : ''}>NRI property management</option>`, `<option${selected === 'Not sure yet' ? ' selected' : ''}>Not sure yet</option>`])
    .join('');

const locationOptions = () =>
  ['<option value="">Select location</option>']
    .concat(['Dehradun city', ...areas.slice(0, 8), 'Elsewhere in Dehradun', 'Mussoorie / Landour', 'Rishikesh', 'Other hill town'].map((a) => `<option>${a}</option>`))
    .join('');

function enquiryForm({ id = 'enquiry', service = '', title = 'Tell us what you need', note = '', submit = 'Send enquiry' } = {}) {
  const codes = [...new Map(countries.filter((c) => c[1]).map((c) => [c[1], c])).values()];
  return `
<form class="lead-form" id="${id}" data-lead-form="${id}" novalidate>
  <div class="lead-form__head"><h3>${title}</h3>${note ? `<p>${note}</p>` : ''}</div>
  <div class="field">
    <label for="${id}-name">Full name</label>
    <input id="${id}-name" name="name" type="text" autocomplete="name" required placeholder="Your name">
  </div>
  <div class="field">
    <label for="${id}-phone">WhatsApp number</label>
    <div class="phone">
      <select name="dial_code" aria-label="Country code" data-dial>${codes.map(([n, c]) => `<option value="${c}"${c === '+91' ? ' selected' : ''}>${c}</option>`).join('')}</select>
      <input id="${id}-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel-national" required placeholder="WhatsApp number" pattern="[0-9 ()-]{6,16}">
    </div>
  </div>
  <div class="field-row">
    <div class="field">
      <label for="${id}-country">Country of residence</label>
      <select id="${id}-country" name="country" required data-country><option value="">Select</option>${countries.map(([n]) => `<option>${n}</option>`).join('')}</select>
    </div>
    <div class="field">
      <label for="${id}-location">Property location</label>
      <select id="${id}-location" name="location" required>${locationOptions()}</select>
    </div>
  </div>
  <div class="field">
    <label for="${id}-service">Service needed</label>
    <select id="${id}-service" name="service" required>${serviceOptions(service)}</select>
  </div>
  <div class="hp" aria-hidden="true"><label>Website<input name="website" tabindex="-1" autocomplete="off"></label></div>
  <button class="btn btn--block lead-form__submit" type="submit"><span>${submit}</span>${icon('arrow')}</button>
  <p class="lead-form__fine">${icon('lock')}<span>Your details stay private. See our <a href="/privacy/">privacy policy</a>.</span></p>
  <p class="lead-form__error" role="alert" hidden></p>
</form>`;
}

// ── CTA band with form ────────────────────────────────────────
function ctaForm({ eyebrow = 'Get started', title, text, waMsg, service, formTitle, image = 'himalaya-view', id = 'enquiry' }) {
  return `
<section class="section cta-form" id="enquire">
  <div class="cta-form__bg">${img(image, '', { sizes: '100vw' })}</div>
  <div class="container cta-form__grid">
    <div class="cta-form__copy" data-reveal>
      <p class="eyebrow eyebrow--light">${eyebrow}</p>
      <h2 class="s-title">${title}</h2>
      <p class="s-text">${text}</p>
      <div class="cta-form__actions">${btnWa(waMsg, 'Chat on WhatsApp', 'btn--lg')}<a class="btn btn--ghost btn--lg" href="tel:${cfg.phoneHref}">${icon('phone')}<span>${cfg.phone}</span></a></div>
      <ul class="cta-form__promise">
        <li>${icon('clock')} ${cfg.responsePromise}</li>
        <li>${icon('globe')} Calls in your time zone: UAE, UK, US, Canada, Singapore</li>
        <li>${icon('shield')} No obligation, no spam</li>
      </ul>
    </div>
    <div data-reveal style="--d:120ms">${enquiryForm({ id, service, title: formTitle || 'Send us a quick enquiry' })}</div>
  </div>
</section>`;
}

// ── Simple CTA band ───────────────────────────────────────────
const ctaBand = ({ title, text, waMsg, second = '' }) => `
<section class="cta-band">
  <div class="container cta-band__inner" data-reveal>
    <div><h2>${title}</h2>${text ? `<p>${text}</p>` : ''}</div>
    <div class="cta-band__actions">${btnWa(waMsg, 'WhatsApp us', 'btn--lg')}${second}</div>
  </div>
</section>`;

// ── Call booking (time-zone aware) ────────────────────────────
function callBooking({ waMsg = "Hi, I'd like to book a call." } = {}) {
  return `
<div class="booking" data-booking data-wa="${esc(waMsg)}">
  <div class="booking__head">${icon('calendar')}<div><h3>Book a call in your time zone</h3><p>Free 20-minute call with our Dehradun team.</p></div></div>
  <div class="booking__clocks">
    <div><span>Your time</span><strong data-clock="local">--:--</strong><small data-tz-name>Detecting…</small></div>
    <div><span>Dehradun (IST)</span><strong data-clock="Asia/Kolkata">--:--</strong><small>Asia/Kolkata</small></div>
  </div>
  <label class="field"><span class="label">Your time zone</span><select data-tz-select aria-label="Your time zone"></select></label>
  <p class="booking__overlap" data-overlap></p>
  <button type="button" class="btn btn--block" data-book>${icon('calendar')}<span>Pick a time slot</span></button>
  <p class="booking__alt">Prefer chat? <a href="${wa(waMsg)}" target="_blank" rel="noopener" data-track="whatsapp">WhatsApp us instead</a></p>
</div>`;
}

module.exports = {
  esc, wa, icon, logoMark, img, btn, btnWa, hero, breadcrumbs, head, trustStrip, servicesGrid, marquee, steps, split,
  checks, features, pricing, reportSample, testimonialSlider, locationsRow, guidesGrid, faq, enquiryForm, ctaForm, ctaBand, callBooking,
};
