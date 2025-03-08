const express= require("express");
const app=express();
const cors= require("cors");
const bodyParser = require('body-parser');
const mongoose= require("mongoose");
const empRoute= require("./routes/empRoutes");

app.use(cors());
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'))
mongoose.connect("mongodb://127.0.0.1:27017/imagedata").then(()=>{
    console.log("DB connected!!!");
})



app.use("/emp", empRoute);





app.listen(8000, ()=>{
    console.log("server run on  port 8000");
})