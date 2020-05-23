const express = require('express');

const DevController = require('./controllers/DevController');
const DevSearchController = require('./controllers/DevSearchController');
const ChallengeController = require('./controllers/ChallengeController');

const routes = express.Router();

routes.get('/challenges', ChallengeController.index);
routes.post('/challenges', ChallengeController.store);

routes.get('/devsearch', DevSearchController.index);
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

module.exports = routes;