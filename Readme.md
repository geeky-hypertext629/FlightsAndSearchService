/
    -src/ or -app/ /*Actual server logic lies inside the src that is why we are creating the src folder. Other unnecessary folders will remain in different folders */
        index.js// server
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/
        repository/ --> using this we can access a lot of models
    -tests/ [later]
    -static/
    -temp/ 



# Welcome to Flights Service

## Project Setup
- clone the project on your local 
- execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and install the following environment variables
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json


```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

- Once you've added your db config as listed above, go to the source folder from your terminal and execute `npx sequelize db:create`
- Run `sequelize db:migrate --env development`. This will run all migrations that are present inside 
```


## Flights Table
- id -unique id to identify the flights

## Db Design
  - Airplane Table
  - Flight
  - City
  - Airport
  - City
// Different Services should have different databases

// Airplane Table
// ID --> Cannot be same for 2 planes
// model_no --> Can be same for multiple airplanes
// capacity
// created at
// updated at


//Flights
// Id
// src_airport_id
// dest_airport_id
// departure date
// arrival date
// departure time
// arrival time


//City
// id
// name


// Airport
// Id
// name
// city_id
// address


//  Entity Relationship diagram

//City ---> Airport

// Airplane --> Many Flights (one to many relation)

// One airport to many flights 

// one city to many airports

//Migrations help us to create incremental changes to our database

//All the interactions with the model should happen at the repository level


//City has many airports and airport belongs to single city
// City ====> id,name ,created at,updated at
// Airport ==> id, name, city, address, created At, updated At..

```
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
```

// Seeders can help you to put some starting data in your database