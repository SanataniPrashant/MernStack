const mongoose = require("mongoose");

const empSchema= new mongoose.Schema({
    empno:String,
    name:String,
    department:String,
    city:String,
    salary:Number
})

module.exports = mongoose.model("records", empSchema);