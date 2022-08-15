const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/code-wear', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB CONNECT!'))
    .catch((error) =>
      console.log('Erro ao conectar com MongoDB!!, erro: ${error}'),
    );
};

module.exports = connectToDatabase;
