const userRoute = require('express').Router();
const userController = require('./user.controller');

userRoute.post('/', userController.createUserController);
userRoute.get('/', userController.finAllUserController);

module.exports = userRoute;
