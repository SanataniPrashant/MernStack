
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import axios from "axios";
const Display=()=>{
    const [Empdata, setEmpdata]= useState([]);
    const loadData=()=>{
     let api="http://localhost:8000/employee/display";
    axios.get(api).then((res)=>{
        console.log(res.data);
        setEmpdata(res.data);
    })
    }
    useEffect(()=>{
        loadData();
    }, []);

    const ans= Empdata.map((key,index)=>{
        return(
            <>
              <tr>
                <td> {index +1} </td>
                <td> {key.empno} </td>
                <td> {key.name} </td>
                <td> {key.department} </td>
                <td> {key.city} </td>
                <td> {key.salary} </td>
              </tr> 
            </>
        )
    })
    return(
        <>
          <h1>Display Employee Records</h1>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Employee no</th>
          <th>Name</th>
          <th>Department</th>
          <th>City</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </Table>
        </>
    )
}
export default Display;