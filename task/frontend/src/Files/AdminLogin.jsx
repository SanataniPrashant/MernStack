

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from '../Config';

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 


  const handleSubmit=async(e)=>{
    e.preventDefault();
    let api=`${BASE_URL}/admin/adminlogin`;

    try {
          const response = await axios.post(api, {email:email, password:password});
          console.log(response.data); 
          localStorage.setItem("name", response.data.name);
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("adminid", response.data._id);
  
          toast.success("You are Succesfully login!");
          navigate("/admindashboard");
 
    } catch (error) {
        toast.error(error.response.data.msg);
        
    }

   }
  return (
    <>
    <Container fluid style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#3498db' }}>Welcome To Admin Login</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ color: '#666666' }}>Enter Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" name="email" value={email} 
        onChange={(e)=>{setEmail(e.target.value)}}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ color: '#666666' }}>Enter Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" name="password" value={password}
        onChange={(e)=>{setPassword(e.target.value)}} />
              </Form.Group>
              <Button variant="primary" type="submit" style={{ backgroundColor: '#007bff', borderColor: '#007bff', color: '#ffffff' }} onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
    <ToastContainer />
    </>
  );
};

export default AdminLogin;