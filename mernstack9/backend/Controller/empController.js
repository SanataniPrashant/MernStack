const empModel= require("../model/empModel");


const empSave=async(req, res)=>{
  const { name, city, empdesignation,empsalary} = req.body; 
  const myimg= req.file.filename;
  
  const emp= await empModel.create({
    name,
    city,
    empdesignation,
    empsalary,
    image:myimg
})
   res.send("OKKK");
}

const empDisplay=async(req, res)=>{
    const emp = await empModel.find();
    res.send(emp);
}

module.exports ={
  empSave,
  empDisplay
    
}