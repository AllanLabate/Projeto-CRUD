const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb+srv://admin:admin@projeto-crud.jlsh9ci.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB CONNECT!'))
    .catch((error) =>
      console.log('Erro ao conectar com MongoDB!!, erro: ${error}'),
    );
};

module.exports = connectToDatabase;
