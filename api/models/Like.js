const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Like = sequelize.define('Like', {
  id: { type: Sequelize.INTEGER },
    userId: { type: Sequelize.INTEGER },
    postId: { type: Sequelize.INTEGER }
});

module.exports = Like;
