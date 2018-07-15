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

Route::get('/', 'PagesController@home');
Route::post('/send', 'ContactsController@send');
Route::post('/score','ScoreController@pass_send')->name('score.pass_send');
Route::post('/score','ScoreController@Day1')->name('score.Day1');
Route::get('/score', 'PagesController@score')->name('score');