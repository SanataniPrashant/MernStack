
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import axios from "axios";
const Display=()=>{
    const [bookdata, setbookData]= useState([]);
    const loadData=()=>{
     let api="http://localhost:8000/book/display";
    axios.get(api).then((res)=>{
        console.log(res.data);
        setbookData(res.data);
    })
    }
    useEffect(()=>{
        loadData();
    }, []);

    const ans= bookdata.map((key,index)=>{
        return(
            <>
              <tr>
                <td> {index +1} </td>
                <td> {key.bookno} </td>
                <td> {key.name} </td>
                <td> {key.description} </td>
                <td> {key.Author} </td>
              </tr> 
            </>
        )
    })
    return(
        <>
          <h1>Display book Records</h1>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Book no</th>
          <th>Name</th>
          <th>Description</th>
          <th>Author</th>
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