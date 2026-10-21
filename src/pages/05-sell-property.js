const C = require('../components');
const { servicePage } = require('../templates');

module.exports = () => servicePage({
  slug: 'sell-property',
  title: 'Sell Your Property in Dehradun | Free Valuation',
  description: 'Sell your house, villa, flat or plot in Dehradun at the right price. Free valuation, photos and video, buyer network, negotiation and paperwork, even from abroad.',
  h1: 'Sell Your Dehradun Property at the Right Price',
  lead: 'Free valuation, professional photos and video, serious buyers from our NCR and NRI network, and paperwork handled, even if you sell from abroad.',
  cta: 'Get a free valuation',
  video: 'hero-valley',
  sections: `
<section class="section">
  <div class="container">
    ${C.split({
      image: 'hillside-homes',
      alt: 'Homes on a green hillside near Dehradun',
      eyebrow: 'Free valuation',
      title: 'Know what your property is really worth',
      body: `<p class="lead">Our valuation is based on recent deals on your street, not portal asking prices, plus an in-person look at what adds or removes value: views, access, approvals and condition.</p>
      ${C.checks(['Recent comparable sales', 'In-person inspection', 'Paperwork readiness check', 'Suggested listing & floor price'], 2)}
      <div class="actions">${C.btnWa("Hi, I'd like a free valuation for my property in Dehradun.", 'Request free valuation')}</div>`,
    })}
  </div>
</section>

<section class="section section--fill">
  <div class="container">
    ${C.head({ eyebrow: 'How we sell', title: 'A proper marketing plan for your home' })}
    ${C.features([
      { ic: 'rupee', t: 'Pricing strategy', d: 'Priced to attract serious buyers without leaving money on the table.' },
      { ic: 'camera', t: 'Photos & video', d: 'Professional photos, a walkthrough video and drone shots where the view sells the home.' },
      { ic: 'users', t: 'Buyer network', d: 'Pre-qualified buyers from Delhi NCR and NRI families, plus targeted listings on the right portals.' },
      { ic: 'tag', t: 'Negotiation', d: 'We handle offers and counter-offers, and only bring you buyers who can actually pay.' },
      { ic: 'file', t: 'Paperwork', d: 'Sale agreement, NOCs, registry and mutation with our partner lawyers.' },
      { ic: 'eye', t: 'Viewings handled', d: 'We host every viewing so you do not need to be there or hand keys to strangers.' },
    ], 3)}
  </div>
</section>

<section class="section section--dark">
  <div class="container">
    ${C.split({
      image: 'himalaya-view',
      alt: 'Himalayan peaks seen through deodar trees from Landour',
      eyebrow: 'Selling from abroad',
      title: 'You can sell without flying back',
      reverse: true,
      body: `<p>Most of our sellers live outside Dehradun. We make the process remote-friendly from start to finish.</p>
      ${C.checks(['Power of attorney drafted, signed at your embassy or consulate, then adjudicated in India', 'TDS on NRI property sales explained and handled with our partner CA', 'Lower TDS certificate application where eligible', 'Repatriation of sale proceeds guidance (via partner CA)'], 1)}
      <div class="callout" style="background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.15);border-left-color:#fff;color:rgba(255,255,255,.85)"><p>Tax and repatriation advice is given by our partner chartered accountant, not by us.</p></div>`,
    })}
  </div>
</section>`,
  faqs: [
    { q: 'How much do you charge to sell my property?', a: '<p>A success fee as a percentage of the sale price, agreed in writing before we start, and paid only when the sale completes. Photography and video are included.</p>' },
    { q: 'I am an NRI. How much TDS will the buyer deduct?', a: '<p>When an NRI sells, the buyer must deduct TDS on the capital gains at the applicable rate, which can be significant. Our partner CA can apply for a lower or nil deduction certificate where your actual gains are lower. Talk to us early, as this takes time.</p>' },
    { q: 'How long does it take to sell in Dehradun?', a: '<p>Well-priced homes in good areas usually find a buyer in 2–4 months. Unique or high-value properties can take longer. Clean paperwork speeds things up a lot.</p>' },
    { q: 'Do I need to be in India to sign the sale deed?', a: '<p>No. A registered power of attorney lets a trusted person sign on your behalf. We guide you through getting it made abroad and accepted in Uttarakhand.</p>' },
    { q: 'Can you prepare the home before listing?', a: '<p>Yes. Our maintenance team can fix, paint and deep-clean before photos. Small repairs often add more to the price than they cost.</p>' },
  ],
  ctaTitle: 'Get a free valuation',
  ctaText: 'Tell us about the property. We will visit, check comparable sales and share an honest price range.',
});
