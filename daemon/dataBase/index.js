const mongoose = require('mongoose');

// const initDataBase = mongoose.connect('mongodb+srv://alexnoch135:44335522@cluster0.brals.mongodb.net/apiblog?retryWrites=true&w=majority',{useNewUrlParser:true})
// .then(()=>{console.log('Успешное подключение к базе данных')})
// .catch((err)=>{console.log(err,'ВНИМАНИЕ СБОЙ ПОДКЛЮЧЕНИЯ!!!')})


const initDataBase = async () => {
  await mongoose.connect(
    'mongodb+srv://alexnoch135:44335522@cluster0.brals.mongodb.net/apiblog?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err) => {
      if (err) {
        console.log(err);
        process.exit(ExitCode.error);
      }
      console.log("Успешное подключение to DB");
    }
  );
};





module.exports = initDataBase;