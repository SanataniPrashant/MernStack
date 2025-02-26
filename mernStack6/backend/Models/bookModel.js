const mongoose = require("mongoose");

const boockSchema = new mongoose.Schema({
    bookName:String,
    bookprice:String,
    authorid: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"authordata"
    }
})

module.exports = mongoose.model("bookdata", boockSchema);