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


const AdminRegistration = () => {

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
    const api =  `${BASE_URL}/admin/adminregistration`;
    const response = await axios.post(api,input);
    console.log(response.data);
    toast.success(response.data.msg);
    navigate('/adminlogin');
  }
  return (
    <>
    <Container fluid style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#3498db' }}>Welcome To Admin Registration</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ color: '#666666' }}>Enter Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" name='name' onChange={handleInput}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ color: '#666666' }}>Enter Showroom Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your showroom name"  name='sname' onChange={handleInput}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ color: '#666666' }}>Enter City Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your city name" name='cname' onChange={handleInput} />
              </Form.Group>
              <Form.Select aria-label="Default select example" name='brand' onChange={handleInput}>
                <option>Open this select menu</option>
                <option value="BMW">BMW</option>
                <option value="Audy">Audy</option>
                <option value="Tata Motors Limited">Tata Motors Limited</option>
                <option value="Mahindra & Mahindra">Mahindra & Mahindra</option>
                <option value="Bugatti">Bugatti</option>
              </Form.Select>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ color: '#666666' }}>Enter Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" name='email' onChange={handleInput} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ color: '#666666' }}>Enter Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" name='password' onChange={handleInput} />
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
  );
};

export default AdminRegistration;

