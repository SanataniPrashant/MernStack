

const adminModel = require("../models/adminModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const adminRegistration = async(req,res)=>{
    const {name,sname,cname,brand,email,password} = req.body;
    try {
         const salt = await bcrypt.genSalt(10); 
         const hashPassword = await bcrypt.hash(password, salt);
        const admin = await adminModel.create({
            name:name,
            sname:sname,
            cname:cname,
            brand:brand,
            email:email,
            password:hashPassword
        })
        console.log(admin)
        res.status(200).send({msg:"Admin Succesfully Registered!"});
    } catch (error) {
        res.status(400).send({msg:"Data base not Work"})
    }

}

const adminLogin = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    try {
        const admin = await adminModel.findOne({ email: email });
        console.log(admin);
        if (!admin) {
            return res.status(400).send({ msg: "Admin Not Found!" });
        }
        const passwordMatch = await bcrypt.compare(password, admin.password);
        console.log(passwordMatch);
        if (!passwordMatch) {
            return res.status(400).send({ msg: "Invalid Credentials!" });
        }
        const token = await jwt.sign({ id: admin._id }, process.env.SECRETE_KEY, { expiresIn: '7 days' });
        console.log(token);
        res.send({ token: token });
    } catch (error) {
        console.log(error);
    }
}

const adminAuthenticate=async(req, res)=>{
    const token = req.header("x-auth-token");
    console.log(token);
    try {
    const verify= await jwt.verify(token, process.env.SECRETE_KEY);
    console.log(verify);
    const admin= await adminModel.findById(verify.id).select("-password");
    
    res.status(200).send(admin);
    } catch (error) {
        res.status(400).send(error);
    }
}






module.exports  ={
    adminRegistration,
    adminLogin,
    adminAuthenticate

}