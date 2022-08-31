const user = require('./user');

const findByEmailUserService = (email) => user.findOne({email: email});

const createUserService = body => user.create(body);

module.exports = {findByEmailUserService, createUserService};
