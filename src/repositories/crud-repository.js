const { StatusCodes } = require('http-status-codes');
const { Logger } = require('../config');
const AppError = require('../utils/errors/app-error');

class CrudRepository{
    constructor(model)
    {
        this.model = model;
    }
    
    async create(data)
    {
        const response = await this.model.create(data);
        return response;
    }

    async getAll()
    {
        const response = await this.model.findAll();
        return response;
    }

    async get(data)
    {
        const response = await this.model.findByPk(data);
        if(!response)
        {
            throw new AppError("Not able to found the resource",StatusCodes.NOT_FOUND)
        }
        return response;
    }
}
module.exports = CrudRepository;