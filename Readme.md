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