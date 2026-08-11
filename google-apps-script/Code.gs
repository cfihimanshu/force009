function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || '{}');
    const props = PropertiesService.getScriptProperties();
    if (data.secret !== props.getProperty('WEBHOOK_SECRET')) return json({ ok: false, error: 'Unauthorized' });
    const spreadsheet = SpreadsheetApp.openById(props.getProperty('SPREADSHEET_ID'));
    const sheetName = props.getProperty('SHEET_NAME') || 'Website Leads';
    const sheet = spreadsheet.getSheetByName(sheetName) || spreadsheet.insertSheet(sheetName);
    if (sheet.getLastRow() === 0) sheet.appendRow(['Timestamp','Name','Company','Phone','Email','Service','Brief','Source']);
    const safe = value => {
      const text = String(value || '').trim();
      return /^[=+\-@]/.test(text) ? "'" + text : text;
    };
    sheet.appendRow([new Date(),safe(data.name),safe(data.company),safe(data.phone),safe(data.email),safe(data.service),safe(data.brief),safe(data.source)]);
    return json({ ok: true });
  } catch (error) { return json({ ok: false, error: String(error) }); }
}
function json(value) { return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON); }
