import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";
import { message } from 'antd';

const Insert = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));
    console.log(input);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let api = "http://localhost:8000/book/insert";
    axios.post(api, input).then((res) => {
      // alert("successfully data send")
      message.success(res.data)
    })
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
      backgroundColor: '#f0f0f0',
      backgroundImage:"url(https://scholarlykitchen.sspnet.org/wp-content/uploads/2018/07/iStock-506432952.jpg)",
      backgroundPosition:"cover"
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
        }}>Insert Book Record</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{
              marginBottom: '10px',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#666'
            }}>Enter book No.</Form.Label>
            <Form.Control type="text" name="bookno" onChange={handleInput} style={{
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
            }}>Enter book Name</Form.Label>
            <Form.Control type="text" name="name" onChange={handleInput} style={{
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
            }}>Enter description</Form.Label>
            <Form.Control type="text" name="description" onChange={handleInput} style={{
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
            }}>Enter Author name</Form.Label>
            <Form.Control type="text" name="Author" onChange={handleInput} style={{
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
  )
}

export default Insert;