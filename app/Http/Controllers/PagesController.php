<?php

namespace App\Http\Controllers;


class PagesController extends Controller
{
    public function home(){
        return view('pages.home');
    }

    public function exodia()
    {
        return view('pages.exodia');
    }
    public function score(){
        return view('pages.score');
    }
}
