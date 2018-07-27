<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('/send', 'ContactsController@send');

// Pages
Route::get('/exodia', 'PagesController@exodia');
Route::get('/', 'PagesController@home');

Route::post('/score','ScoreController@pass_send')->name('score.pass_send');
Route::post('/day1','GSheetController@day1')->name('gsheet.day1');
Route::post('/day2','GSheetController@day2')->name('gsheet.day2');
Route::get('/score', 'PagesController@score')->name('score');
Route::get('login/google', 'Auth\LoginController@redirectToProvider');
Route::get('login/google/callback', 'Auth\LoginController@handleProviderCallback');