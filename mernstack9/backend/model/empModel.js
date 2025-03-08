const mongoose = require("mongoose");
const empSchema= new mongoose.Schema({ 
     name:String,
     city:String,
     empdesignation: String,
     empsalary: String,
     image:String
})

module.exports = mongoose.model("employee", empSchema);