function sendDailyProfitChart() {
  const sheetName = 'Summary';
  const folderId = 'insert folder ID'; // Your folder ID
  const recipientEmail = 'insert email';
  
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(sheetName);
  const folder = DriveApp.getFolderById(folderId);
  
  // Get the chart
  const charts = sheet.getCharts();
  if (charts.length === 0) {
    Logger.log('No charts found on the sheet.');
    return;
  }
  const chart = charts[0]; // Get the first chart

  // Resize the chart
  const chartBlob = chart.getAs('image/png');
  
  // Save the chart image to Drive
  const file = folder.createFile(chartBlob.setName('Daily_Profit_Chart.png'));
  
  // Send the email with the chart image
  MailApp.sendEmail({
    to: recipientEmail,
    subject: 'Daily Profit Chart',
    body: 'Attached is the daily profit chart.',
    attachments: [file]
  });
}

function createTimeDrivenTrigger() {
  ScriptApp.newTrigger('sendDailyProfitChart')
    .timeBased()
    .everyDays(1)
    .atHour(8) // Runs at 8:10 AM UTC, which is 3:10 AM EST
    .nearMinute(07) // Runs at 10 minutes past the hour
    .create();
}
