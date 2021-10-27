const mongoose = require("mongoose");

const articles = new mongoose.Schema({
    id:{
       type:Number,
       required:true,
    },
    date:{
       type:String,
       required:true,
    },
    title:{
        type:String,
        required:true,
    },
    text:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    section:{
        type:String,
        required:true,
    },
    rubric:{
        type:String,
        required:true,
    }
  });
  
  module.exports = mongoose.model('articles', articles);