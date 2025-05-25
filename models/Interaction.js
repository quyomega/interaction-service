const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Like = sequelize.define('Like', {
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  post_id: { type: DataTypes.INTEGER, allowNull: false },
}, {
  indexes: [{ unique: true, fields: ['user_id', 'post_id'] }]
});

const Comment = sequelize.define('Comment', {
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  post_id: { type: DataTypes.INTEGER, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  parent_id: { type: DataTypes.INTEGER, allowNull: true },
});

const Share = sequelize.define('Share', {
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  post_id: { type: DataTypes.INTEGER, allowNull: false },
  message: { type: DataTypes.TEXT },
});

module.exports = { Like, Comment, Share };
