const C = require('../components');
const { servicePage } = require('../templates');

module.exports = () => servicePage({
  slug: 'property-maintenance',
  title: 'Property Maintenance & Repairs in Dehradun',
  description: 'Plumbing, electrical, painting, waterproofing and seepage, pest control, deep cleaning and renovation in Dehradun, quoted and approved remotely on WhatsApp.',
  h1: 'Repairs and Maintenance, Handled for You',
  lead: 'Vetted local tradespeople, clear quotes on WhatsApp and before-and-after photos, so you can approve and track work from anywhere.',
  cta: 'Request a repair',
  video: 'hero-valley',
  sections: `
<section class="section">
  <div class="container">
    ${C.head({ eyebrow: 'Services', title: 'One team for every job' })}
    ${C.features([
      { ic: 'drop', t: 'Plumbing', d: 'Leaks, taps, tanks, motors, geysers and bathroom fittings.' },
      { ic: 'building', t: 'Electrical', d: 'Wiring faults, MCBs, inverters, lights and appliance points.' },
      { ic: 'home', t: 'Painting', d: 'Interior and exterior painting, including damp-proof primers.' },
      { ic: 'shield', t: 'Waterproofing & seepage', d: 'Roof, terrace and wall waterproofing. The number-one issue for hill homes.' },
      { ic: 'eye', t: 'Pest control', d: 'Termites, rodents and seasonal pests, with treatment certificates.' },
      { ic: 'check', t: 'Deep cleaning', d: 'Move-in, move-out and pre-visit cleaning, including sofas and tanks.' },
      { ic: 'wrench', t: 'Carpentry & fixes', d: 'Doors, windows, locks, wardrobes and general handyman work.' },
      { ic: 'key', t: 'Renovation', d: 'Kitchens, bathrooms and full refurbishments, project-managed end to end.' },
    ], 4)}
  </div>
</section>

<section class="section section--fill">
  <div class="container">
    ${C.head({ eyebrow: 'Remote approvals', title: 'How jobs are quoted and approved' })}
    <ol class="steps steps--h" data-steps>
      ${[
        { t: 'You report, or we spot it', d: 'Message us, or our caretaker flags it during a visit.' },
        { t: 'Inspection & quote', d: 'We inspect, photograph the issue and share an itemised quote on WhatsApp.' },
        { t: 'You approve', d: 'Approve with one reply. Nothing starts without your OK above your set limit.' },
        { t: 'Done & documented', d: 'Before-and-after photos, bills and a warranty note where applicable.' },
      ].map((s, i) => `<li class="step" data-reveal style="--d:${i * 140}ms"><span class="step__num">${String(i + 1).padStart(2, '0')}</span><h3>${s.t}</h3><p>${s.d}</p></li>`).join('')}
    </ol>
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.head({ eyebrow: 'Before & after', title: 'See the difference', text: 'Drag the slider to compare.' })}
    <div class="cols2">
      <div data-reveal>
        <div class="ba" data-ba>
          <img src="/assets/img/heritage-house.webp" alt="After: restored hill home exterior" loading="lazy">
          <img class="ba__before" src="/assets/img/heritage-house.webp" alt="" loading="lazy">
          <div class="ba__handle"></div><span class="ba__tag ba__tag--l">Before</span><span class="ba__tag ba__tag--r">After</span>
          <input type="range" min="0" max="100" value="50" aria-label="Compare before and after">
        </div>
        <p class="gallery-note">Exterior repaint & waterproofing (sample, replace with project photos)</p>
      </div>
      <div data-reveal style="--d:100ms">
        <div class="ba" data-ba>
          <img src="/assets/img/doon-homes.webp" alt="After: refreshed home facade" loading="lazy">
          <img class="ba__before" src="/assets/img/doon-homes.webp" alt="" loading="lazy">
          <div class="ba__handle"></div><span class="ba__tag ba__tag--l">Before</span><span class="ba__tag ba__tag--r">After</span>
          <input type="range" min="0" max="100" value="50" aria-label="Compare before and after">
        </div>
        <p class="gallery-note">Seepage repair & boundary refresh (sample, replace with project photos)</p>
      </div>
    </div>
  </div>
</section>`,
  faqs: [
    { q: 'Do I need a caretaker plan to book repairs?', a: '<p>No. You can book one-off jobs. Owners on a caretaker or rental plan get priority scheduling.</p>' },
    { q: 'How do you price jobs?', a: '<p>Itemised quotes for materials and labour, shared on WhatsApp before work starts. A small coordination fee applies to one-off jobs and is shown on the quote.</p>' },
    { q: 'How do I pay from abroad?', a: '<p>By bank transfer or UPI to our account against an invoice. For larger renovations we agree staged payments linked to progress photos.</p>' },
    { q: 'What is the best time for waterproofing?', a: '<p>Before the monsoon, ideally between March and May. Book early because local applicators get busy.</p>' },
    { q: 'Is the work guaranteed?', a: '<p>We re-attend any workmanship issue on jobs we arranged. Waterproofing and pest control come with the contractor\'s written warranty.</p>' },
  ],
  ctaTitle: 'Request a repair',
  ctaText: 'Tell us what needs fixing. Photos help. We will inspect and send a clear quote on WhatsApp.',
  ctaImage: 'monsoon',
});
