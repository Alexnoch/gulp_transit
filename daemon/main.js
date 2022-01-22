const express = require('express');
const app = express();
const initDB = require('./dataBase/index.js');
const routes = require('./routes/index.js');

initDB();

app.use(express.json());

app.use('/', express.static('./../dist'));
// app.use('/assets/images/', express,static('./../dist'))
app.use('/images/articles/', express.static('./../images/articles'))

app.use('/articles', routes.articles);


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