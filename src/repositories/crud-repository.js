const { Logger } = require('../config')

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
}
module.exports = CrudRepository;