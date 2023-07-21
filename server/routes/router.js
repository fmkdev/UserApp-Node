const express = require('express');
const routes = express.Router();

const controller = require('../controller/controller');

//API
routes.post(`/api/users`, controller.create);
routes.get(`/api/users`, controller.find);
routes.put(`/api/users/:id`, controller.update);
routes.delete(`/api/users/:id`, controller.delete);

module.exports = routes;