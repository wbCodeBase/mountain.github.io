const C = require('../components');
const { HOME } = require('../templates');

module.exports = () => {
  const wa = "Hi, I read your Uttarakhand land law guide and want to check a property.";
  const url = '/guides/uttarakhand-land-law/';
  const crumbs = [HOME, { name: 'Guides', url: '/guides/' }, { name: 'Uttarakhand land law', url }];
  const updated = '2026-10-20';
  const toc = [
    ['summary', 'The 2025 amendment in brief'],
    ['can-cannot', 'What outsiders can and cannot buy'],
    ['dehradun', 'What this means in Dehradun'],
    ['nri-oci', 'Notes for NRIs and OCIs'],
    ['checklist', 'Buyer checklist'],
    ['faq', 'FAQs'],
  ];
  const faqs = [
    { q: 'Can someone from Delhi buy land in Dehradun?', a: '<p>Not agricultural or horticultural land. Dehradun is one of the 11 districts covered by the 2025 restrictions. Residential land is limited (reported as up to 250 sq m with an affidavit), and buying a flat or house in an approved residential project is usually the practical route. Always verify the specific property.</p>' },
    { q: 'Which districts are not covered by the agricultural land ban?', a: '<p>Haridwar and Udham Singh Nagar are excluded from the ban, but purchases there need state-level approval rather than district-level permission.</p>' },
    { q: 'Can an OCI cardholder buy property in Dehradun?', a: '<p>OCI holders can buy residential and commercial property in India but not agricultural land, plantation property or farmhouses. Uttarakhand\'s rules for buyers from outside the state also apply.</p>' },
    { q: 'What happens if land is used against the rules?', a: '<p>Under the amended law, land bought in violation of the conditions, or on the basis of a false affidavit, can be vested in the state government.</p>' },
    { q: 'Does the law apply inside municipal limits?', a: '<p>Reports differ on how restrictions apply within municipal limits. This is exactly the kind of detail that depends on the specific plot, so get the land type and location checked before you commit.</p>' },
  ];

  const body = `
<div class="progress" data-progress></div>
${C.hero({
  video: 'hero-range',
  crumbs,
  eyebrow: 'Guide · Law & buying',
  title: 'Uttarakhand Land Law, Explained',
  lead: 'What outsiders, NRIs and OCIs can and cannot buy after the 2025 amendment, and what it means if you want a home in Dehradun.',
  meta: `<div class="article-meta"><span>${C.icon('clock')} 8 min read</span><span>${C.icon('calendar')} Last updated: <time datetime="${updated}">20 October 2026</time></span><span>${C.icon('users')} Mountain Estate Partners</span></div>`,
})}
<div id="main-start"></div>

<section class="section">
  <div class="container prose-wrap">
    <aside class="toc">
      <p>On this page</p>
      <ol>${toc.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join('')}</ol>
      ${C.btnWa(wa, 'Check a property', 'btn--sm btn--block')}
    </aside>
    <article class="prose" data-article>
      <div class="callout callout--warn">
        <p><strong>Lawyer review pending.</strong> This guide is general information, not legal advice. It reflects the amendment as reported when it was passed in February 2025. Always have the specific property checked by a lawyer before you buy.</p>
      </div>

      <h2 id="summary">The 2025 amendment in brief</h2>
      <p>In February 2025 the Uttarakhand Assembly passed an amendment to the land law it inherited from Uttar Pradesh (the Uttarakhand (U.P. Zamindari Abolition and Land Reforms Act, 1950) Amendment). Its aim is to protect farmland and the hills from unchecked land buying by people from outside the state.</p>
      <ul>
        <li><strong>Agricultural and horticultural land:</strong> people from outside Uttarakhand can no longer buy it in <strong>11 of the state's 13 districts</strong>.</li>
        <li><strong>Haridwar and Udham Singh Nagar</strong> are excluded from that ban, but purchases there need state government approval instead of district-level permission.</li>
        <li><strong>Residential land:</strong> outsiders can buy a limited area for a home (reported as <strong>up to 250 sq m</strong>), with an affidavit that they and their family have not bought residential land elsewhere in the state.</li>
        <li><strong>False affidavits or misuse:</strong> land bought in breach of the rules can be vested in the state government.</li>
        <li><strong>Less discretion:</strong> district magistrates' powers to permit certain purchases have been curtailed, and transactions are to be tracked through a government portal.</li>
      </ul>

      <h2 id="can-cannot">What outsiders can and cannot buy</h2>
      <table>
        <thead><tr><th>Type of property</th><th>Outsider (non-Uttarakhand Indian)</th><th>What to check</th></tr></thead>
        <tbody>
          <tr><td>Agricultural / horticultural land (11 districts incl. Dehradun)</td><td><strong>Not allowed</strong></td><td>Land type in khatauni; avoid "farm plots" sold to outsiders</td></tr>
          <tr><td>Residential land / plot</td><td>Limited (reported up to 250 sq m, with affidavit)</td><td>Land-use status, plot size, your family's past purchases</td></tr>
          <tr><td>Flat in an approved project</td><td>Generally allowed</td><td>RERA registration, map approval, title</td></tr>
          <tr><td>Independent house / villa</td><td>Generally allowed where land is residential and approved</td><td>Land type under the house, approvals, area of land</td></tr>
          <tr><td>Haridwar & Udham Singh Nagar</td><td>Needs state government approval</td><td>Current approval process</td></tr>
        </tbody>
      </table>

      <h2 id="dehradun">What this means in Dehradun</h2>
      <p>Dehradun district is among the 11 districts where outsiders cannot buy agricultural land. In practice this matters most on the edges of the city, such as parts of Sahastradhara Road, Malsi, Mussoorie Diversion and Shimla Bypass, where "farmhouse plots" and land without a clear change of use are often marketed to buyers from Delhi NCR.</p>
      <p>The safest route for most buyers from outside the state is a <strong>flat, house or villa in an approved residential project</strong> with clean title and the right land-use status. Before paying any token amount, check:</p>
      <ul>
        <li>What the revenue records (khatauni) say the land type is</li>
        <li>Whether the map is approved by MDDA or the local body</li>
        <li>The land area attached to a house or villa</li>
        <li>Whether you or your family have bought residential land in Uttarakhand before</li>
      </ul>
      <div class="callout"><p>Our <a href="/dehradun/property-verification/">property verification</a> covers land type, records, approvals and eligibility, in person, before you commit.</p></div>

      <h2 id="nri-oci">Notes for NRIs and OCIs</h2>
      <h3>NRIs (Indian citizens living abroad)</h3>
      <p>Under FEMA, NRIs can buy residential and commercial property in India. Uttarakhand's law treats you like any other buyer from outside the state unless you qualify as a resident of Uttarakhand, so the agricultural land ban and residential limits apply.</p>
      <h3>OCI cardholders</h3>
      <p>OCI holders can buy residential and commercial property but <strong>cannot buy agricultural land, plantation property or farmhouses</strong> anywhere in India, unless inherited. Uttarakhand's limits apply on top of this.</p>
      <h3>Inheritance</h3>
      <p>Inheriting property is treated differently from buying it. If you have inherited land in Uttarakhand, focus on mutation and clear records; see our <a href="/dehradun/property-legal-services/">legal services</a>.</p>

      <h2 id="checklist">Buyer checklist</h2>
      <ol>
        <li>Confirm the land type in the khatauni and other revenue records</li>
        <li>Confirm your eligibility as a buyer from outside the state</li>
        <li>Check title and the chain of sale deeds</li>
        <li>Check map approval and, for projects, RERA registration</li>
        <li>Confirm legal road access and boundaries on the ground</li>
        <li>Search for encumbrances and disputes</li>
        <li>Prepare the required affidavit (for residential land)</li>
        <li>Pay stamp duty correctly and complete mutation after registry</li>
      </ol>
      <p class="muted"><em>Last updated: 20 October 2026. We will update this guide as rules and notifications change.</em></p>
    </article>
  </div>
</section>

${C.faq(faqs, { title: 'Land law FAQs' })}

${C.ctaForm({
  eyebrow: 'Get your property checked',
  title: 'Not sure if you can buy it? We will check.',
  text: 'Send us the location and documents. Our verification confirms land type, eligibility and title before you pay anything.',
  waMsg: wa,
  service: 'Property verification',
  id: 'form-land-law',
  image: 'misty-hills',
})}`;

  return {
    key: 'guide-uttarakhand-land-law',
    url,
    title: 'Uttarakhand Land Law 2025: What Outsiders & NRIs Can Buy',
    description: 'Uttarakhand land law 2025 explained: agricultural land barred for outsiders in 11 of 13 districts, residential limits, what it means in Dehradun, NRI and OCI notes.',
    h1: 'Uttarakhand Land Law, Explained',
    wa,
    crumbs,
    faqs,
    article: { published: '2026-10-20', updated },
    heroVideo: 'hero-range',
    ogImage: 'misty-hills',
    priority: 0.8,
    body,
  };
};
