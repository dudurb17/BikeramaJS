const Sequelize = require("sequelize");

const sequelize = new Sequelize("LoginSystem", "root", "l19UcaS2_TxL", {
  host: "127.0.0.1",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
  })
  .catch(() => {
    console.log("Erro na conexão com o banco de dados!");
  });

module.exports = sequelize;
