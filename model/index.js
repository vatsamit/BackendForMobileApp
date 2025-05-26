const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Needed for Render SSL
    },
  },
});

// ✅ Import model definitions
const User = require('./userModel')(sequelize); // make sure User.js exports a function

// ✅ Export models and sequelize
module.exports = {
  sequelize,
  User,
};
