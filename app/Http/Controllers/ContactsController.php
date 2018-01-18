<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;
use Illuminate\Support\Facades\Mail;
use App\Mail\VisitorContact;

class ContactsController extends Controller
{
    public function send(Request $request) {
        $rules = [
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required'
        ];

        $this->validate($request, $rules);

        $contact = new Contact([
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message
        ]);

        Mail::to('abc@example.com')->send(new VisitorContact($contact));

        return response('Thank you for emailing us! We will get back to you soon!', 200);
    }
}
