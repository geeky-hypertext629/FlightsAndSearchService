const { Airplane } = require('../models/index');

class AirplaneRepository{
    async getAirplane(id){
        try {
            const airplane = await Airplane.findByPk(id);
            // console.log(airplane.capacity);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in the airplane repository layer");
            return {error};
        }
    }
}

module.exports = AirplaneRepository;