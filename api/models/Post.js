const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Post = sequelize.define('Post', {
  id: { type: Sequelize.INTEGER },
    title: { type: Sequelize.STRING },
    content: { type: Sequelize.TEXT },
    userId: { type: Sequelize.INTEGER }
});

module.exports = Post;
