const Sequelize = require("sequelize");
const db = require("./db");

const Race = db.define("races", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  yellowPlayerId: {
    type: Sequelize.INTEGER,
    references: {
      model: "users",
      key: "id",
    },
    allowNull: false,
  },
  yellowTime: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  bluePlayerId: {
    type: Sequelize.INTEGER,
    references: {
      model: "users",
      key: "id",
    },
    allowNull: false,
  },
  blueTime: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Race;
