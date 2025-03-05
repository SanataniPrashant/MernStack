
const vehicleModel = require("../models/vehicleModel")



const Addvehicle = async(req,res)=>{
    const {name,model,price,color,features} = req.body;
    try {
        const vehicle = await vehicleModel.create({
            name:name,
            model:model,
            price:price,
            color:color,
            features:features
        })
        console.log(vehicle)
        res.status(200).send({msg:"vehicle Succesfully Registered!"});
    } catch (error) {
        res.status(400).send({msg:"Data base not Work"})
    }

}






module.exports  ={
   Addvehicle

}