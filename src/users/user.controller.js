const createUserController = async (req, res) => {
  res.send({ message: 'create ok' });
};
const finAllUserController = async (req, res) => {
  res.send({ message: 'Find all ok' });
};

module.exports = { createUserController, finAllUserController };
