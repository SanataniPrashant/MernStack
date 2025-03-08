
const userModel = require("../model/userModel");
const UserModel= require("../model/userModel");


const userSave=async(req, res)=>{
  const imageUrls = req.files.map(file => file.path);
  const {name, brand, price} = req.body;
  const defaultImage= imageUrls[0];
   const Product= await UserModel.create({
    name:name,
    brand:brand,
    price: price,
    defaultImage:defaultImage,
    images:imageUrls
   })
   res.send("Product Save!!!");
}

const userDisplay=async(req, res)=>{
    const User = await UserModel.find();
    res.send(User);
}


const Showdata = async(req,res)=>{
  const {id} = req.body;
  console.log(id)
  const response = await UserModel.findById(id)
  console.log(response)
  res.send(response)
}
module.exports ={
  userSave,
  userDisplay,
  Showdata
    
}