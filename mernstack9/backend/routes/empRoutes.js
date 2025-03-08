
const express = require("express");
const multer = require("multer");
const route = express.Router();
const empController= require("../Controller/empController");

const storage=  multer.diskStorage({
       destination: (req, file, cb)=>{
        cb(null, 'uploads/'); // Save files to uploads directory
       },      
       filename:(req, file, cb)=>{
        cb(null, Date.now()+"-"+file.originalname); // Keep original file name
       }  
})

const upload = multer({ storage: storage });



//upload.array
route.post("/datasave", upload.single('image'), empController.empSave);
route.get("/datadisplay" , empController.empDisplay)

module.exports = route;