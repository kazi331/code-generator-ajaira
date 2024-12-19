const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Comment = sequelize.define('Comment', {
  id: { type: Sequelize.INTEGER },
    content: { type: Sequelize.TEXT },
    userId: { type: Sequelize.INTEGER },
    postId: { type: Sequelize.INTEGER }
});

module.exports = Comment;
