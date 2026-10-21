/**
 * Mountain Estate Partners — lead capture to Google Sheets + instant email alert.
 *
 * Setup (5 minutes):
 *  1. Create a Google Sheet named "MEP Leads".
 *  2. Extensions → Apps Script → paste this file → Save.
 *  3. Set OWNER_EMAIL below.
 *  4. Deploy → New deployment → type "Web app"
 *       Execute as: Me   ·   Who has access: Anyone
 *  5. Copy the web-app URL into site.config.js → formEndpoint, then `npm run build`.
 *
 * Every submission lands as one row with source page + UTM parameters, and the
 * owner gets an email with a one-tap WhatsApp link to reply to the lead.
 * For a WhatsApp alert instead of (or as well as) email, call your WhatsApp
 * Business API / provider webhook inside notify_().
 */
const OWNER_EMAIL = 'hello@mountainestatepartners.com'; // TODO
const SHEET_NAME = 'Leads';
const COLUMNS = [
  'submitted_at', 'name', 'whatsapp', 'country', 'location', 'service',
  'form_id', 'source_page', 'page_url', 'landing_page', 'referrer', 'timezone',
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid',
  'site',
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const p = (e && e.parameter) || {};
    if (p.website) return ok_(); // honeypot
    p.site = p.site || 'MountainEstatepartners.com';
    const sheet = getSheet_();
    sheet.appendRow(COLUMNS.map((c) => (p[c] || '').toString().slice(0, 500)));
    notify_(p);
    return ok_();
  } finally {
    lock.releaseLock();
  }
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(COLUMNS);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, COLUMNS.length).setFontWeight('bold');
  }
  return sh;
}

function notify_(p) {
  const digits = (p.whatsapp || '').replace(/\D/g, '');
  const reply = `https://wa.me/${digits}?text=${encodeURIComponent(`Hi ${p.name || ''}, this is Mountain Estate Partners in Dehradun. Thanks for your enquiry about ${p.service || 'our services'}.`)}`;
  const html = `
    <h2 style="font-family:Arial">New lead: ${p.service || 'General'}</h2>
    <table style="font-family:Arial;font-size:14px" cellpadding="6">
      <tr><td><b>Name</b></td><td>${p.name || ''}</td></tr>
      <tr><td><b>WhatsApp</b></td><td>${p.whatsapp || ''}</td></tr>
      <tr><td><b>Country</b></td><td>${p.country || ''}</td></tr>
      <tr><td><b>Location</b></td><td>${p.location || ''}</td></tr>
      <tr><td><b>Page</b></td><td>${p.source_page || ''}</td></tr>
      <tr><td><b>Source</b></td><td>${p.utm_source || p.referrer || 'direct'} / ${p.utm_campaign || ''}</td></tr>
      <tr><td><b>Time zone</b></td><td>${p.timezone || ''}</td></tr>
    </table>
    <p><a href="${reply}" style="background:#25d366;color:#06301a;padding:10px 16px;border-radius:20px;text-decoration:none;font-family:Arial;font-weight:bold">Reply on WhatsApp</a></p>`;
  MailApp.sendEmail({ to: OWNER_EMAIL, subject: `New lead · ${p.service || 'General'} · ${p.name || ''} (${p.country || ''})`, htmlBody: html });
}

function ok_() {
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
