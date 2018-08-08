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
                "OG_nick" => "AQUAT"
			];
			$status = 200;
        }
        else if($request->pass_send =="mag231") {
            $mydata = [
                "result" => "Correct password",
                "OG_NAME" => base64_encode("OG_2"),
                "OG_nick" => "TEHSOSTRONG"
			];
			$status = 200;
        }
        else if($request->pass_send =="reg012") {
            $mydata = [
                "result" => "Correct password",
                "OG_NAME" => base64_encode("OG_3"),
                "OG_nick" => "PEPSWIFT"
			];
			$status = 200;
        }
        else if($request->pass_send =="reg687") {
            $mydata = [
                "result" => "Correct password",
                "OG_NAME" => base64_encode("OG_4"),
                "OG_nick" => "QUICKACOLA"
			];
			$status = 200;
        }
        else if($request->pass_send =="alt546") {
            $mydata = [
                "result" => "Correct password",
                "OG_NAME" => base64_encode("OG_5"),
                "OG_nick" => "NARUTARGET"
			];
			$status = 200;
        }
        else if($request->pass_send =="alt098") {
            $mydata = [
                "result" => "Correct password",
                "OG_NAME" => base64_encode("OG_6"),
                "OG_nick" => "SASUKEKER"
			];
			$status = 200;
        }
        else if($request->pass_send =="vin456") {
            $mydata = [
                "result" => "Correct password",
                "OG_NAME" => base64_encode("OG_7"),
                "OG_nick" => "SCARLETTJOHANSIP"
			];
			$status = 200;
        }
        else if($request->pass_send =="vin019") {
            $mydata = [
                "result" => "Correct password",
                "OG_NAME" => base64_encode("OG_8"),
                "OG_nick" => "HUGHJAGAMAN"
			];
			$status = 200;
		}
        else {
            $mydata = [
                "result" => "Wrong password",
                "OG_NAME" => base64_encode("Exodia"),
                "OG_nick" => "None"
			];
			$status = 403;
		}
        return response()->json($mydata, $status);
    }
}
