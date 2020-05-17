const Challenge = require('../models/Challenge');

module.exports = {
    async index(request, response) {
        const challenges = await Challenge.find();

        return response.json(challenges);
    },

    async store(request, response){
        
    }
}