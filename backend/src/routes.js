const { Router } = require('express');

const routes = Router();

routes.post('/challenges', (request, response) => {
    console.log(request.body);
    return response.json({message: 'Hi, Lorena'});
});

module.exports = routes;