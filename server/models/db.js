const Sequelize = require("sequelize");

const sequelize = new Sequelize("bikerama", "bikerama", "Bikerama@1234", {
  host: "bikerama.mysql.dbaas.com.br",
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
