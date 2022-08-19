require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/clothes.route');
const connectToDatabase = require('./src/database/database');

const port = process.env.PORT || 3000;
const app = express();

connectToDatabase();

app.use(cors());
app.use(cors());
app.use(express.json());
app.use('/clothes', routes);
app.get('/', (req, res) => {
  res.send({ message: 'Hello, world!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
