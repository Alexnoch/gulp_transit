const mongoose = require("mongoose");

const articles = new mongoose.Schema({
   
    date:{
       type:String,
       required:true,
    },
    title:{
        type:String,
        required:true,
    },
    desc:{
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