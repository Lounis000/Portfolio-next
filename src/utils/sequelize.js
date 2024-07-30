const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'database.sqlite') // Remplacez par le chemin vers votre base de données SQLite
});

module.exports = sequelize;
