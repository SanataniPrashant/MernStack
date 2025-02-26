const authorModel = require("../Models/auyhorModel")
const bookModel = require("../Models/bookModel")

const authorInsert = async(req,res)=>{
    const {name,email,city} = req.body;
        try {
            const authorData = await authorModel.create({
                name,
                email,
                city
            })
            res.status(200).send(authorData);
            console.log(authorData);
        } catch (error) {
            res.status(400).send(error);
        }
}

const authorDisplay =async(req,res)=>{
    try {
        const authorData = await authorModel.find();
        res.status(200).send(authorData);
    }
    catch{
        res.status(400).send(error);
    }
}

const addbook = async(req, res)=>{
    const{id , bookName , bookprice} = req.body;
    const Data =await bookModel.create({
        authorid : id,
        bookName : bookName,
        bookprice : bookprice
    })
    res.send(Data);
    console.log(Data);
}



module.exports = {
authorInsert,
authorDisplay,
addbook
}

