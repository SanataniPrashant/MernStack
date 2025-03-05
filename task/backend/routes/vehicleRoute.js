const express = require("express");
const route = express.Router();
const vehicleController = require("../controller/vehicleController")


route.post("/addvehicle", vehicleController.Addvehicle)

module.exports = route;