const C = require('../components');
const { servicePage } = require('../templates');

module.exports = () => servicePage({
  slug: 'property-legal-services',
  title: 'Property Legal & Documentation Services in Dehradun',
  description: 'Mutation (dakhil kharij), registry, stamp duty, property tax, NRI power of attorney, encumbrance and land records in Dehradun, with partner lawyers and CAs.',
  h1: 'Property Paperwork, Done Right',
  lead: 'Mutation, registry, property tax and power of attorney for NRIs, handled with our partner lawyers and CAs so you do not have to queue at government offices.',
  cta: 'Talk to us about your papers',
  video: 'hero-range',
  sections: `
<section class="section">
  <div class="container">
    ${C.head({ eyebrow: 'What we handle', title: 'The paperwork that keeps your property safe' })}
    <dl class="kv" data-reveal>
      <div><dt>Mutation (dakhil kharij)</dt><dd>Updating the revenue records in your name after purchase, inheritance or gift, so ownership is recorded with the government.</dd></div>
      <div><dt>Registry & sale deeds</dt><dd>Drafting and registering sale deeds, gift deeds and agreements at the sub-registrar office.</dd></div>
      <div><dt>Stamp duty</dt><dd>Calculating and paying the correct stamp duty and registration fee, including applicable concessions.</dd></div>
      <div><dt>Property tax</dt><dd>Assessment, payment and name transfer with the Dehradun Municipal Corporation or local body.</dd></div>
      <div><dt>Power of attorney for NRIs</dt><dd>Drafting a specific POA, guidance on signing at your Indian embassy or consulate, and adjudication and stamping in Uttarakhand.</dd></div>
      <div><dt>Encumbrance & records</dt><dd>Encumbrance checks, certified copies of khatauni and other land records, and corrections where records are wrong.</dd></div>
      <div><dt>Succession & inheritance</dt><dd>Will-based or legal-heir transfers, succession certificates and family settlement documentation.</dd></div>
      <div><dt>Utility transfers</dt><dd>Electricity, water and gas connections moved into your name.</dd></div>
    </dl>
  </div>
</section>

<section class="section section--fill">
  <div class="container">
    ${C.split({
      image: 'heritage-house',
      alt: 'Old hill house surrounded by forest near Mussoorie',
      eyebrow: 'How we work',
      title: 'Local legwork, qualified professionals',
      body: `<p class="lead">We are a property services firm, not a law firm. Legal advice and filings are done by our partner lawyers and chartered accountants in Dehradun. We do the coordination, follow-up and legwork so you are not chasing anyone.</p>
      ${C.checks(['Licensed partner lawyers for legal work', 'Partner CAs for tax, TDS and repatriation', 'Fixed quotes before work begins', 'Status updates on WhatsApp'], 1)}`,
      badge: `<div class="badge-card">${C.icon('file')}<div><strong>No more queues</strong><span>We go to the tehsil and registry office for you</span></div></div>`,
    })}
  </div>
</section>`,
  faqs: [
    { q: 'What is mutation and why does it matter?', a: '<p>Mutation (dakhil kharij) updates the government revenue records to show you as the owner. Registration of the sale deed alone does not do this. Without mutation, selling, taking a loan or paying property tax in your name can become difficult.</p>' },
    { q: 'How do I make a power of attorney from abroad?', a: '<p>We draft a specific POA for the task, you sign it before the Indian embassy or consulate (or a notary with apostille, depending on the country), courier the original, and we get it adjudicated and stamped in Uttarakhand within the required time.</p>' },
    { q: 'I inherited a property in Dehradun. Where do I start?', a: '<p>Usually with collecting the documents (will or legal-heir proof, death certificate, title papers), then mutation in the heirs\' names. We map out the steps and the time each one takes.</p>' },
    { q: 'Are your services a substitute for a lawyer?', a: '<p>No. Legal advice and representation come from our partner lawyers; tax advice from our partner CAs. We coordinate and handle the practical work.</p>' },
    { q: 'How long does mutation take?', a: '<p>Commonly a few weeks to a few months, depending on the case and the office. Clean documents speed it up considerably.</p>' },
  ],
  ctaTitle: 'Talk to us about your papers',
  ctaText: 'Tell us what you need done. We will list the documents required, the steps and a fixed quote.',
  ctaImage: 'misty-hills',
});
