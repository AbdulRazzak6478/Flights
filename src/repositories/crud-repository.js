const { Logger } = require('../config')

class CrudRepository{
    constructor(model)
    {
        this.model = model;
    }
    
    async create(data)
    {
        try 
        {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            Logger.error("something went wrong in crud repo : create");
            throw error;
        }
    }
}
module.exports = CrudRepository;