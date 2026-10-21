// Shared content collections. In WordPress these map to CPTs:
// Services, Locations, Testimonials, Guides, FAQs.

const services = [
  {
    slug: 'buy-property',
    name: 'Buy property',
    short: 'Shortlisting, video site visits, negotiation and registry for verified homes and villas.',
    icon: 'key',
    img: 'doon-homes',
    formValue: 'Buy property',
    wa: "Hi, I'm interested in buying a property in Dehradun.",
  },
  {
    slug: 'property-verification',
    name: 'Property verification',
    short: 'Title, land records, land type, approvals and road access checked before you pay.',
    icon: 'shield',
    img: 'heritage-house',
    formValue: 'Property verification',
    wa: "Hi, I'd like to book a property verification in Dehradun.",
  },
  {
    slug: 'sell-property',
    name: 'Sell property',
    short: 'Free valuation, professional photos and video, buyer network and paperwork, even from abroad.',
    icon: 'tag',
    img: 'hillside-homes',
    formValue: 'Sell property',
    wa: "Hi, I'd like a free valuation to sell my property in Dehradun.",
  },
  {
    slug: 'rental-management',
    name: 'Rental management',
    short: 'Verified tenants, police verification, rent agreements, collection and inspections.',
    icon: 'building',
    img: 'road-to-doon',
    formValue: 'Rental management',
    wa: "Hi, I'm interested in rental management for my Dehradun home.",
  },
  {
    slug: 'homestay-management',
    name: 'Homestay management',
    short: 'Setup, listings on Airbnb and Booking.com, guests, cleaning and monthly payouts.',
    icon: 'bed',
    img: 'hill-town',
    formValue: 'Homestay management',
    wa: "Hi, I'd like to turn my Dehradun home into a homestay.",
  },
  {
    slug: 'caretaker-services',
    name: 'Caretaker services',
    short: 'Scheduled visits, monsoon and winter checks, encroachment watch and photo reports.',
    icon: 'eye',
    img: 'deodar-forest',
    formValue: 'Caretaker services',
    wa: "Hi, I'm interested in caretaker services in Dehradun.",
  },
  {
    slug: 'property-maintenance',
    name: 'Property maintenance',
    short: 'Plumbing, electrical, waterproofing, painting and renovation, quoted and approved remotely.',
    icon: 'wrench',
    img: 'monsoon',
    formValue: 'Property maintenance',
    wa: "Hi, I need repairs / maintenance at my Dehradun property.",
  },
  {
    slug: 'property-legal-services',
    name: 'Legal & documentation',
    short: 'Mutation, registry, stamp duty, property tax and NRI power of attorney, with partner lawyers.',
    icon: 'file',
    img: 'misty-hills',
    formValue: 'Legal & documentation',
    wa: "Hi, I need help with property papers in Dehradun.",
  },
];

const areas = [
  'Rajpur Road', 'Sahastradhara Road', 'Mussoorie Diversion', 'Malsi', 'Jakhan',
  'Vasant Vihar', 'Kishanpur', 'Shimla Bypass', 'GMS Road', 'Ballupur',
  'Prem Nagar', 'Kulhan', 'Doon University Road', 'Raipur', 'Bhaniyawala',
];

const locations = [
  { name: 'Dehradun', status: 'live', note: 'All 8 services', url: '/dehradun/', img: 'doon-valley' },
  { name: 'Mussoorie & Landour', status: 'soon', note: 'Coming 2027', img: 'hill-town' },
  { name: 'Rishikesh', status: 'soon', note: 'Coming 2027', img: 'misty-hills' },
  { name: 'Nainital & Bhimtal', status: 'soon', note: 'Planned', img: 'himalaya-view' },
  { name: 'Himachal', status: 'soon', note: 'Planned', img: 'snow-peaks' },
];

// TODO: replace with real, attributable client testimonials before launch.
const testimonials = [
  {
    quote: 'I live in Dubai and had not seen my Dehradun house in three years. Now I get a video walkthrough every month, and the damp in the back bedroom was fixed before the monsoon.',
    name: 'R. Negi', meta: 'Homeowner · Dubai, UAE', service: 'Caretaker services',
  },
  {
    quote: 'They found a problem with the land records on a plot I was about to buy on Sahastradhara Road. That one report saved me from a very expensive mistake.',
    name: 'A. Mehra', meta: 'Buyer · Gurugram', service: 'Property verification',
  },
  {
    quote: 'Tenant found, police verification done, agreement registered, all while I was in Toronto. Rent arrives on time and I get a clear statement each month.',
    name: 'S. Rawat', meta: 'Landlord · Toronto, Canada', service: 'Rental management',
  },
  {
    quote: 'Our Malsi villa sat empty most of the year. As a homestay it now pays for its own upkeep, and we still block dates for our family visits.',
    name: 'K. & P. Bisht', meta: 'Owners · London, UK', service: 'Homestay management',
  },
];

const guides = [
  {
    slug: 'uttarakhand-land-law',
    url: '/guides/uttarakhand-land-law/',
    title: 'Uttarakhand Land Law, Explained',
    summary: 'What outsiders, NRIs and OCIs can and cannot buy after the 2025 amendment, and what it means in Dehradun.',
    tag: 'Law & buying',
    img: 'misty-hills',
    read: '8 min read',
    live: true,
  },
  {
    slug: 'nri-guide-buying-dehradun',
    title: "NRI's Guide to Buying a Home in Dehradun",
    summary: 'Payments, POA, documents and site visits when you buy from abroad.',
    tag: 'NRI', img: 'doon-valley', read: 'Coming soon', live: false,
  },
  {
    slug: 'monsoon-home-care',
    title: 'Monsoon Care for Hill Homes',
    summary: 'Seepage, damp, roof and drainage checks to do before June.',
    tag: 'Home care', img: 'monsoon', read: 'Coming soon', live: false,
  },
  {
    slug: 'homestay-registration-uttarakhand',
    title: 'Homestay Registration in Uttarakhand',
    summary: 'Eligibility, documents and steps to register your homestay.',
    tag: 'Homestay', img: 'hill-town', read: 'Coming soon', live: false,
  },
];

const countries = [
  ['India', '+91'], ['United Arab Emirates', '+971'], ['United States', '+1'], ['United Kingdom', '+44'],
  ['Canada', '+1'], ['Singapore', '+65'], ['Australia', '+61'], ['Saudi Arabia', '+966'],
  ['Qatar', '+974'], ['Kuwait', '+965'], ['Oman', '+968'], ['Bahrain', '+973'],
  ['Germany', '+49'], ['New Zealand', '+64'], ['Hong Kong', '+852'], ['Other', ''],
];

module.exports = { services, areas, locations, testimonials, guides, countries };
