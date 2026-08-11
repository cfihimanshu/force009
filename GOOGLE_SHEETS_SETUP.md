# Google Sheet contact integration

1. Google Sheet बनाएं और उसकी URL से spreadsheet ID copy करें (`/d/` और `/edit` के बीच वाला भाग).
2. Sheet में **Extensions → Apps Script** खोलें और `google-apps-script/Code.gs` का code paste करें.
3. Apps Script में **Project Settings → Script properties** में ये values जोड़ें:
   - `SPREADSHEET_ID`: आपकी spreadsheet ID
   - `SHEET_NAME`: `Website Leads`
   - `WEBHOOK_SECRET`: एक long random secret
4. **Deploy → New deployment → Web app** चुनें. Execute as **Me** रखें और access ऐसा चुनें जिससे website POST कर सके. `/exec` URL copy करें.
5. Hosting environment में `GOOGLE_SHEETS_WEBHOOK_URL` और वही `GOOGLE_SHEETS_WEBHOOK_SECRET` set करें. Local development के लिए `.env.example` को `.env.local` में copy करके वास्तविक values भरें.
6. Apps Script या permissions बदलने पर नया deployment/version deploy करें, फिर form test करें.

Sheet columns automatically बनेंगे: Timestamp, Name, Company, Phone, Email, Service, Brief, Source.
