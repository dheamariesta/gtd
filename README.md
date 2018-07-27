# PINTU GTD Website

## Environments
[Development](#Development)

[Production](#Production)
  - [via FTP](#via-ftp)
  - [via SSH](#via-ssh)

## Frameworks Used:
- **[Laravel](https://laravel.com/docs/5.5)**
- **[ReactJS](https://reactjs.org/)**

## Requirements:
* PHP >= 7.0.0
* composer
* npm 

# Development
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

## Enabling Google API
> This project is using Google Sheets API to fetch scores.

1. [Enable Google Sheets API (only step 1)](https://developers.google.com/sheets/api/quickstart/php).

2. [Enable Google Plus API](https://developers.google.com/+/web/signin/)

3. Install `Laravel Socialite`:
```sh
composer require laravel/socialite
```

4. Put the details on the `.env` file with the following:
```dotenv
GOOGLE_SERVER_KEY=[your_api_key]
GOOGLE_CLIENT_ID=[Oauth2_client_ID]
GOOGLE_APP_SECRET=[Oauth2_client_secret]
GOOGLE_REDIRECT=http://localhost:8000/login/google/callback
```
> Don't forget to run `php artisan config:clear` after changing  the `.env` file.

5. Navigate to `/login/google` and follow the instructions on the page.

6. After seeing the success message, navigate to `/score`

7. Key in the password for each OG (at the bottom of the page) to view the results


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
Note: For Windows, use `copy`: 
```sh
copy .env.example .env
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

## Compiling Assets
> You must have `npm` installed on your machine. Refer to [here](https://www.npmjs.com/)
1. Install all npm dependencies
```sh
npm install
```

2. Compile assets
```sh
npm run dev
```
> Alternatively, you can use the wathcer command: `npm run watch`.


## Production

### via FTP
1. Build the assets in production mode in your local computer
```sh
npm run production
```

2. Copy all the application files to the `${webRoot}` (web root directory of your server). Usually, the web root is the `public_html` directory.

> This can be done via FTP, but will take a long time. Preferably, you will want to create a repository on this directory. To do so, you need to have SSH Access. Contact your hosting admistrator for more information. After that, refer to [SSH Access](#via-ssh) below.


3. Set the **document root** of your domain to the `public` directory of your app. (For example, given your app's directory name is **gtd**, then the document root is `${webRoot}/gtd/public`)

4. Edit the `.env` file in the app's root directory
```sh
APP_DEBUG=false
APP_URL=[your_domain_url]
```

> If you need to use database, then create your own database in your server and then update the `.env` file accordingly:
```sh
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

> Similarly, if you need the mail feature, edit the following:
```sh
MAIL_HOST=
MAIL_USERNAME=
MAIL_PASSWORD=
```

### via SSH
#### Requirements
- [git](https://git-scm.com/downloads)
- [composer](https://getcomposer.org/)

1. Navigate to your `${webRoot}` directory

2. Clone this repository to the current directory
```sh
git clone -b <BRANCHNAME> https://github.com/dheamariesta/gtd.git .
```

3. Install php dependencies
```sh
composer install
```

> Make sure composer is installed [globally](https://getcomposer.org/doc/00-intro.md#globally)

4. Copy the `.env.example` file to the `.env` file
```sh
cp .env.example .env
```
> You should have a brand new `.env` file right now

5. Generate application key
```sh
php artisan key:generate
``` 

6. Your website should be deployed

> If you need to create database tables based on your migration files, then you can also run the migration `artisan` command. Make sure that you have created the database and update the .env accordingly.
```sh
php artisan migrate
```


### Troubleshooting
- `php artisan migrate` fails with errors similar to the following:
> [Illuminate\Database\QueryException] 
> SQLSTATE[42000]: Syntax error or access violation: 1071 Specified key was too long; max key length is 767 bytes (SQL: alter table users add unique users_email_unique(email))
> [PDOException] 
>SQLSTATE[42000]: Syntax error or access violation: 1071 Specified key was too long; max key length is 767 bytes 

Workaround:
- Edit the `boot` method in `AppServiceProvider.php` file in `app/Providers` directory 

```php
// import Laravel's Facade (this is important!)
use Illuminate\Support\Facades\Schema;

public function boot()
{
    Schema::defaultStringLength(191);
}
```

- If you encounter any errors during compiling assets, probably you have not _fully installed_ the npm packages. Run the command below: 
```sh
npm install
```

License
----

MIT
