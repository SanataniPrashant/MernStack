import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Addbook = () => {
  let {id} = useParams();
  const[bookName , setBookName] = useState("")
  const[bookprice , setPrice] = useState("")
  const submitHandler = async()=>{
    let api = "http://localhost:8000/user/addbook"
    try {
      const res = await axios.post(api , {id : id , bookName : bookName , bookprice : bookprice})
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    <h1>Add New book</h1>
   <br />
   <hr />
   Enter BookName : <input type="text"  value={bookName}  onChange={(e)=>{setBookName(e.target.value)}}/> <br />
   Enter BookPrice : <input type="text"  value={bookprice}  onChange={(e)=>{setPrice(e.target.value)}} /> <br />
   <button onClick={submitHandler}>Save</button>

    </>
  )
}

export default Addbook