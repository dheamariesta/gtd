<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="csrf-token" content="{{ csrf_token() }}">
        <title>GTD Laravel - React</title>

		{{-- favicon --}}
		<link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />

        <link rel="stylesheet" href="{{ asset('css/main.css') }}">

        <!-- Fonts -->
		<link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        
    </head>
    <body>
        
        @yield('content')

		<script src="{{ asset('js/main.js') }}"></script>

		@yield('script')
    </body>
</html>
