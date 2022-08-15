const route = require('express').Router();
const controllerClothes = require(`../controllers/clothes.controller`);

route.get(`/all-clothes`, controllerClothes.findClothesController);
route.get(`/:id`, controllerClothes.findClothesByIdController);

route.post(`/create`, controllerClothes.createClothesController);

route.put(`/update/:id`, controllerClothes.updateClothesController);

route.delete(`/delete/:id`, controllerClothes.deleteClothesController);

module.exports = route;
