const empModel= require("../Models/empModel");


const empInsert=async(req, res)=>{
    const { empno, name, department, city, salary }= req.body;
      await empModel.create({
        empno:empno,
        name:name,
        department:department,
        city:city,
        salary:salary
      })
      res.send("Data Succesfulllly Saveeee!");
}

const empDisplay=async(req, res)=>{
     const empData = await  empModel.find();
     res.send(empData);
}


const empSearch=async(req, res)=>{
        const { empno} = req.body;
        const Data= await empModel.find({empno:empno});
        res.send(Data);

}


const empSalary = async (req, res) => {
    const empData = await  empModel.find();
    res.send(empData);
}

const empDelete=async(req, res)=>{
  const { empid} = req.query;
    await empModel.findByIdAndDelete(empid);
    res.send("Data deleted sucessfully!!!");
}

const empEditShow=async(req, res)=>{
  const { empid }= req.body;
   const Data = await empModel.findById(empid);
   res.send(Data);
}


const empEditSave=async(req, res)=>{
  const {_id } =req.body;
  await empModel.findByIdAndUpdate(_id, req.body);
  res.send("Data succesfully updated!!!");
}
module.exports={
       empInsert,
       empDisplay,
       empSearch,
       empSalary,
       empDelete,
       empEditShow,
       empEditSave
}