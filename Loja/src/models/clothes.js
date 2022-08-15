const mongooose = require('mongoose');

const ClothesSchema = new mongooose.Schema({
  tipo: { type: String, required: true },
  tecido: { type: String, required: true },
  descricao: { type: String, required: true },
  foto: { type: String, required: true },
  preco: { type: Number, required: true },
});

const Clothes = mongooose.model('clothes', ClothesSchema);

module.exports = Clothes;
