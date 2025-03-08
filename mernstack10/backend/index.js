const express= require("express");
const app=express();
const cors= require("cors");
const bodyParser = require('body-parser');
const mongoose= require("mongoose");
const userRoute= require("./routes/userRoute");

app.use(cors());
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/uploads', express.static('uploads'))

mongoose.connect("mongodb://127.0.0.1:27017/multipleimage").then(()=>{
    console.log("DB connected!!!");
})



app.use("/user", userRoute);




app.listen(8000, ()=>{
    console.log("server run on  port 8000");
})