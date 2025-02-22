const express= require("express");
const mongoose= require("mongoose");
const app= express();
const cors= require("cors");
const bodyParser = require('body-parser');
const userRoute= require("./Routes/userRoute");

mongoose.connect("mongodb://127.0.0.1:27017/Users").then(()=>{
    console.log("DB connected!!!")
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use("/user", userRoute);




app.listen(8000, ()=>{
    console.log("server run on 8000!");
})