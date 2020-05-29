const Newsletter = require('../models/Newsletter');

module.exports = {
    async index(request, response) {
        const newsletter = await Newsletter.find();

        return response.json(newsletter);
    },

    async store(request, response){
        const { email } = request.body;

        const newsletter = await Newsletter.create({
            email, 
        });

        return response.json(newsletter);
    }
}