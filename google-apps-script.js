/**
 * ============================================================================
 * SVB INFOTECH - GOOGLE SHEETS APPS SCRIPT WEB APP
 * Direct HTML Form Data Storage for:
 * 1. Internship Application Form:
 *    Sheet ID: 1xm6ZoVX2ljvm9iRX6g3qMNGzdqxnSyLMDF57pEOoRCE
 * 2. Enquiry Button Lead Form:
 *    Sheet ID: 1geA2_oq2hc6XT1RTOQGTLWTxIS8aVVcgZtyF0w_aHC8
 * ============================================================================
 * 
 * HOW TO DEPLOY THIS IN 1 MINUTE:
 * 1. Open your Google Sheet in Google Chrome:
 *    - For Internship: https://docs.google.com/spreadsheets/d/1xm6ZoVX2ljvm9iRX6g3qMNGzdqxnSyLMDF57pEOoRCE/edit
 *    - For Enquiry: https://docs.google.com/spreadsheets/d/1geA2_oq2hc6XT1RTOQGTLWTxIS8aVVcgZtyF0w_aHC8/edit
 * 2. In Google Sheets top menu, click: Extensions > Apps Script.
 * 3. Delete any default code, paste ALL the code below, and press Ctrl+S (Save).
 * 4. Click the blue "Deploy" button (top right) > "New deployment".
 * 5. Click Select type (gear icon) > choose "Web app".
 * 6. Set Description: "SVB Form Web App".
 * 7. Set "Execute as": "Me" (your Google account).
 * 8. Set "Who has access": "Anyone" (crucial so your website visitors can submit).
 * 9. Click "Deploy", click "Authorize access", choose your Google account, click "Advanced" > "Go to SVB Form (unsafe)" > "Allow".
 * 10. Copy the "Web app URL" (ends in /exec) and update the SCRIPT_URL in assets/js/main.js!
 */

const INTERNSHIP_SHEET_ID = "1xm6ZoVX2ljvm9iRX6g3qMNGzdqxnSyLMDF57pEOoRCE";
const ENQUIRY_SHEET_ID = "1geA2_oq2hc6XT1RTOQGTLWTxIS8aVVcgZtyF0w_aHC8";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    let data;
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter;
      }
    } else {
      data = e.parameter || {};
    }

    const formType = data.formType || "enquiry";
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    if (formType === "internship") {
      // Store in Internship Sheet
      const ss = SpreadsheetApp.openById(INTERNSHIP_SHEET_ID);
      let sheet = ss.getSheetByName("Internship Leads");
      if (!sheet) {
        sheet = ss.getSheets()[0];
      }

      // Add Headers if Sheet is Empty
      if (sheet.getLastRow() === 0) {
        sheet.appendRow([
          "Timestamp",
          "Title Prefix",
          "First Name",
          "Last Name",
          "Full Name",
          "Email Address",
          "Phone Number",
          "Internship Track",
          "Current Location",
          "Preferred Location",
          "Resume File Name",
          "Status"
        ]);
        sheet.getRange(1, 1, 1, 12).setFontWeight("bold").setBackground("#e0f2fe");
      }

      const prefix = data.prefix || "-";
      const firstName = data.firstName || "";
      const lastName = data.lastName || "";
      const fullName = (prefix !== "-None-" && prefix !== "-" ? prefix + " " : "") + firstName + " " + lastName;
      const email = data.email || "";
      const phone = data.phone || "";
      const domain = data.domain || data.track || "General Internship";
      const currentLocation = data.currentLocation || "";
      const preferredLocation = data.preferredLocation || "";
      const resumeName = data.resumeFileName || "Uploaded Resume";
      const status = "New Application";

      sheet.appendRow([
        timestamp,
        prefix,
        firstName,
        lastName,
        fullName.trim(),
        email,
        phone,
        domain,
        currentLocation,
        preferredLocation,
        resumeName,
        status
      ]);

      return ContentService.createTextOutput(JSON.stringify({
        status: "success",
        type: "internship",
        message: "Internship application recorded successfully!"
      })).setMimeType(ContentService.MimeType.JSON);

    } else {
      // Store in Enquiry / Leads Sheet
      const ss = SpreadsheetApp.openById(ENQUIRY_SHEET_ID);
      let sheet = ss.getSheetByName("Enquiry Leads");
      if (!sheet) {
        sheet = ss.getSheets()[0];
      }

      // Add Headers if Sheet is Empty
      if (sheet.getLastRow() === 0) {
        sheet.appendRow([
          "Timestamp",
          "Student Name",
          "Email Address",
          "Phone Number",
          "Interested Course / Domain",
          "Learning Mode",
          "Student Message",
          "Source Page",
          "Lead Status"
        ]);
        sheet.getRange(1, 1, 1, 9).setFontWeight("bold").setBackground("#dcfce7");
      }

      const name = data.name || data.fullName || "";
      const email = data.email || "";
      const phone = data.phone || "";
      const course = data.course || "General Counseling";
      const mode = data.mode || "Classroom / Online";
      const message = data.message || "Requested Free Callback";
      const sourcePage = data.sourcePage || "Website Header / Modal";
      const status = "New Lead";

      sheet.appendRow([
        timestamp,
        name,
        email,
        phone,
        course,
        mode,
        message,
        sourcePage,
        status
      ]);

      return ContentService.createTextOutput(JSON.stringify({
        status: "success",
        type: "enquiry",
        message: "Enquiry lead recorded successfully!"
      })).setMimeType(ContentService.MimeType.JSON);
    }

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "online",
    message: "SVB Infotech Google Sheets Webhook is active and operational."
  })).setMimeType(ContentService.MimeType.JSON);
}
