<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

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

    public function handleProviderCallback()
    {
        $user = Socialite::driver('google')->user();

        // Set token for the Google API PHP Client
        $google_client_token = [
            'access_token' => $user->token,
            'refresh_token' => $user->refreshToken,
            'expires_in' => $user->expiresIn
        ];

        $client = new Google_Client();
        $client->setApplicationName("Google Sheets API PHP Quickstart");
        $client->setDeveloperKey(env('GOOGLE_SERVER_KEY'));
        $client->setAccessToken(json_encode($google_client_token));
        $service = new Google_Service_Sheets($client);
        $day1sheetID = '1KMuYbgablwJwOTZNhS-GM4abwYN86k2RXr8AxASpoXg';
        $outdoor_desc_range = 'Outdoor!A2:A6';
        $gsheet_outdoor_response = $service->spreadsheets_values->get($day1sheetID, $outdoor_desc_range);
        return $gsheet_outdoor_response->getValues();
        //$optParams = array('requestMask.includeField' => 'person.phone_numbers,person.names,person.email_addresses');
        //$results = $service->people_connections->listPeopleConnections('people/me',$optParams);

    }

}
