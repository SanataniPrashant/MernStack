const express = require("express");
const app = express();

const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

mongoose.connect(process.env.DB).then(()=>{
    console.log("Connected to atlas MongoDB database");
})
.catch((error)=>{
    console.log(error);
})
const adminRoute = require("./routes/adminRoute")
app.use(cors());
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/admin", adminRoute);


const Port=process.env.PORT || 8000;
app.listen(Port, ()=>{
    console.log(`Server is running on port ${Port} `);
})