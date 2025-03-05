const mongoose = require("mongoose");
const vehicleSchema = new mongoose.Schema({
    name:String,
    model:String,
    price:String,
    color:String,
    features:String,
    adminid: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"admin"
    }
})
module.exports = mongoose.model("vehicles",vehicleSchema);