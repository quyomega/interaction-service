const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './interaction.sqlite',
  logging: false
});

module.exports = { sequelize };
