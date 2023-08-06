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

const {CityService} = require("./../services/index");

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
        res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully fetched a city',
            ree : {}
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

module.exports = {
    create,
    destroy,
    update,
    get
}