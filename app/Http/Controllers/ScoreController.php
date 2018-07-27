<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ScoreController extends Controller
{
    public function pass_send(Request $request) {

        $request->validate([
            'pass_send' => 'required'
        ]);

        $status = 200;

        $mydata = [
            'result' => 'Correct password',
        ];

        switch ($request->pass_send){
            case 'AQUAT':
                $mydata['OG_NAME'] = base64_encode('OG_1');
                break;

            case 'TEHSOSTRONG':
                $mydata['OG_NAME'] = base64_encode("OG_2");
                break;

            case 'PEPSWIFT':
                $mydata['OG_NAME'] = base64_encode("OG_3");
                break;

            case "QUICKACOLA":
                $mydata['OG_NAME'] = base64_encode('OG_4');
                break;

            case 'NARUTARGET':
                $mydata['OG_NAME'] = base64_encode('OG_5');
                break;

            case 'SASUKEKER':
                $mydata['OG_NAME'] = base64_encode('OG_6');
                break;

            case 'SCARLETTJOHANSIP':
                $mydata['OG_NAME'] = base64_encode('OG_7');
                break;

            case 'HUGHJAGAMAN':
                $mydata['OG_NAME'] = base64_encode('OG_8');
                break;

            default:
               $mydata = [
                   'result' => 'Wrong Password',
                   'OG_NAME' => 'Exodia',
               ];
               $status = 403;

        }
        return response()->json($mydata, $status);
    }
}
