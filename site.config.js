// ─────────────────────────────────────────────────────────────
// Mountain Estate Partners — single source of truth for business
// details and integrations. Change values here, run `npm run build`.
// Values marked TODO are placeholders that must be confirmed before launch.
// ─────────────────────────────────────────────────────────────
module.exports = {
  brand: 'Mountain Estate Partners',
  shortBrand: 'Mountain Estate',
  domain: 'https://mountainestatepartners.com', // canonical (non-www)
  region: 'Dehradun',
  state: 'Uttarakhand',

  // Contact — TODO: replace with real numbers
  phone: '+91 90000 00000',
  phoneHref: '+919000000000',
  whatsapp: '919000000000', // country code + number, no "+" or spaces
  email: 'hello@mountainestatepartners.com',
  hours: 'Mon–Sat · 9:30 am – 7:00 pm IST',
  responsePromise: 'We reply on WhatsApp within 2 working hours.',
  address: {
    street: 'Rajpur Road', // TODO: full office address
    locality: 'Dehradun',
    region: 'Uttarakhand',
    postal: '248001',
    country: 'IN',
  },
  geo: { lat: 30.3398, lng: 78.0644 },
  rera: '', // TODO: RERA registration number when issued (shown in footer + trust strip)

  // Integrations
  // Google Apps Script web-app URL (see docs/google-apps-script.gs). Empty = WhatsApp fallback.
  formEndpoint: '',
  // Calendly (or similar) scheduling link. Empty = WhatsApp fallback.
  calendly: '',
  mapEmbed: 'https://www.google.com/maps?q=Rajpur+Road,+Dehradun,+Uttarakhand&output=embed',
  gaId: '', // e.g. G-XXXXXXX

  social: { instagram: '', facebook: '', linkedin: '', youtube: '' },

  family: [
    { name: 'NRI Estate Partners', url: 'https://nriestatepartners.com' },
    { name: 'NCR Estate Partners', url: 'https://ncrestatepartners.com' },
  ],
};
