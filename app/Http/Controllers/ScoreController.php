<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Redirect;

class ScoreController extends Controller
{
    public function pass_send(Request $request) {
        $rules = [
            'pass_send' => 'required'
        ];
        $this->validate($request, $rules);
        if($request["pass_send"]=="asdf")
            $mydata = [
                "result" => "Correct password",
                "OG_name" => "Exodia"
            ];
        else
            $mydata = [
                "result" => "Wrong password",
                "OG_name" => "Exodia"
            ];
        return $mydata;
        //redirect('/score')->with('test','hello');
        //return \Redirect::route('score')->with('global', 'Your message');
        //return redirect()->route('score');
        //return redirect()->action('PagesController@score');
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
