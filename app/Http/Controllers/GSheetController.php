<?php

namespace App\Http\Controllers;

require __DIR__ . '/../../../vendor/autoload.php';
use Socialite;
use Google_Client;
use Google_Service_Sheets;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class GSheetController extends Controller
{


    public function day1(Request $request)
    {
        $rules = [
            'OG_NAME' => 'required'
        ];
        $this->validate($request, $rules);
        $google_client_token = env('GOOGLE_CLIENT_TOKEN');
        $client_secret = [
            'client_id' => env('GOOGLE_CLIENT_ID'),         // Your Google Client ID
            'client_secret' => env('GOOGLE_APP_SECRET'),
        ];
        $client = new Google_Client();
        $client->setApplicationName("Google Sheets API PHP Quickstart");
        $client->setDeveloperKey(env('GOOGLE_SERVER_KEY'));
        $client->setAccessToken($google_client_token);
        $client->setAuthConfig($client_secret);
        $service = new Google_Service_Sheets($client);
        $day1sheetID = '1KMuYbgablwJwOTZNhS-GM4abwYN86k2RXr8AxASpoXg';
        $outdoor_desc_range = 'Outdoor!A2:A8';
        $night_desc_range = 'Night!A3:A10';
        if($request->OG_NAME =="OG_1") {
            $outdoor_score_range = 'Outdoor!B2:B8';
            $night_score_range = 'Night!B3:B10';
            $outdoor_desc_response = $service->spreadsheets_values->get($day1sheetID, $outdoor_desc_range);
            $outdoor_score_response = $service->spreadsheets_values->get($day1sheetID, $outdoor_score_range);
            $night_desc_response = $service->spreadsheets_values->get($day1sheetID, $night_desc_range);
            $night_score_response = $service->spreadsheets_values->get($day1sheetID, $night_score_range);
            $mydata = [
                'game_titles_outdoor'=> $outdoor_desc_response->getValues(),
                'game_scores_outdoor' => $outdoor_score_response->getValues(),
                'game_titles_night'=> $night_desc_response->getValues(),
                'game_scores_night' => $night_score_response->getValues(),
            ];
            $status = 200;
        }
        else if($request->OG_NAME =="OG_2")
        {
            $outdoor_score_range = 'Outdoor!C2:C8';
            $outdoor_desc_response = $service->spreadsheets_values->get($day1sheetID, $outdoor_desc_range);
            $outdoor_score_response = $service->spreadsheets_values->get($day1sheetID, $outdoor_score_range);
            $mydata = [
                'game_titles'=> $outdoor_desc_response->getValues(),
                'game_scores' => $outdoor_score_response->getValues()
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
