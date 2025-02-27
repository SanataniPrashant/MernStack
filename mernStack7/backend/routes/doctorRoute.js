const express = require("express");
const route = express.Router();
const doctorController = require("../controllers/doctorControllers");

route.post("/registration", doctorController.doctorRegistration);
route.get("/homedoctorsdisplay", doctorController.doctorHomeDisplay);
route.post("/doctorlogin", doctorController.doctorLogin);
route.post("/searchdoctor", doctorController.doctorSearch);
route.get("/patientlist", doctorController.patientlist);

module.exports = route;