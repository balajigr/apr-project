# apr-project

Simple single-page web app that collects:
- Name
- Email
- Phone number

On submit, the data is sent to a Google Apps Script web app, which appends it to a Google Sheet.

## Files

- `index.html` - form UI
- `styles.css` - styling
- `script.js` - frontend submit logic

## Setup

1. Create a Google Sheet with columns:
   `Timestamp | Name | Email | Phone`

2. Create a Google Apps Script project with a `doPost(e)` handler.

3. Deploy the Apps Script as a Web App.

4. Paste:
   - the Spreadsheet ID into `Code.gs`
   - the Web App URL into `script.js`

5. Run locally with:
   ```bash
   python3 -m http.server 8000
