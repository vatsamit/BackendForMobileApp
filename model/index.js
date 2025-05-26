const Sequelize = require('sequelize');
const sequelize = require('../config/dbConfig');
const User = require('./userModel')(sequelize, Sequelize);

module.exports = {
  sequelize,
  User,
};
