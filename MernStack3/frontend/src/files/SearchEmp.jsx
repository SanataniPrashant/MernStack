import { useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
const Search=()=>{
  const [val, setVal] =useState("");
  const [mydata, setMydata]= useState([]);
  
  const handleSubmit=async()=>{
    let api="http://localhost:8000/employee/search"; 
    const response= await axios.post(api, {empno:val});
    console.log(response.data);
    setMydata(response.data);
  }


  const ans= mydata.map((key)=>{
      return(
        <>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>book no : {key.empkno}</Card.Title>
        <Card.Text>
           <h3> book name :  {key.name}</h3>
           <h3> book description :  {key.department}</h3>
           <h3> book Author :  {key.city}</h3>
           <h3> book Author :  {key.salary}</h3>
        </Card.Text>
      </Card.Body>
    </Card>
         
        </>
      )
  })




  return(
        <>
          <h1> Search Employee Data</h1>
          Enter Employee Number : <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}} />
          <button onClick={handleSubmit}>Search</button>
          <hr />

          {ans}
        </>
    )
}

export default Search;