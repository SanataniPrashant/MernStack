const express = require("express")
const route = express.Router()
const controller = require("../controller/userController")

route.post("/savedata" , controller.datasave)
route.get("/getdata" , controller.display)





module.exports = route