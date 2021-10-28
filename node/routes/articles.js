const express = require('express');
const router = express.Router();
const model = require("./../dataBase/models/index.js");

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });
  
  router.get('/', function (req, res) {
    const counts = Number(req.query.count);
    const section = req.query.section;
    const rubric = req.query.rubric;
    res.set("Content-Type", "application/json");
    res.status(200);
    model.Articles
    .find({rubric:rubric})
    .limit(counts)
    .then((article) =>{res.send(JSON.stringify(article))});
  });

  router.get('/one', function (req, res) {
    const idx = Number(req.query.id);
    res.set("Content-Type", "application/json");
    res.status(200);
    model.Articles
    .find({id:idx})
    .then((article) =>{res.send(JSON.stringify(article))});
  });

  router.get('/rubric', function (req, res) {
    const count = Number(req.query.count);
    const rubric = req.query.rubric;
    res.set("Content-Type", "application/json");
    res.status(200);
    model.Articles
    .find({rubric:rubric})
    .limit(count)
    .then((article) =>{res.send(JSON.stringify(article))});
  });
  
  module.exports = router;