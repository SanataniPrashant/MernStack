const express = require("express");
const route = express.Router();
const adminController = require("../controller/adminController")


route.post("/adminregistration", adminController.adminRegistration)
route.post("/adminlogin",adminController.adminLogin)


module.exports = route;