const C = require('../components');
const { servicePage } = require('../templates');

module.exports = () => servicePage({
  slug: 'property-verification',
  title: 'Property Verification & Due Diligence in Dehradun',
  description: 'Check before you buy: title, khatauni and land records, land type, approvals, encumbrance, road access and RERA. Fixed-fee property verification in Dehradun.',
  h1: 'Check Before You Buy: Property Verification in Dehradun',
  lead: 'A fixed-fee, on-the-ground check of title, land records, land type and approvals, so you know exactly what you are buying.',
  cta: 'Book a verification',
  video: 'hero-range',
  sections: `
<section class="section">
  <div class="container">
    ${C.head({ eyebrow: 'What we check', title: 'Seven checks that protect your money', text: 'Done in person at the property and at the relevant government offices, with partner lawyers reviewing the findings.' })}
    ${C.features([
      { ic: 'file', t: 'Title & ownership chain', d: 'Who owns it, how they got it, and whether the chain of sale deeds is clean for at least 30 years where records allow.' },
      { ic: 'file', t: 'Khatauni / land records', d: 'Revenue records matched against the seller, the plot size and the khasra numbers on the ground.' },
      { ic: 'pin', t: 'Land type & use', d: 'Agricultural, residential or other. Critical under Uttarakhand land law for buyers from outside the state.' },
      { ic: 'shield', t: 'Approvals', d: 'Map approval (MDDA or local body), completion status and any deviations from the sanctioned plan.' },
      { ic: 'lock', t: 'Encumbrance', d: 'Loans, mortgages, liens and pending disputes or litigation on the property.' },
      { ic: 'home', t: 'Road access & boundaries', d: 'Legal access road, boundary match, encroachment and slope or drainage risks on site.' },
      { ic: 'check', t: 'RERA (where applicable)', d: 'Project registration, promoter details and declared timelines for new projects.' },
    ], 3)}
  </div>
</section>

<section class="section section--fill">
  <div class="container">
    ${C.head({ eyebrow: 'Fixed-fee packages', title: 'Pick the depth of check you need', center: true })}
    ${C.pricing([
      { name: 'Basic', for: 'Apartments in registered projects', price: '₹9,999', per: 'per property', items: ['Title & ownership check', 'RERA & approval status', 'Encumbrance search', 'Site visit with photos', 'Summary report'], wa: "Hi, I'd like the Basic property verification in Dehradun.", cta: 'Book Basic' },
      { name: 'Standard', for: 'Houses, villas & residential plots', price: '₹19,999', per: 'per property', featured: true, items: ['Everything in Basic', 'Khatauni & land-record match', 'Land type & eligibility check', 'Road access & boundary check', 'Lawyer-reviewed report', 'Call to walk you through it'], wa: "Hi, I'd like the Standard property verification in Dehradun.", cta: 'Book Standard' },
      { name: 'Complete', for: 'Large plots & high-value deals', price: '₹34,999', per: 'per property', items: ['Everything in Standard', '30-year title search', 'Demarcation with surveyor', 'Litigation search', 'Draft agreement review'], wa: "Hi, I'd like the Complete property verification in Dehradun.", cta: 'Book Complete' },
    ], 'Indicative fees. Government fees and certified copies are charged at actuals. Final quote confirmed before we start.')}
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__media" data-reveal>${C.reportSample({ title: 'Verification report · Sample', image: 'heritage-house', rows: [['Title chain', 'Clear'], ['Khatauni match', 'Matches'], ['Land type', 'Residential'], ['Map approval', 'Deviation · watch'], ['Encumbrance', 'None found'], ['Road access', 'Legal, 4.5 m']] })}</div>
      <div class="split__body" data-reveal>
        <p class="eyebrow">Sample report</p>
        <h2 class="s-title">A clear verdict, not a pile of papers</h2>
        <p>Every report starts with a one-page summary: green, amber or red on each check, what it means for you and what to ask the seller. Supporting documents and photos follow.</p>
        <dl class="kv" style="margin-top:28px">
          <div><dt>Turnaround</dt><dd>5–7 working days for Basic and Standard; 10–15 for Complete</dd></div>
          <div><dt>Delivered as</dt><dd>PDF report + WhatsApp summary + 15-minute call</dd></div>
          <div><dt>Reviewed by</dt><dd>Our partner property lawyer in Dehradun</dd></div>
        </dl>
      </div>
    </div>
  </div>
</section>`,
  faqs: [
    { q: 'Why do I need verification if the seller has all the papers?', a: '<p>Papers can be incomplete, outdated or not match the land on the ground. In the hills we often find plot boundaries that do not match records, agricultural land being sold as residential, or missing access rights. A check before paying a token avoids expensive disputes.</p>' },
    { q: 'What do you need from me to start?', a: '<p>The property address or location pin, the seller\'s name and whatever documents the seller has shared (sale deed, khatauni, map). We obtain the rest from government records.</p>' },
    { q: 'Is this a legal opinion?', a: '<p>Our Standard and Complete reports are reviewed by a partner property lawyer. If you need a formal title opinion on letterhead, for example for a bank, we can arrange it at an additional fee.</p>' },
    { q: 'Can you verify property outside Dehradun city?', a: '<p>Yes, within Dehradun district. Mussoorie and Rishikesh areas are possible on request with a travel charge until we launch there.</p>' },
    { q: 'What if the report finds a problem?', a: '<p>We explain the risk in plain words and what could fix it: a correction, an indemnity, a price reduction or walking away. The decision is always yours.</p>' },
  ],
  ctaTitle: 'Book a verification',
  ctaText: 'Send us the property location and the documents you have. We will confirm the right package and a fixed quote.',
  ctaImage: 'heritage-house',
});
