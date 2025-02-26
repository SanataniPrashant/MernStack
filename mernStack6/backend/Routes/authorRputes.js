const express = require("express");
const route = express.Router();
const authorController = require("../Controller/authorController")

route.post("/insert",authorController.authorInsert);
route.get("/display",authorController.authorDisplay);
route.post("/addbook" ,authorController.addbook)

module.exports=route;