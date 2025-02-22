const express = require("express");
const route= express.Router();
const bookController= require("../controller/bookController");

route.post("/insert",bookController.bookInsert );
route.get("/display", bookController.bookDisplay);
route.post("/search", bookController.bookSearch);
route.get("/bookdelete", bookController.bookDelete);
route.post("/editdatashow", bookController.bookEditShow);
route.post("/editdatasave", bookController.bookEditSave);



module.exports= route;