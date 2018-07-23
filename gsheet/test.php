<?php
require __DIR__ . '/../vendor/autoload.php';

/**
 * Returns an authorized API client.
 * @return Google_Client the authorized client object
 */
function getClient()
{
    $client = new Google_Client();
    $client->setApplicationName('Google Sheets API PHP Quickstart');
    $client->setScopes(Google_Service_Sheets::SPREADSHEETS_READONLY);
    $client->setAuthConfig('client_secret.json');
    $client->setAccessType('offline');
    //$client->setRedirectUri('http://' . $_SERVER['HTTP_HOST'] . '/oauth2callback.php');

    // Load previously authorized credentials from a file.
    $credentialsPath = expandHomeDirectory('credentials.json');
    if (file_exists($credentialsPath)) {
        $accessToken = json_decode(file_get_contents($credentialsPath), true);
    } else {
        // Request authorization from the user.
        $authUrl = $client->createAuthUrl();
        printf("Open the following link in your browser:\n%s\n", $authUrl);
        print 'Enter verification code: ';
        $authCode = trim(fgets(STDIN));

        // Exchange authorization code for an access token.
        $accessToken = $client->fetchAccessTokenWithAuthCode($authCode);

        // Store the credentials to disk.
        if (!file_exists(dirname($credentialsPath))) {
            mkdir(dirname($credentialsPath), 0700, true);
        }
        file_put_contents($credentialsPath, json_encode($accessToken));
        printf("Credentials saved to %s\n", $credentialsPath);
    }
    $client->setAccessToken($accessToken);

    // Refresh the token if it's expired.
    if ($client->isAccessTokenExpired()) {
        $client->fetchAccessTokenWithRefreshToken($client->getRefreshToken());
        file_put_contents($credentialsPath, json_encode($client->getAccessToken()));
    }
    return $client;
}

/**
 * Expands the home directory alias '~' to the full path.
 * @param string $path the path to expand.
 * @return string the expanded path.
 */
function expandHomeDirectory($path)
{
    $homeDirectory = getenv('HOME');
    if (empty($homeDirectory)) {
        $homeDirectory = getenv('HOMEDRIVE') . getenv('HOMEPATH');
    }
    return str_replace('~', realpath($homeDirectory), $path);
}

// Get the API client and construct the service object.
$client = getClient();
$service = new Google_Service_Sheets($client);

// Prints the names and majors of students in a sample spreadsheet:
// https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
$spreadsheetId = '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms';
$range = 'Class Data!A2:E';
$response = $service->spreadsheets_values->get($spreadsheetId, $range);
$values = $response->getValues();

$_new_sheet_Id = '1KMuYbgablwJwOTZNhS-GM4abwYN86k2RXr8AxASpoXg';
$_new_range = 'Outdoor!A2:A6';
$_max_column = 0;
$_new_response = $service->spreadsheets_values->get($_new_sheet_Id, $_new_range);
$_new_values = $_new_response->getValues();
/*
if (empty($values)) {
    print "No data found.\n";
} else {
    print "Name, Major:\n";
    foreach ($values as $row) {
        // Print columns A and E, which correspond to indices 0 and 4.
        printf("%s, %s\n", $row[0], $row[4]);
    }
}
*/
if(empty($_new_values))
{
    print "No data found.\n";
}
else {
    //printf("<table border=1>");
    foreach ($_new_values as $row) {
        //printf("<tr>");
        $_max_column=max($_max_column,sizeof($row));
        foreach($row as $column)
        {
            //printf("<td>");
            printf("%s\n", $column);
            # printf(":%s %s ",gettype($row),gettype($column));
            //printf("</td>");
        }
        //printf("</tr>\n");
    }
    //printf("</table>");

    printf("After formatting: <br>");
    printf("<table border=2 >");
    foreach ($_new_values as $row) {
        printf("<tr>");
        for($column=0;$column<$_max_column;$column++)
        {
            printf("<td width =100>");
            if($column<sizeof($row))
            printf("%s", $row[$column]);
            # printf(":%s %s ",gettype($row),gettype($column));
            printf("</td>");
        }
        printf("</tr>\n");
    }
    printf("</table>");

    /*$values = [[3,2,1]];
    $body = new Google_Service_Sheets_ValueRange(['values' => $values  ]);
    $params = ['valueInputOption' => $valueInputOption];
    $_range_update = 'Sheet1!A3:C3';
    $result = $service->spreadsheets_values->update($_new_sheet_Id, $_range_update, $body, $params);
    printf("<br> %d cells updated. <br>", $result->getUpdatedCells());

    printf("<br>After value update:<br>");
    printf("<table border=2 >");
    foreach ($_new_values as $row) {
        printf("<tr>");
        for($column=0;$column<$_max_column;$column++)
        {
            printf("<td width =100>");
            if($column<sizeof($row))
            printf("%s", $row[$column]);
            # printf(":%s %s ",gettype($row),gettype($column));
            printf("</td>");
        }
        printf("</tr>\n");
    }
    printf("</table>");*/
    /*$values = [
        [
            // Cell values ...
        ],
        // Additional rows ...
    ];
    $body = new Google_Service_Sheets_ValueRange([
      'values' => $values
    ]);
    $params = [
      'valueInputOption' => $valueInputOption
    ];
    $result = $service->spreadsheets_values->append($spreadsheetId, $range,
        $body, $params);
    printf("%d cells appended.", $result->getUpdates()->getUpdatedCells());*/
    
}

