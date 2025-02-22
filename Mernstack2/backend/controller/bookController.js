const bookModel= require("../models/bookModel");


const bookInsert=async(req, res)=>{
    const { bookno, name, description, Author }= req.body;
      await bookModel.create({
        bookno:bookno,
        name:name,
        description:description,
        Author:Author
      })
      res.send("Data Succesfulllly Saveeee!");
}

const bookDisplay=async(req, res)=>{
     const bookData = await  bookModel.find();
     res.send(bookData);
}


const bookSearch=async(req, res)=>{
        const { bookno} = req.body;
        const Data= await bookModel.find({bookno:bookno});
        res.send(Data);

}

const bookDelete=async(req, res)=>{
  const { bookid} = req.query;
    await bookModel.findByIdAndDelete(bookid);
    res.send("Data deleted!!!");
}

const bookEditShow=async(req, res)=>{
  const { bookid }= req.body;
   const Data = await bookModel.findById(bookid);
   res.send(Data);
}


const bookEditSave=async(req, res)=>{
  const {_id } =req.body;
  await bookModel.findByIdAndUpdate(_id, req.body);
  res.send("Data succesfully updated!!!");
}
module.exports={
       bookInsert,
       bookDisplay,
       bookSearch,
       bookDelete,
       bookEditShow,
       bookEditSave
}