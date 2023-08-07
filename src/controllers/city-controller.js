// Why do we need controller ??
// Controller store the get, post, detelete, update functions reside at last !!
/*
eg. logStuff = [logOriginalUrl,logMethod]
    app.get("/home",logOriginalUrl,(req,res)=>{
        res.send('Hey World');  --->> Here this function is the controller ...
    })

   --> Our aim is to segregate all routes('/home') at one place all middlewares(logOriginalUrl) at one place and all controllers at one place((req,res))
   In case of controller we doont call the next function --> it is undefined .
*/


// CONTROLLER HAS THE RESPONSIBILITY TO RETURN THE DATA

//CLEAN CODE IS VERY IMPORTANT !!

const {CityService}=require('../services/index');

const cityService = new CityService();

const create = async (req,res)=>{
    try {
        const city = await cityService.createCity(req.body);
        // To return the city in the form of json
        res.status(201).json({
            data : city,
            success : true,
            message : 'Successfully Created a city',
            ree : {}
        }) ;
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data : {},
            success : false,
            message : "Not able to create City",
            err : error
        });
    }
}

// DELETE -> /city/:id --> req.params
const destroy = async (req,res)=>{
    try {
        const response = await cityService.deleteCity(req.params.id);
        res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully deleted a city',
            ree : {}
        }) ;
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data : {},
            success : false,
            message : "Not able to dalete City",
            err : error
        });
    }
    
}

// GET-> /city/:id --> req.params.id
const get = async (req,res)=>{
    
    try {
        const response = await cityService.getCity(req.params.id);
        console.log("Hello")
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully fetched a city',
            err : {}
        }) ;
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data : {},
            success : false,
            message : "Not able to fetch the City",
            err : error
        });
    }
}

// Patch --> /city/:id -> which city --> re.params.id and what to update ->req.body
const update = async (req,res)=>{
    try {
        const response = await cityService.updateCity(req.params.id,req.body);
        res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully Updated a city',
            ree : {}
        }) ;
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data : {},
            success : false,
            message : "Not able to update the City",
            err : error
        });
    }
    
}


const getAll = async (req,res)=>{
    try {
        const cities = await cityService.getAllCities(req.query);
       return res.status(200).json({
            data : cities,
            success : true,
            message : 'Successfully fetched all cities',
            err : {}
        }) ;
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data : {},
            success : false,
            message : "Not able to fetch the Cities",
            err : error
        });
    }
}

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll
}


/*
Why do we need route ?
We need express.Router() -> it helps in writing clean code ..!!
/birds
/birds/about
/birds/help

Normally you would do

app.get("/birds",(req,res)=>{
res.send('Bird route');
})
app.get("/birds/about",(req,res)=>{
res.send('Bird route');
})
app.get("/birds/help",(req,res)=>{
res.send('Bird route');
})

Every route has same prefix '/birds'

now what router does is as soon as it sees /birds it maps to the /bird route and we then only have to write /, /about, /help

api/v1/ --> here v1 stands for version 1

Make a router file where all the routes are handled.
export the router
v1 route 
v2 route 
api route
*/