<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <p>Dear {{ config('app.name') }} Administrator, </p>
    <p>{{ $contact->name }} < {{ $contact->email }} > wrote:  </p>
    <p> {{ $contact->message }} </p>
</body>
</html>