
//Suppose we are creating a flight and if any important details such as flightNumber, airplaneId,departure,arrival,price, etc is missing then
// we can handle it in middlewares


const validateCreateFlight = (req,res,next)=>{
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime || 
        !req.body.departureTime ||
        !req.body.price
    )
    {
        return res.status(400).json({
            data : {},
            success : false,
            message : 'Invalid Request body for create Flight',
            err : 'Missing mandatory properties to create a flight'
        })
    }

    next(); //If everything is okay !
}

module.exports = {validateCreateFlight};