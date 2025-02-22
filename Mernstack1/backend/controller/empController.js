
const empModel = require("../models/empModel")

const dataSave = async (req,res)=>{
    const {empno,name,designation, salary} = req.body;
    const empData = await empModel.create({
        empno:empno,
        name:name,
        designation:designation,
        salary:salary
    })
    res.json(empData);
    console.log(empData);

}

const displayPage=async(req,res)=>{
    const data=await empModel.find()
    res.send(data)
}




module.exports={
    dataSave,
    displayPage,
    

}