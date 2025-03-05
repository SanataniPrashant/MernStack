const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
    name:String,
    sname:String,
    cname:String,
    brand:String,
    email:String,
    password:String,
    vehicleid: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"vehicles"
    }
})
module.exports = mongoose.model("admin",adminSchema);