import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import BASE_URL from '../Config';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
function AddVehicle() {
    const [input, setInput] = useState({});
  const navigate = useNavigate();

  const handleInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInput(prevState => ({...prevState, [name]: value}));
    console.log(input);
  }
  const handleSubmit =async(e)=>{
    e.preventDefault();
    const api =  `${BASE_URL}/vehicle/addvehicle`;
    const response = await axios.post(api,input);
    console.log(response.data);
    toast.success(response.data.msg);
    navigate('/admindashboard');
  }
  return (
    <>
    <Container fluid style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#3498db' }}>Add vehicle with its details</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ color: '#666666' }}>Enter Name of Vehicle</Form.Label>
                <Form.Control type="text" placeholder="Enter name" name='name' onChange={handleInput}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ color: '#666666' }}>Enter Model of Vehicle</Form.Label>
                <Form.Control type="text" placeholder="Enter Model"  name='model' onChange={handleInput}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ color: '#666666' }}>Enter price</Form.Label>
                <Form.Control type="text" placeholder="Enter your Price" name='price' onChange={handleInput} />
              </Form.Group>
              <Form.Select aria-label="Default select example" name='color' onChange={handleInput}>
                <option>Open this select Color</option>
                <option value="Black">Black</option>
                <option value="Blue">Blue</option>
                <option value="White">White</option>
                <option value="Grey">Grey</option>
                <option value="yellow">Yellow</option>
              </Form.Select>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ color: '#666666' }}>Enter Features of vehicle</Form.Label>
                <Form.Control type="textarea" placeholder="" name='features' onChange={handleInput} />
              </Form.Group>
              <Button variant="primary"  style={{ backgroundColor: '#007bff', borderColor: '#007bff', color: '#ffffff' }} onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
    <ToastContainer />
    </>
  )
}

export default AddVehicle
