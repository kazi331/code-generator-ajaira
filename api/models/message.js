const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const message = sequelize.define('message', {
  id: { type: Sequelize.INTEGER },
    content: { type: Sequelize.TEXT },
    userId: { type: Sequelize.INTEGER },
    receiverId: { type: Sequelize.INTEGER }
});

module.exports = message;
