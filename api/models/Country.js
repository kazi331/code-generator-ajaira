const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Country = sequelize.define('Country', {
  id: { type: Sequelize.INTEGER },
    name: { type: Sequelize.STRING }
});

module.exports = Country;
