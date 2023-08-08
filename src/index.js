const express = require('express');
const bodyParser = require('body-parser');

const {PORT}  = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
// const router = express.Router();
// const cityRepository = require('./repository/city-repository');

const {City,Airport} = require('./models/index')
const db = require('./models/index')
const sequelize = require('sequelize');
const setupAndStartServer = async () =>{
    //create the express object
    const app = express();
    app.use(bodyParser.json());

    // const {Airplane} = require('./models/index');
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',ApiRoutes); 
    // const PORT = 3000
    app.listen(PORT,async ()=>{
        console.log(`Server started on port ${PORT}`); // String Interpolation
        if(process.env.SYNC_DB)
        {
            db.sequelize.sync({alter : true})
        }
        // const city = new cityRepository(); // This is how we can delete !!
        // const airports = await Airport.findAll({
        //     include:City //We we have multiple associate models we can pass array here 
        // });
        // console.log(airports);
        
        // db.sequelize.sync({alter:true});
        // const city = await City.findOne({
        //     where : {
        //         id:1
        //     }
        // })
        // const airports = await city.getAirports();
        // const newAirport =  await Airport.findOne({
        //     where :{
        //         id : 1
        //     }
        // })
        // await city.addAirport(newAirport);
        // city.addAirport({
        //     name : "Kagalnagar"
        // })
        // console.log(city,airports)
        // await Airplane.create({
        //     modelNumber:  'Bombardier CRJ'
        // })

    })
}


setupAndStartServer();