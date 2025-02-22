import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import axios from "axios";
const Display=()=>{
    const [empdata, setEmpData]= useState([]);
    const loadData=()=>{
    let api="http://localhost:8000/employee/display";
    axios.get(api).then((res)=>{
        console.log(res.data);
        setEmpData(res.data);
    })
    }
    useEffect(()=>{
        loadData();
    }, []);
 let sno=0;
    const ans= empdata.map((key)=>{
        sno++;
        return(
            <>
              <tr>
                <td> {sno} </td>
                <td> {key.empno} </td>
                <td> {key.name} </td>
                <td> {key.designation} </td>
                <td> {key.salary} </td>
              </tr> 
            </>
        )
    })
    return(
        <>
          <h1>Display Emplyee Records</h1>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Emp no</th>
          <th>Name</th>
          <th>Designation</th>
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