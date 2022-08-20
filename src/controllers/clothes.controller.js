const clothesService = require('../services/clothes.service');
const mongoose = require('mongoose');

const findClothesController = async (req, res) => {
  const allClothes = await clothesService.findClothesService();
  res.send(allClothes);
};

const findClothesByIdController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: 'ID inválido!' });
    return;
  }

  const chosenClothes = await clothesService.findClothesByIdService(idParam);

  if (!chosenClothes) {
    return res.status(404).send({ message: 'Paleta não encontrada!' });
  }

  res.send(chosenClothes);
};

const createClothesController = async (req, res) => {
  const clothes = req.body;

  if (
    !clothes ||
    !clothes.tipo ||
    !clothes.tecido ||
    !clothes.descricao ||
    !clothes.foto ||
    !clothes.preco
  ) {
    return res.status(400).send({
      message:
        'Você não preencheu todos os dados para adicionar uma nova paleta ao cardápio!',
    });
  }

  const newClothes = await clothesService.createClothesService(clothes);

  res.status(201).send(newClothes);
};

const updateClothesController = async (req, res) => {
  const idParam = req.params.id;
  const clothes = req.body;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: 'ID inválido!' });
    return;
  }

  const chosenClothes = await clothesService.findClothesByIdService(idParam);

  if (!chosenClothes) {
    return res.status(404).send({ message: 'Paleta não encontrada!' });
  }

  if (
    !clothes ||
    !clothes.tipo ||
    !clothes.tecido ||
    !clothes.descricao ||
    !clothes.foto ||
    !clothes.preco
  ) {
    return res.status(400).send({
      message: 'Você não preencheu todos os dados para editar a paleta!',
    });
  }

  const updatedClothes = await clothesService.updateClothesService(
    idParam,
    clothes,
  );

  res.send(updatedClothes);
};

const deleteClothesController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: 'ID inválido!' });
    return;
  }

  const chosenClothes = await clothesService.findClothesByIdService(idParam);

  if (!chosenClothes) {
    return res.status(404).send({ message: 'Paleta não encontrada!' });
  }

  await clothesService.deleteClothesService(idParam);

  res.send({ message: 'Paleta deletada com sucesso!' });
};

module.exports = {
  findClothesController,
  findClothesByIdController,
  createClothesController,
  updateClothesController,
  deleteClothesController,
};
