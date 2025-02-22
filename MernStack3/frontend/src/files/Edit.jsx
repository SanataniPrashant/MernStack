import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useEffect, useState } from "react";
// import { message } from "antd";
const EmpEdit=()=>{
    const {id} = useParams();
    const [mydata, setMydata] = useState({});


    const loadData=async()=>{
    let api="http://localhost:8000/employee/editdatashow";
    const res = await axios.post(api, {empid:id});
    setMydata(res.data);
    console.log(res.data);
    }

    useEffect(()=>{
        loadData();
    }, [])
    
    const handleInput=(e)=>{
         let name= e.target.name;
         let value=e.target.value;
         setMydata(values=>({...values, [name]:value}));
         console.log(mydata);
    }


     const handleSubmit=async(e)=>{
        e.preventDefault();
        let api="http://localhost:8000/employee/editdatasave";
        const res= await axios.post(api, mydata);
        alert("Record Succesfully updated!!!");
        console.log(res);
     }


    return(
        <>
       <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
      backgroundColor: '#f0f0f0',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        padding: '20px',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{
          marginBottom: '20px',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#333'
        }}>Insert Employee Record</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{
              marginBottom: '10px',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#666'
            }}>Enter Employee no. :</Form.Label>
            <Form.Control type="text" name="empno" value={mydata.empno} onChange={handleInput} style={{
              width: '100%',
              padding: '10px',
              marginBottom: '20px',
              border: '1px solid #ccc',
              borderRadius: '5px'
            }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{
              marginBottom: '10px',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#666'
            }}>Enter Employee Name</Form.Label>
            <Form.Control type="text" name="name" value={mydata.name} onChange={handleInput} style={{
              width: '100%',
              padding: '10px',
              marginBottom: '20px',
              border: '1px solid #ccc',
              borderRadius: '5px'
            }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{
              marginBottom: '10px',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#666'
            }}>Enter Department </Form.Label>
            <Form.Control type="text" name="department" value={mydata.department} onChange={handleInput} style={{
              width: '100%',
              padding: '10px',
              marginBottom: '20px',
              border: '1px solid #ccc',
              borderRadius: '5px'
            }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{
              marginBottom: '10px',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#666'
            }}>Enter City :</Form.Label>
            <Form.Control type="text" name="city" value={mydata.city} onChange={handleInput} style={{
              width: '100%',
              padding: '10px',
              marginBottom: '20px',
              border: '1px solid #ccc',
              borderRadius: '5px'
            }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{
              marginBottom: '10px',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#666'
            }}>Enter Salary :</Form.Label>
            <Form.Control type="text" name="salary" value={mydata.salary} onChange={handleInput} style={{
              width: '100%',
              padding: '10px',
              marginBottom: '20px',
              border: '1px solid #ccc',
              borderRadius: '5px'
            }} />
            </Form.Group>


          <Button variant="primary" type="submit" onClick={handleSubmit} style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
        
        </>
    )
}

export  default EmpEdit;