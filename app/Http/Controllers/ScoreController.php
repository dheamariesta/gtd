<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ScoreController extends Controller
{
    public function pass_send(Request $request) {

        $request->validate([
            'pass_send' => 'required'
		]);
        if($request->pass_send =="mag354") {
            $mydata = [
                "result" => "Correct password",
                "OG_NAME" => base64_encode("OG_1"),
                "OG_NICK" => "AQUAT"
			];
			$status = 200;
        }
        else if($request->pass_send =="mag231") {
            $mydata = [
                "result" => "Correct password",
                "OG_NAME" => base64_encode("OG_2"),
                "OG_NICK" => "TEHSOSTRONG"
			];
			$status = 200;
        }
        else if($request->pass_send =="reg012") {
            $mydata = [
                "result" => "Correct password",
                "OG_NAME" => base64_encode("OG_3"),
                "OG_NICK" => "PEPSWIFT"
			];
			$status = 200;
        }
        else if($request->pass_send =="reg687") {
            $mydata = [
                "result" => "Correct password",
                "OG_NAME" => base64_encode("OG_4"),
                "OG_NICK" => "QUICKACOLA"
			];
			$status = 200;
        }
        else if($request->pass_send =="alt546") {
            $mydata = [
                "result" => "Correct password",
                "OG_NAME" => base64_encode("OG_5"),
                "OG_NICK" => "NARUTARGET"
			];
			$status = 200;
        }
        else if($request->pass_send =="alt098") {
            $mydata = [
                "result" => "Correct password",
                "OG_NAME" => base64_encode("OG_6"),
                "OG_NICK" => "SASUKEKER"
			];
			$status = 200;
        }
        else if($request->pass_send =="vin456") {
            $mydata = [
                "result" => "Correct password",
                "OG_NAME" => base64_encode("OG_7"),
                "OG_NICK" => "SCARLETTJOHANSIP"
			];
			$status = 200;
        }
        else if($request->pass_send =="vin019") {
            $mydata = [
                "result" => "Correct password",
                "OG_NAME" => base64_encode("OG_8"),
                "OG_NICK" => "HUGHJAGAMAN"
			];
			$status = 200;
		}
        else {
            $mydata = [
                "result" => "Wrong password",
                "OG_NAME" => base64_encode("Exodia"),
                "OG_NICK" => "None"
			];
			$status = 403;
		}
        return response()->json($mydata, $status);
    }
}
