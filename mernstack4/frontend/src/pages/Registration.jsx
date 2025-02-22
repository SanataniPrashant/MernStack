
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import {message} from "antd";

const Registration=()=>{
    const [input, setInput] = useState({});
    const handleInput=(e)=>{
       let name=e.target.name;
       let value=e.target.value;
       setInput(pre=>({...pre, [name]:value}));
       console.log(input);
    }


  const handleSubmit=async(e)=>{
    e.preventDefault();
    let api="http://localhost:8080/employee/registration";
    try {
          const response= await axios.post(api, input);
          console.log(response);
          message.success(response.data.msg);
    } catch (error) {
          console.log(error);
           alert("error in server");  
    }
  }

    return(
        <>
          <h1> User Registration</h1>

          <Form style={{width:"400px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter name</Form.Label>
        <Form.Control type="text" name="name"  value={input.name} onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter city</Form.Label>
        <Form.Control type="text"  name="city"  value={input.city} onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter email</Form.Label>
        <Form.Control type="email"  name="email"  value={input.email} onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter password</Form.Label>
        <Form.Control type="password"  name="password"  value={input.password} onChange={handleInput}  />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}
export default Registration;
