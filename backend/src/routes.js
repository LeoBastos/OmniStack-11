const express = require('express');
//controlers
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//rotas
const routes = express.Router();

//rotas ONG
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//Rota para buscar uma ong específica
routes.get('/profile', ProfileController.index);

//Rota dos incidentes(casos)
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

//rota login
routes.post('/sessions', SessionController.create);

module.exports = routes;