const fs = require('fs');
const path = require('path')
var express = require('express');
const mongoose = require('mongoose')
var app = express();

const data = require('./articles-data.js');

mongoose.connect('mongodb+srv://alexnoch135:44335522@cluster0.brals.mongodb.net/apiblog?retryWrites=true&w=majority',{useNewUrlParser:true})
.then(()=>{console.log('DB CONNECTED!!!')})
.catch((err)=>{console.log(err,'DB IS NOT CONNECTED')})


const UsersSchema = new mongoose.Schema({
   name:{
      type:String,
      required:true,
   },
   email:{
      type:String,
      required:true
   }
})


const Users = mongoose.model('users', UsersSchema);
Users.find({name: "Alexnoch"}).then((user)=>{console.log(user)})


const sendAdmin  = (res) =>{
   console.log('Зашёл в функцию 3')
   res.set("Content-Type","text/html");
   res.set("Access-Control-Allow-Origin","*" )
   res.set("Access-Control-Allow-Methods","GET, OPTIONS" )
   res.set("Access-Control-Allow-Headers","Content-Type" )
   res.status(200);
   res.sendFile(path.join(__dirname,"admin.html"))
}

   app.get('/', function(req, res){
    res.type('text/plain');
    res.send('Meadowlark Travel');
   });

   app.get('/articles', function(req, res){
    res.set("Content-Type","application/json");
    res.set("Access-Control-Allow-Origin","*" )
    res.set("Access-Control-Allow-Methods","GET, OPTIONS" )
    res.set("Access-Control-Allow-Headers","Content-Type" )
    res.type('text/plain');
    res.status(200);
    res.send(JSON.stringify(data));
   });

   app.get('/admin', (req,res)=>{
      console.log(req.query)
      const login = req.query;
      if(login.alexnoch === 'articles'){
         // res.send(JSON.stringify({status:"OK"})) 
         console.log('Авторизировался')
        sendAdmin(res);
      }else{
         res.send(JSON.stringify({status:"FALSE"}))
      }
   })

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