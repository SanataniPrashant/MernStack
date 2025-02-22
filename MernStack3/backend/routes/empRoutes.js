const express = require("express");
const route= express.Router();
const empController= require("../Controller/empController")

route.post("/insert",empController.empInsert );
route.get("/display", empController.empDisplay);
route.post("/search", empController.empSearch);
route.get("/salarysummary", empController.empSalary);
route.get("/empdelete", empController.empDelete);
route.post("/editdatashow", empController.empEditShow);
route.post("/editdatasave", empController.empEditSave);



module.exports= route;