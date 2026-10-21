const C = require('../components');
const { areas } = require('../data');
const { HOME, DDN } = require('../templates');

module.exports = () => {
  const wa = "Hi, I'm looking for property services in Dehradun.";
  const crumbs = [HOME, DDN];
  const faqs = [
    { q: 'Which property services do you offer in Dehradun?', a: '<p>Eight services: buying, property verification, selling, rental management, homestay management, caretaking, maintenance and repairs, and legal and documentation support. You can use one or combine them under a single monthly plan.</p>' },
    { q: 'Which are the most popular areas to buy in Dehradun?', a: '<p>Rajpur Road and Jakhan for premium homes close to Mussoorie, Sahastradhara Road for newer villas and gated projects, Mussoorie Diversion and Malsi for hill views, and Vasant Vihar, Kishanpur and GMS Road for established city living.</p>' },
    { q: 'Who usually buys property in Dehradun?', a: '<p>Families from Delhi NCR buying a second or retirement home, NRIs with roots in Uttarakhand, and professionals moving for a quieter life. Demand is strongest for villas, independent houses and well-located apartments.</p>' },
    { q: 'Do you only work in Dehradun city?', a: '<p>We cover Dehradun city and its surroundings today. Mussoorie and Landour and Rishikesh are next, followed by Nainital and Bhimtal and then Himachal. Message us if your property is nearby; we often can still help.</p>' },
    { q: 'Why use a local partner instead of a big portal?', a: '<p>Portals list properties; they do not visit them. Our team lives in Dehradun, knows the land records offices, local contractors and fair rents, and can be at your door the same day.</p>' },
  ];

  const body = `
${C.hero({
  video: 'hero-green-hills',
  crumbs,
  eyebrow: 'Dehradun, Uttarakhand',
  title: 'Property Services in Dehradun',
  lead: 'Buy, verify, sell, rent, host and care for your home in the Doon valley, with one local team that visits every property in person.',
  actions: `${C.btnWa(wa, 'WhatsApp us')}<a class="btn btn--ghost" href="#enquire"><span>Tell us what you need</span>${C.icon('arrow')}</a>`,
})}
<div id="main-start"></div>
${C.trustStrip()}

<section class="section">
  <div class="container">
    ${C.split({
      image: 'doon-valley',
      alt: 'View over the Doon valley from the Kipling Trail',
      eyebrow: 'The Dehradun market',
      title: 'Why the Doon valley is the first choice for a hill home',
      body: `<p class="lead">Dehradun gives you the hills without giving up the city: an airport, good schools and hospitals, and Mussoorie 35 km away. That is why it draws second-home buyers from Delhi NCR and NRIs with family roots in Uttarakhand.</p>
      <p>Buyers here look for villas and independent houses with mountain views, gated projects with security, and well-located apartments that are easy to rent out. Each area has its own character, and its own paperwork quirks.</p>
      <div class="actions">${C.btn('/dehradun/buy-property/', 'Buying in Dehradun', 'btn--line')}</div>`,
    })}
  </div>
</section>

<section class="section section--fill">
  <div class="container">
    ${C.head({ eyebrow: 'Popular areas', title: 'Where people buy in Dehradun', text: 'A quick guide to the areas we are asked about most.' })}
    ${C.features([
      { ic: 'pin', t: 'Rajpur Road & Jakhan', d: 'The premium address. Older bungalows, new villas and easy access to Mussoorie. Higher prices, strong resale.' },
      { ic: 'pin', t: 'Sahastradhara Road', d: 'Fast-growing with gated villa projects and IT Park nearby. Popular with NCR second-home buyers.' },
      { ic: 'pin', t: 'Mussoorie Diversion & Malsi', d: 'Hill views, cooler air and larger plots. Check land type and road access carefully here.' },
      { ic: 'pin', t: 'Vasant Vihar & GMS Road', d: 'Established residential colonies with good rental demand from families and professionals.' },
      { ic: 'pin', t: 'Kishanpur & Doon University Road', d: 'Quiet, green and well connected. Good for homes you plan to rent out long-term.' },
      { ic: 'pin', t: 'Shimla Bypass & Prem Nagar', d: 'More space for the money. Ideal for value buyers and homestay conversions.' },
    ], 3)}
  </div>
</section>

<section class="section" id="services">
  <div class="container">
    ${C.head({ eyebrow: 'Our services', title: 'Eight services for Dehradun property owners and buyers' })}
    ${C.servicesGrid()}
  </div>
</section>

<section class="section section--dark">
  <div class="container">
    ${C.split({
      image: 'road-to-doon',
      alt: 'Tree-lined hill road leading into Dehradun',
      eyebrow: 'Why a local partner',
      title: 'Someone at your door the same day',
      reverse: true,
      body: `<p>Hill property needs hands-on care. Monsoon rains find every crack, winter brings damp, and an empty plot can attract encroachment. A local team that knows the land records office, the plumber and the fair rent for your street makes all the difference.</p>
      ${C.checks(['Same-day visits for urgent issues', 'Trusted, vetted local contractors', 'Know-how at the tehsil and registry office', 'Fair local rent and price benchmarks'], 1)}`,
    })}
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.head({ eyebrow: 'Areas we cover', title: 'Across Dehradun and its surroundings' })}
    <ul class="pills" data-reveal>${areas.map((a) => `<li>${a}</li>`).join('')}</ul>
  </div>
</section>

${C.faq(faqs)}

${C.ctaForm({
  eyebrow: 'Tell us what you need',
  title: 'Talk to our Dehradun team',
  text: 'Tell us about your property or what you are looking for. We will reply on WhatsApp with next steps, usually within two working hours.',
  waMsg: wa,
  id: 'form-dehradun',
  image: 'doon-valley',
})}`;

  return {
    key: 'dehradun',
    url: '/dehradun/',
    title: 'Property Management in Dehradun | Buy, Sell, Rent & Care',
    description: 'Property management in Dehradun by a local team: buying, verification, selling, rentals, homestays, caretaking, repairs and legal paperwork for NRIs and owners.',
    h1: 'Property Services in Dehradun',
    wa,
    crumbs,
    faqs,
    heroVideo: 'hero-green-hills',
    ogImage: 'doon-valley',
    priority: 0.9,
    body,
  };
};
