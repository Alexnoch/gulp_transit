const fs = require('fs');
const path = require('path');
const cors = require('cors');

var express = require('express');
var app = express();

const mongoose = require('mongoose');
const initDataBase = require('./dataBase/index.js');

const users = require('./routes/user.js');
const articles = require('./routes/articles.js');
const admin = require('./routes/admin.js');

initDataBase();

app.use(cors());

app.use(express.static('./../dist'));
app.use('/user', users);
app.use('/articles', articles);
app.use('/admin', admin);

// пользовательская страница 404
   app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 — Не найдено');
   });
   // пользовательская страница 500
   app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 — Ошибка сервера');
   });

   app.set('port', process.env.PORT || 3005);
   app.listen(app.get('port'), function(){
    console.log( 'Express запущен на http://localhost:' +
    app.get('port') + '; нажмите Ctrl+C для завершения.' );
   });
   




























// УСТАНОВКА КУК из книги ---------------------------
// app.use(require('cookie-parser')(credentials.cookieSecret));

      // var monster = req.cookies.monster;
      // app.use(require('express-session')({
      //    resave: false,
      //    saveUninitialized: false,
      //    secret: credentials.cookieSecret,
      //   }));
   
      // req.session.userName = 'Anonymous';
      // var colorScheme = req.session.colorScheme || 'dark';
   //  res.cookie('monster', 'nom nom');

   // Чтение файла 
    // const result  = fs.readFileSync('admin.html', (err, data) => {
   // if (err) {
   //   return console.log('ОШИБКА')
   // }else{
   //    console.log('Зашёло в условие')
   //  return data.toString();
   // }})




   // Старая версия 

//    mongoose.connect('mongodb+srv://alexnoch135:44335522@cluster0.brals.mongodb.net/apiblog?retryWrites=true&w=majority',{useNewUrlParser:true})
// .then(()=>{console.log('DB CONNECTED!!!')})
// .catch((err)=>{console.log(err,'DB IS NOT CONNECTED')})


// const UsersSchema = new mongoose.Schema({
//    name:{
//       type:String,
//       required:true,
//    },
//    email:{
//       type:String,
//       required:true
//    }
// })

// const Users = mongoose.model('users', UsersSchema);
// console.log(typeof Users,'Юзеры')

// Users.find({name: "Alexnoch"}).then((user)=>{console.log(user)})






// Рабочий вариант 2 

// const model = require("./dataBase/models/index.js")

// const data = require('./articles-data.js');

// console.log(typeof model)
// initDataBase();

// model.Users.findOne({name: "Alexnoch"}).then((user)=>{console.log(user)})

