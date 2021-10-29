const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const fs = require("fs");
const path = require("path");
const model = require("./../dataBase/models/index.js");

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function (req, res) {
  const welcome = req.query.welcome;
  const sparrow = req.query.sparrow;
  res.status(200);
  if (welcome === 'atlas' && sparrow === 'compas') {
    res.set("Content-Type", "text/html");
    const pathName = path.resolve('./node/../template', 'index.html');
    fs.createReadStream(pathName).pipe(res);
  } else {
    res.set("Content-Type", "text/html");
    res.send('Buy');
  }
});

router.get('/newArticle', function (req, res) {
  res.set("Content-Type", "text/html");
  res.status(200);
  res.send('OK');
  model.Articles.create(
    {
      id: Number(req.query.id),
      date: req.query.date,
      title: req.query.title,
      text: req.query.text,
      image: req.query.image,
      section: req.query.section,
      rubric: req.query.rubric,
    }
  )
});

module.exports = router;