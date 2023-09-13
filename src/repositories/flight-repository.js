const CrudRepository = require("./crud-repository");
const { Flight } = require('../models');
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");

class FlightRepository extends CrudRepository {
    constructor()
    {
        super(Flight);
    }
    
    async getAllFlights(filter,sort)
    {
        const response = await this.model.findAll({
            where : filter,
            order:sort
        });
        // return response;
        console.log(response.length);
        
        if(response.length == 0)
        {
            throw new AppError("Not able to found the flight of these filters",StatusCodes.NOT_FOUND)
        }
        return response;
    }
}
 
module.exports = FlightRepository;