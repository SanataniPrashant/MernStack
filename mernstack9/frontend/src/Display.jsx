import { useState, useEffect } from "react";
import axios from "axios";
const Display=()=>{
  const [mydata, setMydata] = useState([]);


  const loadData=async()=>{
    let api="http://localhost:8000/emp/datadisplay";
    const response = await axios.get(api);
    setMydata(response.data);
    console.log(response.data);
  }

  useEffect(()=>{
    loadData();
  }, [])

 const ans=mydata.map((key)=>{
  return(
    <>
      <tr>
        <td> 
          <img src={`http://localhost:8000/uploads/${key.image}`} width="100" height="100" /></td>
        <td> {key.name} </td>
        <td> {key.city} </td>
        <td> {key.empdesignation} </td>
        <td> {key.empsalary} </td>
      </tr>
    </>
  )
 })

  return(
    <>
      <h1> Display Data</h1>
      <hr />
      <table>
        <tr>
          <th> </th>
          <th> Name</th>
          <th> city</th>
          <th> EmpDesignation</th>
          <th> EmpSalary</th>
        </tr>
        {ans}
      </table>
    </>
  )
}
export default Display;
