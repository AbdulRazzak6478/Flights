const { StatusCodes } = require('http-status-codes');
const { FlightRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const flightRepository = new FlightRepository();

async function createFlight(data)
{
    try {
        const flight = await flightRepository.create(data);
        console.log("service data ",flight);
        return flight;
    } catch (error) {
        let explanation = [];
        console.log('flight service error ,',error);
        if(error.name == 'TypeError')
        {
            console.log("inside error ",error);
            throw new AppError('Cannot create a new flight object',StatusCodes.INTERNAL_SERVER_ERROR)
        }
        if(error.name == 'SequelizeValidationError')
        {
            error.errors.forEach(err => {
                explanation.push(err.message)
            });
            console.log("inside error ",explanation);
            throw new AppError(explanation,StatusCodes.BAD_REQUEST)
        } 
        throw new AppError('Cannot create a new Flight object',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirports()
{
    try {
        const airports = await airportRepository.getAll();
        return airports;
    } catch (error) {
        throw new AppError('Cannot fetch data of all Airports',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirport(id)
{
    try {
        const airport = await airportRepository.get(id);
        return airport;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND)
        {
            throw new AppError("The airport you requested is not found",error.statusCode);
        }
        throw new AppError('Cannot fetch data of Airport',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function destroyAirport(id)
{
    try {
        const response = await airportRepository.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND)
        {
            throw new AppError("The airplane you requested to Delete is not found",error.statusCode);
        }
        throw new AppError('Cannot destroy the Airport',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function updateAirport(id,data)
{
    try {
        const updated_airport = await airportRepository.update(id,data);
        return updated_airport;
    } catch (error) {
        let explanation = [];
        if(error.name == 'TypeError')
        {
            throw new AppError('Cannot Update a new Airport Object',StatusCodes.INTERNAL_SERVER_ERROR)
        }
        if(error.name == 'SequelizeValidationError')
        {
            error.errors.forEach(err => {
                explanation.push(err.message)
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST)
        } 
        throw new AppError('Cannot Update data of Airport',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
module.exports = {
    createFlight,
    // getAirports,
    // getAirport,
    // destroyAirport,
    // updateAirport,
}