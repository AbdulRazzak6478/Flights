const { StatusCodes } = require("http-status-codes");

const { FlightService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
/*
    POST : /flights
    req-body {
        flightNumber : 'UK 808'
        airplaneId : a380
        departureAirportId : 12
        arrivalAirportId : 11
        arrivalTime : 11:10:00
        departureTime : 09:10:00
        price : 2000
        boardingGate : 12A
        totalSeats : 120
    }
*/
async function createFlight(req, res) {
  try {
    const flight = await FlightService.createFlight({
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId : req.body.arrivalAirportId,
      arrivalTime : req.body.arrivalTime,
      departureTime : req.body.departureTime,
      price : req.body.price,
      boardingGate : req.body.boardingGate,
      totalSeats : req.body.totalSeats,
    });
    SuccessResponse.data = flight;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/*
    GET : /airports
    req-body {}
*/
async function getAirports(req, res) {
  try {
    const airports = await AirportService.getAirports();
    SuccessResponse.data = airports;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/*
    GET : /airports/:id
    req-body {}
*/
async function getAirport(req, res) {
  try {
    const airport = await AirportService.getAirport(req.params.id);
    SuccessResponse.data = airport;
    console.log("get airport : ",airport);
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/*
    DELETE : /airports/:id
    req-body {}
*/
async function destroyAirport(req,res){
    try {
        const airport = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/*
    PATCH : /airports/:id
    req-body {name : 'IGI', code:'DEL, address:...., cityId : 5}
*/
async function updateAirport(req,res){
    try {
        const updated_airport = await AirportService.updateAirport(req.params.id,{
            name: req.body.name,
            code: req.body.code,
            cityId:req.body.cityId,
            address:req.body.address
          });
        SuccessResponse.data = updated_airport;
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = { 
    createFlight, 
    // getAirports, 
    // getAirport,
    // destroyAirport,
    // updateAirport,
};
