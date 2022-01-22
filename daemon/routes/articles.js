const express = require('express');
const router = express.Router();
const model = require("./../dataBase/models/index.js");

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });
 
  router.post('/', function (req, res) {
    console.log(req,'Зашло ------------------------------------');
    async function testing(){
      try{
        const counts = Number(req?.body?.count);
        const section = req?.body?.section;
        const rubric = req?.body?.rubric;
        const result = await model.Articles.find({rubric:rubric}).limit(counts);
        console.log(req,'Зашло')
        console.log(req?.body,'бАДИ******************************************')
        res.set("Content-Type", "application/json");
        res.status(200);
        res.send(JSON.stringify(result))
      }catch{
        console.log(req,'РЕГ')
        console.log(req?.body,'бАДИ******************************************')
        res.send(JSON.stringify({status:false}))
      }
    }
    testing();
  });

  router.get('/one', function (req, res) {
    console.log(req.query,'СТРОКА')
    const idx = req.query._id
    res.set("Content-Type", "application/json");
    res.status(200);
    model.Articles
    .find({_id:idx})
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