

const adminModel = require("../models/adminModel")


const adminRegistration = async(req,res)=>{
    const {name,sname,cname,brand,email,password} = req.body;
    try {
        const admin = await adminModel.create({
            name:name,
            sname:sname,
            cname:cname,
            brand:brand,
            email:email,
            password:password
        })
        res.status(200).send({msg:"Admin Succesfully Registered!"});
    } catch (error) {
        res.status(400).send({msg:"Data base not Work"})
    }

}

const adminLogin =()=>{
    const {email,password} = req.body;
    console.log(req.body);
    res.send("Login Page");

}






module.exports  ={
    adminRegistration,
    adminLogin

}