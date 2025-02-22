const express = require("express");

const EmpController = require("../controller/empController")
const router = express.Router();

router.post("/insert",EmpController.dataSave);
router.get("/display",EmpController.displayPage)




module.exports= router;