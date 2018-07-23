<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

use Socialite;
use Google_Client;
use Google_Service_Sheets;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function redirectToProvider()
    {
        return Socialite::driver('google')
        ->scopes([Google_Service_Sheets::SPREADSHEETS_READONLY])
        ->redirect();
    }

    public function handleProviderCallback(Request $request)
    {
        //return print_r($request,true);
        //print_r("testCallback\n");
        $user = Socialite::driver('google')->user();
        // Set token for the Google API PHP Client
        //return json_encode($user);
        $google_client_token = json_encode([
            'access_token' => $user->token,
            'refresh_token' => $user->refreshToken,
            'expires_in' => $user->expiresIn
        ]);
        $path = base_path('.env');
        if (file_exists($path)) {
            file_put_contents($path, str_replace(
                'GOOGLE_CLIENT_TOKEN='.env('GOOGLE_CLIENT_TOKEN'), 
                'GOOGLE_CLIENT_TOKEN='.$google_client_token, 
                file_get_contents($path)
            ));
        }
        return print_r("Success! Close this window to continue...",true);
    }

}
