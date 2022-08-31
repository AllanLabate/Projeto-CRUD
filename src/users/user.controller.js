const userService = require('./user.service');

const createUserController = async (req, res) => {
  const {name, email, password, avatar} = req.body;

  if (!name || !email || !password || !avatar){
    return res.status(400).send({message: "Porfavor preencha completamente todos os campos solicitados!!",});
  }

  const foundUser = await userService.findByEmailUserService(email)

  if (foundUser) {
    res.status(400).send({message: "Este usuario ja existe em nossos perfis cadastrados!!",})
  }

  const user = await userService.createUserService(req.body).catch((err) => console.log(err.message));

  if (!user){
    return res.status(400).send({message: "Erro ao criar usuario!!",})
  }

  res.status(201).send(user);

};
const finAllUserController = async (req, res) => {
  res.send({ message: 'Find all ok' });
};

module.exports = { createUserController, finAllUserController };
