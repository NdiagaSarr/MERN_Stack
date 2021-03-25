const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { post } = require('./routes/users');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Connexion établi avec la base MongoDB");
})
app.listen(port, () => {
    console.log(`Le serveur est en execution dans le port: ${port}`);
    const usersRouter = require('./routes/users');

    app.use('/users', usersRouter);
});