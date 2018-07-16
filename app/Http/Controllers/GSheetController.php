<?php

namespace App\Http\Controllers;

require __DIR__ . '/../../../vendor/autoload.php';
use Google_Client;
use Google_Service_Sheets;

use Illuminate\Http\Request;

 /**
 * Returns an authorized API client.
 * @return Google_Client the authorized client object
 */
function getClient()
{
    $client = new Google_Client();
    $client->setApplicationName('Google Sheets API PHP Quickstart');
    $client->setScopes(Google_Service_Sheets::SPREADSHEETS_READONLY);
    $client->setAuthConfig(json_decode(getenv("GOOGLE_API_JSON"),true));
    //$client->setAuthConfig('client_secret.json');
    $client->setAccessType('offline');
    // Load previously authorized credentials from a file.
    //$accessToken = json_decode(file_get_contents($credentialsPath), true);
    $accessToken = json_decode(getenv("GOOGLE_API_CREDENTIALS"), true);
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

class GSheetController extends Controller
{
    public function day1(Request $request)
    {
        $rules = [
            'OG_NAME' => 'required'
        ];
        $this->validate($request, $rules);
        if($request->OG_NAME =="Exodia") {
            $client = getClient();
            $service = new Google_Service_Sheets($client);
            $day1sheetID = '1KMuYbgablwJwOTZNhS-GM4abwYN86k2RXr8AxASpoXg';
            $outdoor_desc_range = 'Outdoor!A2:A6';
            $gsheet_outdoor_response = $service->spreadsheets_values->get($day1sheetID, $outdoor_desc_range);
            $outdoor_values = $gsheet_outdoor_response->getValues();
            $mydata = [
                "Values" => $outdoor_values
            ];
            $status = 200;
        }
        else
        {
            $mydata = [
                "OG_NAME" => "Exodia"
            ];
            $status = 403;
        }
        return response()->json($mydata, $status);
    }
}
