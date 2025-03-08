const express = require('express');
const app = express();
const session = require('express-session')
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieparser = require('cookie-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
mongoose.connect("mongodb://127.0.0.1:27017/dataarjun").then(() => {console.log("Connected to MongoDB");})
.catch(err => {console.log(err);});
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
  }))

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser());

app.get("/setcookie",(req,res)=>{
    res.cookie("name","arjun",{maxAge:60*60*1000});
    res.cookie("age","45",{maxAge:60*60*1000});
    res.cookie("city","rewa",{maxAge:60*60*1000});
    res.send("Cookie set");
})

app.get("/getcookie",(req,res)=>{
    console.log(req.cookies);
    
    res.send(req.cookies);
})

app.get("/deletecookie", (req,res)=>{
    res.clearCookie("name");
    res.clearCookie("age");
    res.clearCookie("city");
    res.send("Cookie deleted");
})


app.get("/setsession",(req,res)=>{
    req.session.myname="bipinsingh";
    req.session.myclass="bsc";
    res.send("Send the  session in valriable")
})


app.get("/getsession",(req,res)=>{
    let{myname,myclass}=req.session
    console.log(req.session)
    console.log(req.session.id)
    console.log(req.sessionID)
    console.log(myname,myclass)
    res.send(req.session)
})

app.listen(8000,()=>{
    console.log('server is running on port 8000');
})


