export function sendUserInfo (name, phone, email, state, friendName, friendPhone) {
    let google = require('googleapis');
    let secretKey = require("./resources/client_secret.json");
    let jwtClient = new google.auth.JWT(
        secretKey.client_email,
        null,
        secretKey.private_key,
        ['https://www.googleapis.com/auth/spreadsheets']);
    //authenticate request
    jwtClient.authorize(function (err, tokens) {
    if (err) {
    console.log(err);
    return;
    } else {
    console.log("Successfully connected!");
    }
    });
    //Google Sheets API
    let spreadsheetId = '1P_z5-9-pn9tmVHXbKjj_Hs9jSAbN8vIA-HwAzJ0vcc4';
    let sheetRange = 'Homepage_Data!A4:E4'
    let sheets = google.sheets('v4');
    let values = [
    [
        name,
        phone,
        email,
        state,
        friendName,
        friendPhone
    ]
    ];
    const sheetResource = {
    values,
    };
    sheets.spreadsheets.values.update({
    auth: jwtClient,
    spreadsheetId: spreadsheetId,
    range: sheetRange,
    resource: sheetResource
    }, function (err, response) {
    if (err) {
        console.log('The API returned an error: ' + err);
    } else {
        console.log('Movie list from Google Sheets:');
        for (let row of response.values) {
            console.log('Title [%s]\t\tRating [%s]', row[0], row[1]);
        }
    }
});
    return
}

export default sendUserInfo