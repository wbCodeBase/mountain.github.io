const C = require('../components');
const { servicePage } = require('../templates');

module.exports = () => servicePage({
  slug: 'homestay-management',
  title: 'Homestay & Holiday Villa Management in Dehradun',
  description: 'Turn your Dehradun home into a homestay: setup, Airbnb, Booking.com & MakeMyTrip listings, guests, cleaning, payouts and Uttarakhand homestay registration help.',
  h1: 'Turn Your Dehradun Home into a Homestay',
  lead: 'We set up, list, host and clean, while you earn from the home and still block dates for your own family visits.',
  cta: 'Estimate my homestay income',
  video: 'hero-green-hills',
  sections: `
<section class="section">
  <div class="container">
    ${C.head({ eyebrow: 'How it works', title: 'Fully managed, from setup to payouts' })}
    ${C.steps([
      { t: 'Setup', d: 'We assess the home, suggest furnishing and amenities that guests pay for, and arrange the work.' },
      { t: 'Listing', d: 'Professional photos and listings on Airbnb, Booking.com and MakeMyTrip, with smart pricing for weekends and seasons.' },
      { t: 'Guest handling', d: 'Enquiries, check-in, local tips and 24/7 support during stays. Guest ID collected as required.' },
      { t: 'Cleaning & upkeep', d: 'Housekeeping, linen and restocking between every stay, with regular quality checks.' },
      { t: 'Monthly payouts', d: 'Earnings statement and transfer every month, with booking and expense details.' },
    ])}
  </div>
</section>

<section class="section section--fill">
  <div class="container">
    ${C.split({
      image: 'hill-town',
      alt: 'Hill town rooftops in Landour, above Dehradun',
      eyebrow: 'Registration help',
      title: 'Uttarakhand homestay registration, handled',
      body: `<p>Uttarakhand encourages homestays and runs a registration scheme through the tourism department, with conditions on the number of rooms and the owner's involvement. We check eligibility, prepare documents and follow up on the application.</p>
      ${C.checks(['Eligibility check for your home', 'Document preparation & filing', 'Fire, safety & signage readiness', 'Guest register & local police intimation'], 1)}
      <p class="muted" style="margin-top:18px">Scheme rules change; we confirm current requirements with the tourism office before applying.</p>`,
    })}
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.head({ eyebrow: 'Revenue share', title: 'We earn when you earn', center: true, text: 'No fixed monthly fee. Our share comes from bookings, so we are motivated to keep your home full and well reviewed.' })}
    ${C.pricing([
      { name: 'Co-host', for: 'You furnish & approve; we run it', price: '20%', per: 'of booking revenue', items: ['Listings & pricing', 'Guest communication', 'Check-in & support', 'Cleaning coordination', 'Monthly payouts'], wa: "Hi, I'm interested in the Co-host homestay plan in Dehradun.", cta: 'Choose Co-host' },
      { name: 'Fully Managed', for: 'Hands-off for owners abroad', price: '25%', per: 'of booking revenue', featured: true, items: ['Everything in Co-host', 'Housekeeping staff & linen', 'Maintenance & restocking', 'Registration support', 'Owner-stay blocking', 'Quarterly performance review'], wa: "Hi, I'm interested in Fully Managed homestay for my Dehradun home.", cta: 'Choose Fully Managed' },
    ].map((p) => p), 'Indicative revenue share, plus GST. Cleaning, utilities and platform fees are passed through at actuals.').replace('class="plans"', 'class="plans plans--2"')}
    <div class="panel panel--fill mt-l" data-reveal>
      <div class="cta-band__inner" style="padding:0">
        <div><h3 style="margin-bottom:4px">What could your home earn?</h3><p class="muted" style="margin:0">Send us the area, number of rooms and a few photos. We will estimate nightly rates, likely occupancy and monthly income. An online calculator is coming soon.</p></div>
        <div class="actions">${C.btnWa("Hi, please estimate homestay income for my Dehradun home. Area: ___, rooms: ___.", 'Estimate my income')}</div>
      </div>
    </div>
  </div>
</section>`,
  faqs: [
    { q: 'Is a homestay better than long-term rent?', a: '<p>Often, for homes with views, gardens or character near Rajpur Road, Mussoorie Diversion or Malsi. Income can be higher but varies by season. For plain apartments, long-term rental is usually steadier. We will tell you honestly which suits your home.</p>' },
    { q: 'Can I still use the home myself?', a: '<p>Yes. Block your dates in advance and the home is cleaned and ready for you.</p>' },
    { q: 'Do I need to register my homestay?', a: '<p>Homestays in Uttarakhand should be registered under the state scheme, and guest details must be maintained. We help with eligibility, documents and the application.</p>' },
    { q: 'Who handles damage by guests?', a: '<p>We inspect after every stay, claim through platform damage programmes or the security deposit where possible, and arrange repairs.</p>' },
    { q: 'How are payouts made?', a: '<p>Monthly, to your Indian bank account (NRO or as advised by your CA), with a full statement of bookings and expenses.</p>' },
  ],
  ctaTitle: 'Estimate my homestay income',
  ctaText: 'Tell us about the home. We will share a realistic income estimate and what it would take to get it guest-ready.',
  ctaImage: 'hill-town',
});
