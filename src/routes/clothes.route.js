const route = require('express').Router();
const controllerClothes = require(`../controllers/clothes.controller`);
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

route.use('/api-docs', swaggerUI.serve);
route.get('/api-docs', swaggerUI.setup(swaggerDocument));

route.get(`/all-clothes`, controllerClothes.findClothesController);
route.get(`/:id`, controllerClothes.findClothesByIdController);

route.post(`/create`, controllerClothes.createClothesController);

route.put(`/update/:id`, controllerClothes.updateClothesController);

route.delete(`/delete/:id`, controllerClothes.deleteClothesController);

module.exports = route;
