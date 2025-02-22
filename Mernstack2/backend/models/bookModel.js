const mongoose = require("mongoose");

const bookSchema= new mongoose.Schema({
    bookno:String,
    name:String,
    description:String,
    Author:String
})

module.exports = mongoose.model("record", bookSchema);