// const { StatusCodes } = require('http-status-codes');
const { AirplaneRepository } = require('../repositories');
// const AppError = require('../utils/errors/app-error');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data)
{
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        // let explanation = [];
        // if(error.name == 'TypeError')
        // {
        //     console.log("inside error ",error);
        //     throw new AppError('Cannot create a new airplane object',StatusCodes.INTERNAL_SERVER_ERROR)
        // }
        // if(error.name == 'SequelizeValidationError')
        // {
        //     error.errors.forEach(err => {
        //         explanation.push(err.message)
        //     });
        //     console.log("inside error ",explanation);
        //     throw new AppError(explanation,StatusCodes.BAD_REQUEST)
        // }
        // console.log("inside create",error); 
        throw error;
    }
}

module.exports = {
    createAirplane
}