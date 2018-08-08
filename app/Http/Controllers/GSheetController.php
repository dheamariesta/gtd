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
        $request->OG_NAME = base64_decode($request->OG_NAME);
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
        //$outdoor_desc_range = 'Outdoor!A7';
        //$night_desc_range = 'Night updated!A3:A10';
        if($request->OG_NAME =="OG_1") {
            $outdoor_score_range = 'Outdoor!B7';
            $night_score_range = 'Night updated!B10';
            //$night_score_range2 = 'Night!C3:C10';
            //$night_score_response2 = $service->spreadsheets_values->get($day1sheetID, $night_score_range2);
            //$outdoor_desc_response = $service->spreadsheets_values->get($day1sheetID, $outdoor_desc_range);
            $outdoor_score_response = $service->spreadsheets_values->get($day1sheetID, $outdoor_score_range);
            //$night_desc_response = $service->spreadsheets_values->get($day1sheetID, $night_desc_range);
            $night_score_response = $service->spreadsheets_values->get($day1sheetID, $night_score_range);
            $mydata = [
                'game_scores_outdoor' => $outdoor_score_response->getValues(),
                'game_scores_night' => $night_score_response->getValues()
            ];
            $status = 200;
        }
        else if($request->OG_NAME =="OG_2") {
            $outdoor_score_range = 'Outdoor!C7';
            $night_score_range = 'Night updated!H10';
            //$night_score_range2 = 'Night!C3:C10';
            //$night_score_response2 = $service->spreadsheets_values->get($day1sheetID, $night_score_range2);
            //$outdoor_desc_response = $service->spreadsheets_values->get($day1sheetID, $outdoor_desc_range);
            $outdoor_score_response = $service->spreadsheets_values->get($day1sheetID, $outdoor_score_range);
            //$night_desc_response = $service->spreadsheets_values->get($day1sheetID, $night_desc_range);
            $night_score_response = $service->spreadsheets_values->get($day1sheetID, $night_score_range);
            $mydata = [
                'game_scores_outdoor' => $outdoor_score_response->getValues(),
                'game_scores_night' => $night_score_response->getValues()
            ];
            $status = 200;
        }
        else if($request->OG_NAME =="OG_3") {
            $outdoor_score_range = 'Outdoor!D7';
            $night_score_range = 'Night updated!N10';
            //$night_score_range2 = 'Night!C3:C10';
            //$night_score_response2 = $service->spreadsheets_values->get($day1sheetID, $night_score_range2);
            //$outdoor_desc_response = $service->spreadsheets_values->get($day1sheetID, $outdoor_desc_range);
            $outdoor_score_response = $service->spreadsheets_values->get($day1sheetID, $outdoor_score_range);
            //$night_desc_response = $service->spreadsheets_values->get($day1sheetID, $night_desc_range);
            $night_score_response = $service->spreadsheets_values->get($day1sheetID, $night_score_range);
            $mydata = [
                'game_scores_outdoor' => $outdoor_score_response->getValues(),
                'game_scores_night' => $night_score_response->getValues()
            ];
            $status = 200;
        }
        else if($request->OG_NAME =="OG_4") {
            $outdoor_score_range = 'Outdoor!E7';
            $night_score_range = 'Night updated!T10';
            //$night_score_range2 = 'Night!C3:C10';
            //$night_score_response2 = $service->spreadsheets_values->get($day1sheetID, $night_score_range2);
            //$outdoor_desc_response = $service->spreadsheets_values->get($day1sheetID, $outdoor_desc_range);
            $outdoor_score_response = $service->spreadsheets_values->get($day1sheetID, $outdoor_score_range);
            //$night_desc_response = $service->spreadsheets_values->get($day1sheetID, $night_desc_range);
            $night_score_response = $service->spreadsheets_values->get($day1sheetID, $night_score_range);
            $mydata = [
                'game_scores_outdoor' => $outdoor_score_response->getValues(),
                'game_scores_night' => $night_score_response->getValues()
            ];
            $status = 200;
        }
        else if($request->OG_NAME =="OG_5") {
            $outdoor_score_range = 'Outdoor!F7';
            $night_score_range = 'Night updated!Z10';
            //$night_score_range2 = 'Night!C3:C10';
            //$night_score_response2 = $service->spreadsheets_values->get($day1sheetID, $night_score_range2);
            //$outdoor_desc_response = $service->spreadsheets_values->get($day1sheetID, $outdoor_desc_range);
            $outdoor_score_response = $service->spreadsheets_values->get($day1sheetID, $outdoor_score_range);
            //$night_desc_response = $service->spreadsheets_values->get($day1sheetID, $night_desc_range);
            $night_score_response = $service->spreadsheets_values->get($day1sheetID, $night_score_range);
            $mydata = [
                'game_scores_outdoor' => $outdoor_score_response->getValues(),
                'game_scores_night' => $night_score_response->getValues()
            ];
            $status = 200;
        }
        else if($request->OG_NAME =="OG_6") {
            $outdoor_score_range = 'Outdoor!G7';
            $night_score_range = 'Night updated!AF10';
            //$night_score_range2 = 'Night!C3:C10';
            //$night_score_response2 = $service->spreadsheets_values->get($day1sheetID, $night_score_range2);
            //$outdoor_desc_response = $service->spreadsheets_values->get($day1sheetID, $outdoor_desc_range);
            $outdoor_score_response = $service->spreadsheets_values->get($day1sheetID, $outdoor_score_range);
            //$night_desc_response = $service->spreadsheets_values->get($day1sheetID, $night_desc_range);
            $night_score_response = $service->spreadsheets_values->get($day1sheetID, $night_score_range);
            $mydata = [
                'game_scores_outdoor' => $outdoor_score_response->getValues(),
                'game_scores_night' => $night_score_response->getValues()
            ];
            $status = 200;
        }
        else if($request->OG_NAME =="OG_7") {
            $outdoor_score_range = 'Outdoor!H7';
            $night_score_range = 'Night updated!AL10';
            //$night_score_range2 = 'Night!C3:C10';
            //$night_score_response2 = $service->spreadsheets_values->get($day1sheetID, $night_score_range2);
            //$outdoor_desc_response = $service->spreadsheets_values->get($day1sheetID, $outdoor_desc_range);
            $outdoor_score_response = $service->spreadsheets_values->get($day1sheetID, $outdoor_score_range);
            //$night_desc_response = $service->spreadsheets_values->get($day1sheetID, $night_desc_range);
            $night_score_response = $service->spreadsheets_values->get($day1sheetID, $night_score_range);
            $mydata = [
                'game_scores_outdoor' => $outdoor_score_response->getValues(),
                'game_scores_night' => $night_score_response->getValues()
            ];
            $status = 200;
        }
        else if($request->OG_NAME =="OG_8") {
            $outdoor_score_range = 'Outdoor!I7';
            $night_score_range = 'Night updated!AR10';
            //$night_score_range2 = 'Night!C3:C10';
            //$night_score_response2 = $service->spreadsheets_values->get($day1sheetID, $night_score_range2);
            //$outdoor_desc_response = $service->spreadsheets_values->get($day1sheetID, $outdoor_desc_range);
            $outdoor_score_response = $service->spreadsheets_values->get($day1sheetID, $outdoor_score_range);
            //$night_desc_response = $service->spreadsheets_values->get($day1sheetID, $night_desc_range);
            $night_score_response = $service->spreadsheets_values->get($day1sheetID, $night_score_range);
            $mydata = [
                'game_scores_outdoor' => $outdoor_score_response->getValues(),
                'game_scores_night' => $night_score_response->getValues()
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

    public function day2(Request $request)
    {
        $rules = [
            'OG_NAME' => 'required'
        ];
        $request->OG_NAME = base64_decode($request->OG_NAME);
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
        $day2sheetID = '1barPIbd4ExqKMjcjJCgkx-7tvJU6XuZtw2I8nztvfzU';
        if($request->OG_NAME =="OG_1") {
            $beach_balance_range = 'Main!B3';
            $beach_min_bid = 'Main!C3';
            $beach_max_bid = 'Main!D3';
            $beach_score_response = $service->spreadsheets_values->get($day2sheetID, $beach_balance_range);
            $beach_min_bid_response = $service->spreadsheets_values->get($day2sheetID, $beach_min_bid);
            $beach_max_bid_response = $service->spreadsheets_values->get($day2sheetID, $beach_max_bid);
            $mydata = [
                'game_balance_beach' => $beach_score_response->getValues(),
                'beach_min_bid' => $beach_min_bid_response->getValues(),
                'beach_max_bid' => $beach_max_bid_response->getValues(),
            ];
            $status = 200;
        }
        else if($request->OG_NAME =="OG_2") {
            $beach_balance_range = 'Main!B4';
            $beach_min_bid = 'Main!C4';
            $beach_max_bid = 'Main!D4';
            $beach_score_response = $service->spreadsheets_values->get($day2sheetID, $beach_balance_range);
            $beach_min_bid_response = $service->spreadsheets_values->get($day2sheetID, $beach_min_bid);
            $beach_max_bid_response = $service->spreadsheets_values->get($day2sheetID, $beach_max_bid);
            $mydata = [
                'game_balance_beach' => $beach_score_response->getValues(),
                'beach_min_bid' => $beach_min_bid_response->getValues(),
                'beach_max_bid' => $beach_max_bid_response->getValues(),
            ];
            $status = 200;
        }
        else if($request->OG_NAME =="OG_3") {
            $beach_balance_range = 'Main!B5';
            $beach_min_bid = 'Main!C5';
            $beach_max_bid = 'Main!D5';
            $beach_score_response = $service->spreadsheets_values->get($day2sheetID, $beach_balance_range);
            $beach_min_bid_response = $service->spreadsheets_values->get($day2sheetID, $beach_min_bid);
            $beach_max_bid_response = $service->spreadsheets_values->get($day2sheetID, $beach_max_bid);
            $mydata = [
                'game_balance_beach' => $beach_score_response->getValues(),
                'beach_min_bid' => $beach_min_bid_response->getValues(),
                'beach_max_bid' => $beach_max_bid_response->getValues(),
            ];
            $status = 200;
        }
        else if($request->OG_NAME =="OG_4") {
            $beach_balance_range = 'Main!B6';
            $beach_min_bid = 'Main!C6';
            $beach_max_bid = 'Main!D6';
            $beach_score_response = $service->spreadsheets_values->get($day2sheetID, $beach_balance_range);
            $beach_min_bid_response = $service->spreadsheets_values->get($day2sheetID, $beach_min_bid);
            $beach_max_bid_response = $service->spreadsheets_values->get($day2sheetID, $beach_max_bid);
            $mydata = [
                'game_balance_beach' => $beach_score_response->getValues(),
                'beach_min_bid' => $beach_min_bid_response->getValues(),
                'beach_max_bid' => $beach_max_bid_response->getValues(),
            ];
            $status = 200;
        }
        else if($request->OG_NAME =="OG_5") {
            $beach_balance_range = 'Main!B7';
            $beach_min_bid = 'Main!C7';
            $beach_max_bid = 'Main!D7';
            $beach_score_response = $service->spreadsheets_values->get($day2sheetID, $beach_balance_range);
            $beach_min_bid_response = $service->spreadsheets_values->get($day2sheetID, $beach_min_bid);
            $beach_max_bid_response = $service->spreadsheets_values->get($day2sheetID, $beach_max_bid);
            $mydata = [
                'game_balance_beach' => $beach_score_response->getValues(),
                'beach_min_bid' => $beach_min_bid_response->getValues(),
                'beach_max_bid' => $beach_max_bid_response->getValues(),
            ];
            $status = 200;
        }
        else if($request->OG_NAME =="OG_6") {
            $beach_balance_range = 'Main!B8';
            $beach_min_bid = 'Main!C8';
            $beach_max_bid = 'Main!D8';
            $beach_score_response = $service->spreadsheets_values->get($day2sheetID, $beach_balance_range);
            $beach_min_bid_response = $service->spreadsheets_values->get($day2sheetID, $beach_min_bid);
            $beach_max_bid_response = $service->spreadsheets_values->get($day2sheetID, $beach_max_bid);
            $mydata = [
                'game_balance_beach' => $beach_score_response->getValues(),
                'beach_min_bid' => $beach_min_bid_response->getValues(),
                'beach_max_bid' => $beach_max_bid_response->getValues(),
            ];
            $status = 200;
        }
        else if($request->OG_NAME =="OG_7") {
            $beach_balance_range = 'Main!B9';
            $beach_min_bid = 'Main!C9';
            $beach_max_bid = 'Main!D9';
            $beach_score_response = $service->spreadsheets_values->get($day2sheetID, $beach_balance_range);
            $beach_min_bid_response = $service->spreadsheets_values->get($day2sheetID, $beach_min_bid);
            $beach_max_bid_response = $service->spreadsheets_values->get($day2sheetID, $beach_max_bid);
            $mydata = [
                'game_balance_beach' => $beach_score_response->getValues(),
                'beach_min_bid' => $beach_min_bid_response->getValues(),
                'beach_max_bid' => $beach_max_bid_response->getValues(),
            ];
            $status = 200;
        }
        else if($request->OG_NAME =="OG_8") {
            $beach_balance_range = 'Main!B10';
            $beach_min_bid = 'Main!C10';
            $beach_max_bid = 'Main!D10';
            $beach_score_response = $service->spreadsheets_values->get($day2sheetID, $beach_balance_range);
            $beach_min_bid_response = $service->spreadsheets_values->get($day2sheetID, $beach_min_bid);
            $beach_max_bid_response = $service->spreadsheets_values->get($day2sheetID, $beach_max_bid);
            $mydata = [
                'game_balance_beach' => $beach_score_response->getValues(),
                'beach_min_bid' => $beach_min_bid_response->getValues(),
                'beach_max_bid' => $beach_max_bid_response->getValues(),
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

    public function day3(Request $request)
    {
        $rules = [
            'OG_NAME' => 'required'
        ];
        $request->OG_NAME = base64_decode($request->OG_NAME);
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
        $day3sheetID = '1rqr8_7orpu6h1JUwm5wSol0arxSu3T8mZnTb8dhl_aE';
        //$field_desc_range = 'Poin field!B11';
        if($request->OG_NAME =="OG_1") {
            $field_point_range = 'Poin field!C16';
            $field_point_response = $service->spreadsheets_values->get($day3sheetID, $field_point_range);
            $mydata = [
                'game_point_field' => $field_point_response->getValues(),
            ];
            $status = 200;
        }
        else if($request->OG_NAME =="OG_2") {
            $field_point_range = 'Poin field!D16';
            $field_point_response = $service->spreadsheets_values->get($day3sheetID, $field_point_range);
            $mydata = [
                'game_point_field' => $field_point_response->getValues(),
            ];
            $status = 200;
        }
        else if($request->OG_NAME =="OG_3") {
            $field_point_range = 'Poin field!E16';
            $field_point_response = $service->spreadsheets_values->get($day3sheetID, $field_point_range);
            $mydata = [
                'game_point_field' => $field_point_response->getValues(),
            ];
            $status = 200;
        }
        else if($request->OG_NAME =="OG_4") {
            $field_point_range = 'Poin field!F16';
            $field_point_response = $service->spreadsheets_values->get($day3sheetID, $field_point_range);
            $mydata = [
                'game_point_field' => $field_point_response->getValues(),
            ];
            $status = 200;
        }
        else if($request->OG_NAME =="OG_5") {
            $field_point_range = 'Poin field!G16';
            $field_point_response = $service->spreadsheets_values->get($day3sheetID, $field_point_range);
            $mydata = [
                'game_point_field' => $field_point_response->getValues(),
            ];
            $status = 200;
        }
        else if($request->OG_NAME =="OG_6") {
            $field_point_range = 'Poin field!H16';
            $field_point_response = $service->spreadsheets_values->get($day3sheetID, $field_point_range);
            $mydata = [
                'game_point_field' => $field_point_response->getValues(),
            ];
            $status = 200;
        }
        else if($request->OG_NAME =="OG_7") {
            $field_point_range = 'Poin field!I16';
            $field_point_response = $service->spreadsheets_values->get($day3sheetID, $field_point_range);
            $mydata = [
                'game_point_field' => $field_point_response->getValues(),
            ];
            $status = 200;
        }
        else if($request->OG_NAME =="OG_8") {
            $field_point_range = 'Poin field!J16';
            $field_point_response = $service->spreadsheets_values->get($day3sheetID, $field_point_range);
            $mydata = [
                'game_point_field' => $field_point_response->getValues(),
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
