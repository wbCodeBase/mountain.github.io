const C = require('../components');
const { servicePage } = require('../templates');

module.exports = () => servicePage({
  slug: 'buy-property',
  title: 'Villas & Homes for Sale in Dehradun | Verified Properties',
  description: 'Buy a verified villa or home in Dehradun with a local team: shortlisting, video site visits, land-law checks, negotiation and registry. Ideal for NRIs and NCR buyers.',
  h1: 'Buy a Verified Home or Villa in Dehradun',
  lead: 'We shortlist, visit, verify and negotiate for you, then see you through registry, whether you are in Delhi, Dubai or Denver.',
  cta: 'Share your requirement',
  video: 'hero-green-hills',
  sections: `
<section class="section">
  <div class="container">
    ${C.head({ eyebrow: 'What we help with', title: 'A buyer\'s agent on the ground in Dehradun', text: 'We work for you, the buyer, not the seller. That changes the advice you get.' })}
    ${C.features([
      { ic: 'home', t: 'Shortlisting', d: 'Villas, independent houses, apartments and plots matched to your budget, area and purpose: living, holiday or rental.' },
      { ic: 'video', t: 'Site visits, incl. live video', d: 'We walk every property in person and on live video for you, showing what listings leave out: slopes, damp, approach roads.' },
      { ic: 'shield', t: 'Verification first', d: 'Title, land records and land type checked before you pay a token. Bad paperwork is the biggest risk in hill property.' },
      { ic: 'tag', t: 'Negotiation', d: 'Local price benchmarks and an experienced negotiator in the room, so you do not pay the "outsider" price.' },
      { ic: 'file', t: 'Registry & handover', d: 'Sale deed, stamp duty, registration, mutation and utility transfers handled with partner lawyers.' },
      { ic: 'key', t: 'After you buy', d: 'Furnishing, caretaking, rental or homestay setup. One team from search to keys and beyond.' },
    ], 3)}
  </div>
</section>

<section class="section section--fill">
  <div class="container">
    ${C.split({
      image: 'misty-hills',
      alt: 'Misty forested hills near Dehradun',
      eyebrow: 'Who can buy what',
      title: 'Uttarakhand land law, in one minute',
      body: `<p>Since the 2025 amendment, people from outside Uttarakhand <strong>cannot buy agricultural or horticultural land in 11 of 13 districts</strong>, Dehradun included. Residential land purchases by outsiders are limited (up to 250 sq m with an affidavit, under the rules as reported).</p>
      <p>Flats, independent houses and villas in approved, residential-use projects are the usual route for NRIs and NCR buyers. OCI holders cannot buy agricultural land, plantations or farmhouses anywhere in India.</p>
      <div class="callout"><p>Rules change and every plot is different. We confirm land type and eligibility <strong>before</strong> you commit.</p></div>
      <div class="actions">${C.btn('/guides/uttarakhand-land-law/', 'Read the full guide', 'btn--line')}</div>`,
    })}
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.head({ eyebrow: 'Our buying process', title: 'From first call to keys in hand' })}
    ${C.steps([
      { t: 'Share your requirement', d: 'Budget, area, property type and purpose. A 20-minute call in your time zone.' },
      { t: 'Curated shortlist', d: 'Usually 5–8 options within 10 days, with honest notes on each: pros, risks and fair price.' },
      { t: 'Visits & live video', d: 'We visit everything in person. You join on video or fly in for the final two or three.' },
      { t: 'Verification', d: 'Title and land-record checks on your chosen property before any token amount.' },
      { t: 'Negotiate & register', d: 'Price, terms, sale agreement, stamp duty and registry, with partner lawyers.' },
    ])}
  </div>
</section>

<section class="section section--fill">
  <div class="container cols2">
    <div class="panel" data-reveal>
      <p class="eyebrow">Curated listings</p>
      <h3>We do not list everything. We find the right thing.</h3>
      <p class="muted">The best Dehradun homes often sell before they reach a portal. Tell us what you want and we will bring you verified options from our local network, including off-market properties.</p>
      <div class="actions">${C.btnWa("Hi, I'm looking to buy a home in Dehradun. My budget is ___ and I prefer ___ area.", 'Share requirement on WhatsApp')}</div>
    </div>
    <div class="panel panel--fill" data-reveal style="--d:100ms">
      <p class="eyebrow">Never skip this</p>
      <h3>Get the property verified first</h3>
      <p class="muted">A fixed-fee check of title, land records, land type, approvals and road access. It costs a fraction of a mistake.</p>
      ${C.checks(['Title chain & ownership', 'Khatauni / land records', 'Land use & approvals', 'Encumbrance & disputes'], 2)}
      <div class="actions" style="margin-top:22px">${C.btn('/dehradun/property-verification/', 'Property verification', '')}</div>
    </div>
  </div>
</section>`,
  faqs: [
    { q: 'Can an NRI buy a villa or flat in Dehradun?', a: '<p>Yes. NRIs (Indian citizens) and OCI cardholders can buy residential and commercial property in India, including Dehradun. Agricultural land, plantations and farmhouses are not allowed for OCIs, and Uttarakhand\'s own law adds limits for buyers from outside the state. We check eligibility for each property.</p>' },
    { q: 'Can I buy without travelling to Dehradun?', a: '<p>Mostly, yes. We do live video visits and handle the paperwork. Registration usually needs you, or someone holding your registered power of attorney, at the sub-registrar office. We can arrange the POA through our partner lawyers.</p>' },
    { q: 'How do you charge for buyer services?', a: '<p>A success fee, agreed in writing up front, paid only when you buy. Verification is a separate fixed fee. We never take a hidden commission from the seller for the same deal.</p>' },
    { q: 'What price range are villas in Dehradun?', a: '<p>It varies widely by area, plot size and finish. Rajpur Road and Jakhan sit at the top, Sahastradhara Road and Mussoorie Diversion in the middle, and outer areas offer more space for the money. Share your budget and we will tell you honestly what it buys.</p>' },
    { q: 'How long does buying usually take?', a: '<p>Typically 4–10 weeks from shortlist to registry, depending on verification, loan approvals and how quickly paperwork moves.</p>' },
  ],
  ctaTitle: 'Tell us what you are looking for',
  ctaText: 'Area, budget, type of home and when you want to buy. We will come back with honest options, not a sales pitch.',
});
