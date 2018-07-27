<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;
use Illuminate\Support\Facades\Mail;
use App\Mail\VisitorContact;

class ContactsController extends Controller
{
    public function send(Request $request) {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required'
        ]);

        $contact = new Contact([
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message
        ]);

        Mail::to('abc@example.com')->send(new VisitorContact($contact));

        $response = [
            'message' => 'Thank you for emailing us! We will get back to you soon!'
        ];

        return response()->json($response);
    }
}
