## Setting Up the Daily Trigger

To ensure the daily profit analysis chart is automatically sent at 3:05 AM EST, follow these steps:

1. Open the Google Apps Script editor for the project in your Google Sheets (`Extensions` → `Apps Script`).
2. Click on the clock icon to access the triggers, or use the menu to navigate to `Triggers`.
3. Click `+ Add Trigger` and configure it as follows:
   - **Function to run:** Select the function that generates and emails the profit analysis chart.
   - **Event source:** Time-driven.
   - **Type of time-based trigger:** Day timer.
   - **Time of day:** Custom time, set to 3:05 AM.
4. Click `Save`.

Once set up, the script will automatically send the chart each day at the specified time.
