const Sequelize = require("sequelize");
const db = require("./db");

const User = db.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  turns: {
    type: Sequelize.INTEGER,
    allowNull: 0,
  },
  level: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  calories: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = User;
