const CrudRepository = require('./crud-repository');
const {Airport} = require('../models/index');

class AirportRepository extends CrudRepository{
    constructor(){
        super(Airport);
    }

}

module.exports = AirportRepository;

// Now if we call the Airport.create automatically parent class will be invoked