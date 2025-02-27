const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
    name:String,
    sname:String,
    cname:String,
    brand:String,
    email:String,
    password:String,
})
module.exports = mongoose.model("admin",adminSchema);