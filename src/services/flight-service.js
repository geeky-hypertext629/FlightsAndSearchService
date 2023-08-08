const {FlightRepository, AirplaneRepository } = require('../repository/index');
const {compareTime} = require('../utils/helper')

class FlightService{
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data){
        try {
            // const airplaneRepository = new AirplaneRepository();
            if(!compareTime(data.arrivalTime,data.departureTime))
            {
                throw {error:'Arrival Time cannot be less than departure time'}
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            // return airplane;
            // console.log(airplane.capacity);
            const flight = await this.flightRepository.createFlight({...data,totalSeats:airplane.capacity});
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            return {error};
        }
    }
}


module.exports = FlightService;
/*
    
*/