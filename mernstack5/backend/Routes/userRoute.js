const express = require("express");
const route= express.Router();
const userController= require("../Controller/userController");

route.post("/insert",userController.UserInsert );
route.get("/display",userController.UserDisplay);




module.exports= route;