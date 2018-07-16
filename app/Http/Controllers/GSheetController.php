<?php

namespace App\Http\Controllers;

require __DIR__ . '/../../../vendor/autoload.php';
use Socialite;
use Google_Client;
use Google_Service_Sheets;

use Illuminate\Http\Request;

class GSheetController extends Controller
{

    

    public function day1(Request $request)
    {
        $rules = [
            'OG_NAME' => 'required'
        ];
        $this->validate($request, $rules);
        if($request->OG_NAME =="Exodia") {
            $value = handleProviderCallback();
            /*
            $client = getClient();
            $service = new Google_Service_Sheets($client);
            $day1sheetID = '1KMuYbgablwJwOTZNhS-GM4abwYN86k2RXr8AxASpoXg';
            $outdoor_desc_range = 'Outdoor!A2:A6';
            $gsheet_outdoor_response = $service->spreadsheets_values->get($day1sheetID, $outdoor_desc_range);
            $outdoor_values = $gsheet_outdoor_response->getValues();*/
            $mydata = [
                "Values" => "temp"
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
