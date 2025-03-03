import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import {message} from "antd";
import { useNavigate } from "react-router-dom";

const Update=()=>{
  const [mydata, setMydata]= useState([]);
  const navigate= useNavigate();

  const loadData=async()=>{
    let api="http://localhost:8000/employee/display";
    const res= await axios.get(api);
    setMydata(res.data);
  }
  useEffect(()=>{
    loadData();
  }, []);

 const myDel=async(id)=>{
  let api=`http://localhost:8000/employee/empdelete/?empid=${id}`;
  const res= await axios.get(api)
  message.success(res.data)
  loadData();
 }


const myEdit=(id)=>{
  navigate(`/empedit/${id}`)
}




 const ans = mydata.map((key,index)=>{
    return(
      <>
       <tr>
        <td>{index+1}</td>
        <td> {key.empno} </td>
        <td> {key.name} </td>
        <td> {key.department} </td>
        <td> {key.city} </td>
        <td> {key.salary} </td>
        <td>
        <RiDeleteBin6Fill id="myIcon" onClick={()=>{myDel(key._id)}} />
        </td>
        <td>
        <FaEdit id="myIcon" onClick={()=>{myEdit(key._id)}} />   
        </td>
       </tr>
      </>
    )
  })
    return(
        <>
          <h1> Update Employee Data</h1>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>SNo</th>
          <th>Employee no</th>
          <th>Name</th>
          <th>Department</th>
          <th>City</th>
          <th>Salary</th>
          <th> </th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </Table>
        </>
    )
}
export default Update;