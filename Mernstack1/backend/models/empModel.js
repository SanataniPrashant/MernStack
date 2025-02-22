const mongoose= require("mongoose");

const EmpSchema=new mongoose.Schema({
    empno:Number,
    name:String,
    designation:String,
    salary:Number
})

module.exports= mongoose.model("rcords", EmpSchema);