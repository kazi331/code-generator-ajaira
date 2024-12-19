const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: { type: Sequelize.INTEGER },
    name: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING }
});

module.exports = User;
