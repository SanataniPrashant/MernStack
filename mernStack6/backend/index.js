const express = require ("express")
const app = express()
const cors = require ("cors");
const bodyparser = require("body-parser");

const mongoose = require ("mongoose");
const authorRoute = require("./Routes/authorRputes");
app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/author",authorRoute);
mongoose.connect("mongodb://127.0.0.1:27017/Author").then(
    () => console.log("Connected to MongoDB")
)

app.listen(8000,()=>{
    console.log("server is running on 8000")
});