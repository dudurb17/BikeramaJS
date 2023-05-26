const express = require("express");
const cors = require("cors");
const app = express();

const bcript = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { eAdmin } = require("./middleware/auth");
const db = require("./models/db");

const User = require("./models/user");
const Race = require("./models/race");
const { and, Op } = require("sequelize");

app.use(express.json());
app.use(cors());

app.get("/admin", eAdmin, async (req, res) => {});

app.get("/refresh", async (req, res) => {
  await User.sync({ alter: true });
  await Race.sync({ alter: true });
});

app.post("/signin", async (req, res) => {
  const data = req.body;
  const requestUser = await User.findOne({
    where: { email: data.email },
  });

  if (requestUser === null) {
    return res.status(400).json({
      erro: true,
      mensagem: "Erro: Email ou senha incorreto! - usuario inexistenteaaaaaa",
    });
  }

  if (!(await bcript.compare(data.password, requestUser.password))) {
    return res.status(400).json({
      erro: true,
      mensagem: "Erro: Usuário ou a senha incorreta! - senha incorreta",
    });
  }

  var token = jwt.sign(
    { id: requestUser.id },
    "K1DS5TY72V1MN51AS_LK4PÇ24A5Q82",
    {
      expiresIn: "1d", // 7 dias
      // expiresIn: 300, //30 seg
    }
  );

  return res.json({
    erro: false,
    user: requestUser,
    token: token,
  });
});

app.post("/validate", async (req, res) => {
  const data = req.body;

  try {
    var tokenIsValid = jwt.verify(data.token, "K1DS5TY72V1MN51AS_LK4PÇ24A5Q82");
  } catch (err) {
    console.log(err);
  }

  // const validUser = await User.findByPk(tokenIsValid.id);
  const validUser = await User.findByPk(tokenIsValid.id);

  if (validUser == null) {
    return res.json({
      erro: true,
      mensagem: "Erro: Usuário Inválido",
    });
  }

  delete validUser.dataValues.password;
  console.log(validUser.dataValues);

  return res.status(200).json({
    erro: false,
    user: validUser.dataValues,
  });
});

app.post("/register", async (req, res) => {
  var data = req.body;
  var pass = await bcript.hash(data.password, 8);

  const verifyEmail = await User.findOne({ where: { email: data.email } });

  if (verifyEmail !== null) {
    return res.json({
      erro: true,
      mensagem: "Erro: Usuário já existe!",
    });
  }

  newUser = {
    name: data.name,
    email: data.email,
    password: pass,
    level: "user",
    calories: 0,
  };

  console.log(newUser);
  await User.create(newUser)
    .then(() => {
      return res.json({
        erro: false,
        mensagem: "Usuário cadastrado com sucesso!",
      });
    })
    .catch((erro) => {
      return res.status(400).json({
        erro: true,
        mensagem: erro,
      });
    });
});

app.post("/userByName", async (req, res) => {
  const data = req.body;

  var user = (await User.findOne({ where: { name: data.name } })).dataValues;

  var races = await Race.findAll({
    where: {
      [Op.or]: [{ yellowPlayerId: user.id }, { bluePlayerId: user.id }],
    },
  });

  console.log(races);
  var totalTime = 0;
  var fastestLap = 99999999999999;
  races.forEach((item) => {
    if (item.yellowPlayerId == user.id) {
      totalTime += item.yellowTime;
      if (item.yellowTime < fastestLap) fastestLapId = item.yellowTime;
    } else if (item.bluePlayerId == user.id) {
      totalTime += item.yellowTime;
      if (item.blueTime < fastestLap) fastestLapId = item.blueTime;
    }
  });

  var response = {
    name: user.name,
    calories: user.calories,
    totalLaps: 50,
    totalTime: totalTime,
    fastestLap: fastestLap,
    races: races,
  };

  return res.json({
    erro: false,
    data: response,
  });
});

app.post("/createRace", async (req, res) => {
  const data = req.body;

  var newRace = {
    yellowPlayerId: data.yellowPlayerId,
    yellowTime: data.yellowTime,
    bluePlayerId: data.bluePlayerId,
    blueTime: data.blueTime,
  };

  await Race.create(newRace)
    .then(() => {
      return res.json({
        erro: false,
        mensagem: "corrida cadastrada com sucesso!",
      });
    })
    .catch((erro) => {
      return res.status(400).json({
        erro: true,
        mensagem: erro,
      });
    });
});

app.post("/getAllUsers", async (req, res) => {
  const users = await User.findAll();
  // .then(() => {
  //     console.log("Usuarios resgatados com sucesso!");
  //   })
  //   .catch((erro) => {
  //     return res.status(400).json({
  //       erro: true,
  //       mensagem: erro,
  //     });
  //   });

  return res.json({
    erro: false,
    users: users,
  });
});

app.listen(8080, () => {
  console.log("Servidor Iniciado na porta 8080: http://localhost:8080");
});
