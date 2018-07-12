<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ScoreController extends Controller
{
    public function pass_send(){
        //testing
        //dd(request()->all()); 
        $Response = Request()->only(["pass_send"]);
        $myJSON = json_encode($Response);
        //$Response = Request();
        //console.log($Response);
        echo $myJSON;
        \Response::JSON("{
            status:success,
            code: 200,
            payload: {
              }
            }");
    }
}
