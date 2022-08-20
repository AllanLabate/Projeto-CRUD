const Clothes = require('../models/Clothes');

const findClothesService = async () => {
  const clothes = await Clothes.find();
  return clothes;
};

const findClothesByIdService = async (id) => {
  const clothes = await Clothes.findById(id);
  return clothes;
};

const createClothesService = async (newClothes) => {
  const clothesCreated = await Clothes.create(newClothes);
  return clothesCreated;
};

const updateClothesService = async (id, updatedClothes) => {
  const clothesUpdated = await Clothes.findByIdAndUpdate(id, updatedClothes);
  return clothesUpdated;
};

const deleteClothesService = async (id) => {
  return await Clothes.findByIdAndDelete(id);
};

module.exports = {
  findClothesService,
  findClothesByIdService,
  createClothesService,
  updateClothesService,
  deleteClothesService,
};
