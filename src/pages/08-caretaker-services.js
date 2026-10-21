const C = require('../components');
const { servicePage } = require('../templates');

module.exports = () => servicePage({
  slug: 'caretaker-services',
  title: 'Property Caretaker Services in Dehradun | NRI Home Care',
  description: 'Caretaker services for your Dehradun home: weekly, fortnightly or monthly visits, monsoon damp and winter checks, encroachment watch and photo/video reports.',
  h1: 'Caretaker Services for Your Dehradun Home',
  lead: 'Regular visits, seasonal care and a photo and video report after every visit, so your empty home stays safe, dry and ready.',
  cta: 'Book a free property check',
  video: 'hero-range',
  sections: `
<section class="section">
  <div class="container">
    ${C.head({ eyebrow: 'Plans', title: 'Choose how often we visit', center: true, text: 'Every plan includes a written checklist, photos and a short walkthrough video after each visit.' })}
    ${C.pricing([
      { name: 'Monthly', for: 'Apartments & low-risk homes', price: '₹2,499', per: '/ month', items: ['1 visit a month', 'Exterior & interior check', 'Air out, run taps & switches', 'Photo + video report', 'Bill & meter check'], wa: "Hi, I'm interested in the Monthly caretaker plan in Dehradun.", cta: 'Choose Monthly' },
      { name: 'Fortnightly', for: 'Houses & villas', price: '₹3,999', per: '/ month', featured: true, items: ['2 visits a month', 'Everything in Monthly', 'Garden & drain check', 'Seasonal monsoon & winter care', 'Encroachment watch', 'Minor fixes coordinated'], wa: "Hi, I'm interested in the Fortnightly caretaker plan in Dehradun.", cta: 'Choose Fortnightly' },
      { name: 'Weekly', for: 'Large villas & estates', price: '₹6,999', per: '/ month', items: ['4 visits a month', 'Everything in Fortnightly', 'Staff supervision (guard, gardener)', 'Monthly deep-check report', 'Priority same-day response'], wa: "Hi, I'm interested in the Weekly caretaker plan in Dehradun.", cta: 'Choose Weekly' },
    ], 'Indicative pricing from ₹2,499/month plus GST. Repairs, cleaning and staff costs are quoted separately and need your approval.')}
  </div>
</section>

<section class="section section--fill">
  <div class="container">
    ${C.head({ eyebrow: 'Every visit', title: 'What each visit covers' })}
    ${C.checks(['Walk around the boundary, gate and locks', 'Check every room for damp, leaks and pests', 'Open windows and air the house', 'Run taps, flush, check the water tank and motor', 'Switch on lights, geyser and inverter', 'Read electricity and water meters', 'Check the roof, terrace drains and gutters', 'Collect post and check for notices', 'Photograph and video every room', 'Report anything unusual the same day'], 2)}
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.head({ eyebrow: 'Seasonal care', title: 'Hill homes need hill-specific care' })}
    <div class="cols2">
      <div class="panel" data-reveal>
        <span class="feat__icon">${C.icon('drop')}</span>
        <h3>Monsoon: damp and leaks</h3>
        <p class="muted">Dehradun gets heavy monsoon rain. Before June we clear drains and check the roof, terrace waterproofing and window seals. During the rains we watch for seepage, fungus and blocked gutters.</p>
        ${C.checks(['Pre-monsoon roof & drain check', 'Seepage & fungus watch', 'Dehumidify & air rooms'], 1)}
      </div>
      <div class="panel" data-reveal style="--d:100ms">
        <span class="feat__icon">${C.icon('snow')}</span>
        <h3>Winter: cold-weather checks</h3>
        <p class="muted">Cold nights mean damp walls, stressed pipes and geysers that sit unused. We check heating, insulation and plumbing, and keep the house aired to avoid musty rooms.</p>
        ${C.checks(['Geyser & heater test', 'Pipe & tank check', 'Damp-wall inspection'], 1)}
      </div>
    </div>
  </div>
</section>

<section class="section section--fill">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        <p class="eyebrow">Security & encroachment</p>
        <h2 class="s-title">An empty home is a target. We keep watch.</h2>
        <p>Unoccupied homes and plots attract trespass, illegal parking, dumping and, at worst, encroachment. We check boundaries every visit, talk to neighbours and act fast if something changes.</p>
        ${C.checks(['Boundary & fence photographed each visit', 'Neighbour & RWA contact maintained', 'Immediate alert if anything changes', 'Police complaint & legal help if needed'], 1)}
      </div>
      <div class="split__media" data-reveal>${C.reportSample({ title: 'Caretaker visit · Sample', image: 'winter-care' })}</div>
    </div>
  </div>
</section>`,
  faqs: [
    { q: 'How do I receive the reports?', a: '<p>On WhatsApp after every visit (photos and a short video), plus a monthly email summary. You can also ask for a live video call during a visit.</p>' },
    { q: 'Do you keep a set of my keys?', a: '<p>Yes, securely logged and stored at our office. Key handovers are recorded and only our named field staff use them.</p>' },
    { q: 'What if you find a problem?', a: '<p>We tell you the same day with photos. Small fixes under your approved limit are done right away; anything bigger is quoted and done only after your approval.</p>' },
    { q: 'Can you look after an empty plot?', a: '<p>Yes. Plot watch includes boundary photos, clearing dumping and growth, and alerts for any construction or encroachment.</p>' },
    { q: 'Can I pause the plan when I visit?', a: '<p>Yes. Tell us your dates and we will prepare the home before you arrive and do a check after you leave.</p>' },
  ],
  ctaTitle: 'Book a free property check',
  ctaText: 'We will visit your Dehradun home, send you a free photo report and suggest the right plan.',
  ctaImage: 'monsoon',
});
