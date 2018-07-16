<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GSheetController extends Controller
{
    public function day1(Request $request)
    {
        $rules = [
            'OG_NAME' => 'required'
		];
    }
}
