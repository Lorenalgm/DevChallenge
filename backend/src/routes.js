const express = require('express');

const DevController = require('./controllers/DevController');
const ChallengeController = require('./controllers/ChallengeController');

const routes = express.Router();

routes.get('/challenges', ChallengeController.index);
routes.post('/challenges', ChallengeController.store);

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

module.exports = routes;