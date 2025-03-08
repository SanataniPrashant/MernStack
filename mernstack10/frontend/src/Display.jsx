import { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
const Display=()=>{
  const [mydata, setMydata] = useState([]);
let nav = useNavigate();

const change = (id)=>{
  nav(`/showdata/${id}`);
}


  const loadData=async()=>{
    let api="http://localhost:8000/user/datadisplay";
    const response = await axios.get(api);
    setMydata(response.data);
    console.log(response.data);
  }

  useEffect(()=>{
    loadData();
  }, [])

 const ans=mydata.map((key,index)=>{
  return(
    <>
      <tr>
        <td>{index+1}</td>
       <td>
       {key.images.map((key1,index)=>{
           return(
            <>
              <span>{index+1}</span>
               <img src={`http://localhost:8000/${key1}`}  width="60" height="60" />
               <br/>
            </>
           )
        })}

       </td>
        <td> 
       


          <img src={`http://localhost:8000/${key.defaultImage}`} width="200" height="300" onClick={()=>{change(key._id)}} />
           </td>
        <td> {key.name} </td>
        <td> {key.brand} </td>
        <td> {key.price} </td>
      </tr>
    </>
  )
 })

  return(
    <>
      <h1 style={{textAlign:"center"}}> Display Data</h1>
      <hr />
      <table>
        <tr>
          <th>Sl No</th>
          <th> </th>
          <th> </th>
          <th> Name</th>
          <th> Brand</th>
          <th> Price</th>
        </tr>
        {ans}
      </table>
    </>
  )
}
export default Display;