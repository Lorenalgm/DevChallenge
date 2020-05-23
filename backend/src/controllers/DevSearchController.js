const Dev = require('../models/Dev');

module.exports = {
    async index(request, response){
        const { dev_id } = request.headers;

        const dev = await Dev.findById(dev_id);

        if(!dev){
            return request.status(400).json({ error: 'Dev not found'});
        }

        return response.json(dev);
    }
}