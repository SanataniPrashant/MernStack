const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const userRoute = require("./routes/userRoute")
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

mongoose.connect("mongodb://127.0.0.1:27017/dataaaa").then(()=>{
    console.log("DB Connected")
})
app.use("/user" , userRoute)

app.listen(8000 , ()=>{
    console.log("listening at the port of 8000")
})