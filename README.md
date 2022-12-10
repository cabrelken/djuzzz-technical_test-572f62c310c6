# Fresh Management

## Installation

Install laravel Packages [composer](https://getcomposer.org/)

If you don't have it, install NodeJs version 16 [nodejs@16.16](https://nodejs.org/en/blog/release/v16.16.0/) (the version is important)

If you have multiple NodeJs versions you can use [NVM](https://github.com/coreybutler/nvm-windows/releases) to switch between your NodeJs versions.

```none
composer install
```

```none
npm install
or
yarn install
```

## Database

* Copy the .env.example file into .env file
* Create a mysql database MySQL \(interclassement utf8mb4\_general\_ci\)
* Modify the .env file

```none
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE={{ database_name }}
DB_USERNAME=root
DB_PASSWORD=
```

* Run the migration and the seeder

```none
php artisan migrate:fresh --seed
```

## Run the app

* In a terminal run the php server

```none
php artisan serve --host="localhost"
```

* In an other one run the command

```none
npm run dev
or
yarn dev
```

## Access the app

You can access the app through this link : [http://localhost:8000/](http://localhost:8000/).

## Instructions

Once the app launched you will find a list of instructions on the home page. You can also see how the app should work at this link : [Working test](https://test.fresh-management.fr/#/home)

## License

Fresh Management Copyright \(C\) All rights reserved