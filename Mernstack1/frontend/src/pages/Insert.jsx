import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";

const Insert=()=>{
const [input, setInput] = useState({});

const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input);
}
const handleSubmit=(e)=>{

    e.preventDefault();
    let api="http://localhost:8000/employee/insert";
     axios.post(api, input).then((res)=>{
        alert("sucess")
      
    })
}
return(
        <>
        <div id="myForm">
          <h1>Insert Emplyee Record</h1>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Employee No.</Form.Label>
        <Form.Control type="text" name="empno" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Employee Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Designation</Form.Label>
        <Form.Control type="text" name="designation" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Salary</Form.Label>
        <Form.Control type="text" name="salary" onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}
export default Insert;