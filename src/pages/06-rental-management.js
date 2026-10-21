const C = require('../components');
const { servicePage } = require('../templates');

module.exports = () => servicePage({
  slug: 'rental-management',
  title: 'Rental Property Management in Dehradun | Tenants & Rent',
  description: 'Rent out your Dehradun home stress-free: tenant search, police verification, rent agreement, rent collection, inspections and move-out. Monthly reports for NRI owners.',
  h1: 'Rent Out Your Dehradun Home, Stress-Free',
  lead: 'We find and verify good tenants, collect the rent, inspect regularly and send you a clear statement every month.',
  cta: 'Get a free rent estimate',
  video: 'hero-valley',
  sections: `
<section class="section">
  <div class="container">
    ${C.head({ eyebrow: "What's included", title: 'Full-service rental management', text: 'Everything from the first viewing to the final move-out inspection.' })}
    ${C.features([
      { ic: 'users', t: 'Tenant search', d: 'Listings, enquiries and viewings, hosted by our team.' },
      { ic: 'shield', t: 'Tenant verification', d: 'ID, employment and references checked before you say yes.' },
      { ic: 'lock', t: 'Police verification', d: 'Mandatory tenant police verification filed for you.' },
      { ic: 'file', t: 'Rent agreement', d: 'Drafted, stamped and registered where required, with clear terms.' },
      { ic: 'rupee', t: 'Rent collection', d: 'Rent followed up, collected and sent to your account with a monthly statement.' },
      { ic: 'eye', t: 'Inspections', d: 'Quarterly inspections with photos, plus a check after every big storm.' },
      { ic: 'wrench', t: 'Repairs', d: 'Tenant requests handled by our maintenance team, with your approval above a set limit.' },
      { ic: 'key', t: 'Move-out', d: 'Final inspection, deposit settlement and the home made ready for the next tenant.' },
    ], 4)}
  </div>
</section>

<section class="section section--fill">
  <div class="container">
    ${C.head({ eyebrow: 'Plans & fees', title: 'Simple, fixed pricing', center: true })}
    ${C.pricing([
      { name: 'Tenant Finder', for: 'You manage, we find the tenant', price: '1 month', per: 'rent, one-time', items: ['Listing & viewings', 'Tenant verification', 'Police verification', 'Rent agreement', 'Move-in inventory with photos'], wa: "Hi, I'm interested in the Tenant Finder plan for my Dehradun home.", cta: 'Choose Tenant Finder' },
      { name: 'Full Management', for: 'Most chosen by NRI owners', price: '8%', per: 'of monthly rent', featured: true, items: ['Everything in Tenant Finder', 'Rent collection & statements', 'Quarterly inspections', 'Repairs coordination', 'Renewals & rent revision', 'Move-out & deposit settlement'], wa: "Hi, I'm interested in Full Rental Management for my Dehradun home.", cta: 'Choose Full Management' },
      { name: 'Premium', for: 'Villas & high-value homes', price: '10%', per: 'of monthly rent', items: ['Everything in Full', 'Monthly inspection & video', 'Annual deep clean & pest control', 'Garden & exterior care', 'Priority same-day response'], wa: "Hi, I'm interested in the Premium rental plan for my Dehradun villa.", cta: 'Choose Premium' },
    ], 'Indicative fees, plus GST. Tenant Finder fee is equal to one month\'s rent. Final pricing confirmed after a visit.')}
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__media" data-reveal>${C.reportSample({ title: 'Rental statement · Sample', image: 'road-to-doon', rows: [['Rent received', '₹38,000'], ['Management fee', '− ₹3,040'], ['Plumber (tap washer)', '− ₹450'], ['Paid to owner', '₹34,510'], ['Next inspection', '14 Nov · due']] })}</div>
      <div class="split__body" data-reveal>
        <p class="eyebrow">Monthly report</p>
        <h2 class="s-title">Know exactly what happened, every month</h2>
        <p>Your statement shows rent received, fees, any repairs with bills attached and the amount transferred. Inspection months include photos and a short video.</p>
        <div class="panel panel--fill" style="margin-top:28px">
          <h3>Free rent estimate</h3>
          <p class="muted">Tell us the area, size and condition. We will share a realistic monthly rent, based on what similar homes actually let for.</p>
          <div class="actions">${C.btnWa("Hi, I'd like a free rent estimate for my Dehradun home. Area: ___, size: ___.", 'Get rent estimate')}</div>
        </div>
      </div>
    </div>
  </div>
</section>`,
  faqs: [
    { q: 'How do you choose tenants?', a: '<p>We check ID, employment or business proof and previous landlord references, and file police verification. You see a short profile and approve the tenant before anything is signed.</p>' },
    { q: 'What rent can I expect in Dehradun?', a: '<p>It depends on area, size, furnishing and condition. Well-kept homes in Vasant Vihar, Rajpur Road and Sahastradhara Road rent fastest. Ask for a free estimate with your property details.</p>' },
    { q: 'What happens if the tenant stops paying?', a: '<p>We follow up immediately, adjust against the deposit where appropriate and keep you informed. If needed we coordinate notice and legal steps with our partner lawyers.</p>' },
    { q: 'Do I need to register the rent agreement?', a: '<p>Agreements of 11 months or less are commonly notarised; longer terms should be registered. We advise on the right format for your situation and handle stamp duty.</p>' },
    { q: 'Can I switch from rental to homestay later?', a: '<p>Yes. Many owners rent long-term first and switch to a homestay when the lease ends. We can plan the transition and help with homestay registration.</p>' },
  ],
  ctaTitle: 'Get a free rent estimate',
  ctaText: 'Share the area and size of your home. We will tell you a realistic rent and how quickly it is likely to let.',
});
