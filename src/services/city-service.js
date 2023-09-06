const { StatusCodes } = require('http-status-codes');
const { CityRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const cityRepository = new CityRepository()

async function createCity(data)
{
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        let explanation = [];
        console.log("city service error ,",error);
        if(error.name == 'TypeError')
        {
            console.log("inside error ",error);
            throw new AppError('Cannot create a new city',StatusCodes.INTERNAL_SERVER_ERROR)
        }
        if(error.name == 'SequelizeValidationError' || error.name == "SequelizeUniqueConstraintError")
        {
            error.errors.forEach(err => {
                explanation.push(err.message)
            });
            console.log("inside error ",explanation);
            throw new AppError(explanation,StatusCodes.BAD_REQUEST)
        } 
        throw new AppError('Cannot create a new city object',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    createCity,
}