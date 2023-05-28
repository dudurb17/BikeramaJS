const Sequelize = require("sequelize");

const sequelize = new Sequelize("LoginSystem", "root", "l19UcaS2_TxL", {
  host: process.env.HOST,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
  })
  .catch((e) => {
    console.log("Erro: " + e);
  });

module.exports = sequelize;
