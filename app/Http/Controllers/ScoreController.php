<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ScoreController extends Controller
{
    public function pass_send(Request $request) {
        $rules = [
            'pass_send' => 'required'
		];
        $this->validate($request, $rules);
        if($request->pass_send =="AQUAT") {
            $mydata = [
                "result" => "Correct password",
                "OG_NAME" => "OG_1"
			];
			$status = 200;
        }
        else if($request->pass_send =="TEHSOSTRONG") {
            $mydata = [
                "result" => "Correct password",
                "OG_NAME" => "OG_2"
			];
			$status = 200;
        }
        else if($request->pass_send =="PEPSWIFT") {
            $mydata = [
                "result" => "Correct password",
                "OG_NAME" => "OG_3"
			];
			$status = 200;
        }
        else if($request->pass_send =="QUICKACOLA") {
            $mydata = [
                "result" => "Correct password",
                "OG_NAME" => "OG_4"
			];
			$status = 200;
        }
        else if($request->pass_send =="NARUTARGET") {
            $mydata = [
                "result" => "Correct password",
                "OG_NAME" => "OG_5"
			];
			$status = 200;
        }
        else if($request->pass_send =="SASUKEKER") {
            $mydata = [
                "result" => "Correct password",
                "OG_NAME" => "OG_6"
			];
			$status = 200;
        }
        else if($request->pass_send =="SCARLETTJOHANSIP") {
            $mydata = [
                "result" => "Correct password",
                "OG_NAME" => "OG_7"
			];
			$status = 200;
        }
        else if($request->pass_send =="HUGHJAGAMAN") {
            $mydata = [
                "result" => "Correct password",
                "OG_NAME" => "OG_8"
			];
			$status = 200;
		}
        else {
            $mydata = [
                "result" => "Wrong password",
                "OG_NAME" => "Exodia"
			];
			$status = 403;
		}
        return response()->json($mydata, $status);
        // redirect('/score')->with('test','hello');
        // return \Redirect::route('score')->with('global', 'Your message');
        // return redirect()->route('score');
        // return redirect()->action('PagesController@score');
    }
    /* //old code
    public function pass_send(){
        //testing
        //dd(request()->all()); 
        $Response = Request()->only(["pass_send"]);
        if($Response["pass_send"]=="asdf")
            $myJSON = "{
                \"result\":\"Correct password\",
                \"OG_name\":\"Exodia\"
             }";
        else
            $myJSON = "{
                \"result\":\"Wrong password\",
                \"OG_name\":\"Exodia\"
             }";
        //$Response = Request();
        //console.log($Response);
        echo $myJSON;
    }*/
}
