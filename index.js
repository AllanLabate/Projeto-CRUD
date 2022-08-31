require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/clothes.route');
const connectToDatabase = require('./src/database/database');
const userRoute = require("./src/users/user.route");

const port = process.env.PORT || 3000;
const app = express();

connectToDatabase();
app.use(cors());
app.use(express.json());


app.use("/users", userRoute);
app.use('/clothes', routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
