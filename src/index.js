const express = require('express');
const bodyParser = require('body-parser');

const {PORT}  = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
// const router = express.Router();
// const cityRepository = require('./repository/city-repository');

const setupAndStartServer = async () =>{
    //create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',ApiRoutes);   
    // const PORT = 3000
    app.listen(PORT,async ()=>{
        console.log(`Server started on port ${PORT}`); // String Interpolation
        // const city = new cityRepository(); // This is how we can delete !!
    })
}


setupAndStartServer();