const jwt = require("jsonwebtoken");
const { promisify } = require("util");

module.exports = {
  eAdmin: async function (req, res, next) {
    const authHeader = req.headers.authorization;
    // console.log(authHeader);
    if (!authHeader) {
      return res.status(400).json({
        erro: true,
        mensagem: "Erro: Necessário realizar o login para acessar a página!",
      });
    }
    const [, token] = authHeader.split(" ");
    console.log(token);

    if (!token) {
      return res.status(400).json({
        erro: true,
        mensagem: "Erro: Necessário realizar o login para acessar a página",
      });
    }

    try {
      const decode = await promisify(jwt.verify)(
        token,
        "K1DS5TY72V1MN51AS_LK4PÇ24A5Q82"
      );
      req.userId = decode.id;
      return next();
    } catch {
      return res.status(400).json({
        erro: true,
        mensagem:
          "Erro: Necessário realizar o login para acessar a página! Token inválido",
      });
    }
  },
};
