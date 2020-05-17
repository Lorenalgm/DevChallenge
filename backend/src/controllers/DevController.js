const Dev = require('../models/Dev');

module.exports = {
    async index(request, response) {
        const devs = await Dev.find();
        
        return response.json(devs);
    },

    async store(request, response){
        const { name, position, bio, linkedin, github, avatar } = request.body;

        const useExist = await Dev.findOne({ github });

        if(useExist) {
            return response.json(useExist);
        }

        const dev = await Dev.create({
            name,
            position,
            bio,
            linkedin,
            github,
            avatar,
        });

        return response.json(dev);
    }
}