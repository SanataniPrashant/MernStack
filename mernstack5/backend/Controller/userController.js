
const userModel = require("../Models/userModel")
const ProfileModel = require("../Models/ProfileModel")


const UserInsert = async(req,res)=>{
    try {
        const {username, email, fname , lname} = req.body;
        const user = await userModel.create({
            username,
            email});
        const profile  = await ProfileModel.create({
            fname,
            lname,
            userid: user._id
           
        }) 
        res.status(201).send({message: "created successfully"});
    } catch (error) {
        res.status(400).send({message: "error"});
    }
    
}

const UserDisplay = async(req,res)=>{
    try {
        const data =await ProfileModel.find().populate("userid");
        res.send(data);
    } catch (error) {
        res.status(400).send({message: "error"});
    }
}

module.exports = {
    UserInsert,
    UserDisplay
}