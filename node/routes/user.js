const express = require('express');
const router = express.Router();
const model = require("./../dataBase/models/index.js")


router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function (req, res) {
  console.log('Найден маршрут ЮЗЕР')
  res.type('text/plain');
  res.send('Meadowlark Travel');
});

router.get('/one', function (req, res) {
  
  res.set("Content-Type", "application/json");
  res.set("Access-Control-Allow-Origin", "*")
  res.set("Access-Control-Allow-Methods", "GET, OPTIONS")
  res.set("Access-Control-Allow-Headers", "Content-Type")
  res.type('text/plain');
  res.status(200);
  model.Users.findOne({ name: "Alexnoch" }).then((user) => { res.send(JSON.stringify(user)) })
});

module.exports = router;