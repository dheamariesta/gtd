# PINTU GTD Website
**[Laravel 5.5 Framework](https://laravel.com/docs/5.5)**

## Requirements:
* PHP >= 7.0.0
* composer

## Installing Laravel
1. Install the requirements
	* [PHP >= 7.0.0](http://php.net/downloads.php) 
	* [composer](https://getcomposer.org/doc/00-intro.md)
> Note: Follow the instructions accordingly depending on your operating systems.

2. Download the Laravel Installer using `composer`
```sh
composer global require "laravel/installer"
```

3. Place the composer's `vendor/bin` directory in your `$PATH` variable
	* macOS: `$HOME`/.composer/vendor/bin
	* Windows: C:\Users\USERNAME\AppData\Roaming\Composer\vendor\bin
> The executable `laravel` should now be available in your local machine.

## Cloning Repository
1. Clone this branch
```sh
git clone -b <BRANCHNAME> https://github.com/dheamariesta/gtd.git
```

2. Move to the **gtd** directory and install the necessary dependencies using Composer
```sh
cd gtd
composer install
```
> You should be able to run `php artisan` command.

3. Copy the `.env.example` file to the `.env` file
```sh
cp .env.example .env
```
> You should have a brand new `.env` file right now

4. Generate application key
```sh
php artisan key:generate
```

5. Run the application on the localhost using the Artisan command
```sh
php artisan serve
```

6. Visit `localhost:8000` in your web browser


License
----

MIT
