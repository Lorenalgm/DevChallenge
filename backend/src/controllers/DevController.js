const Dev = require('../models/Dev');

module.exports = {
    async indexed(request, response) {
        const devs = await Dev.find();
        
        return response.json(devs);
    },

    async store(request, response){
        const { name, position, bio, linkedin, github, avatar } = req.body;

        const useExist = await Dev.findOne({ github });

        if(userExists) {
            return response.json(userExists);
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