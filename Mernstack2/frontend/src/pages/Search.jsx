import { useState } from "react";
import axios from "axios";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Search=()=>{
  const [val, setVal] =useState("");
  const [mydata, setMydata]= useState([]);
  
  const handleSubmit=async()=>{
    let api="http://localhost:8000/book/search"; 
    const response= await axios.post(api, {bookno:val});
    console.log(response.data);
    setMydata(response.data);
  }


  const ans= mydata.map((key)=>{
      return(
        <>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>book no : {key.bookno}</Card.Title>
        <Card.Text>
           <h3> book name :  {key.name}</h3>
           <h3> book description :  {key.description}</h3>
           <h3> book Author :  {key.Author}</h3>
        </Card.Text>
      </Card.Body>
    </Card>
         
        </>
      )
  })




  return(
        <>
          <h1> Search book Data</h1>
          Enter book Number : <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}} />
          <button onClick={handleSubmit}>Search</button>
          <hr />

          {ans}
        </>
    )
}

export default Search;