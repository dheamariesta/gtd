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
        if($request->OG_NAME =="Exodia") {
            return Socialite::driver('google')
            ->scopes([Google_Service_Sheets::SPREADSHEETS_READONLY])
            ->redirect();
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
