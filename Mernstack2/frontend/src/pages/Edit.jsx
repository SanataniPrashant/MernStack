import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useEffect, useState } from "react";
// import { message } from "antd";
const BookEdit=()=>{
    const {id} = useParams();
    const [mydata, setMydata] = useState({});


    const loadData=async()=>{
    let api="http://localhost:8000/book/editdatashow";
    const res = await axios.post(api, {bookid:id});
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
        let api="http://localhost:8000/book/editdatasave";
        const res= await axios.post(api, mydata);
        alert("Record Succesfully updated!!!");
        console.log(res);
     }


    return(
        <>
          <div id="myForm" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
      backgroundColor: '#f0f0f0',
      backgroundImage:"url(https://scholarlykitchen.sspnet.org/wp-content/uploads/2018/07/iStock-506432952.jpg)",
      backgroundPosition:"cover"}}>
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
        }}> Edit book Detail : </h1>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{
              marginBottom: '10px',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#666'
            }}>Enter book No.</Form.Label>
        <Form.Control type="text" name="bookno"  value={mydata.bookno}  onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{
              marginBottom: '10px',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#666'
            }}>Enter book Name</Form.Label>
        <Form.Control type="text" name="name" value={mydata.name} onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{
              marginBottom: '10px',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#666'
            }}>Enter description</Form.Label>
        <Form.Control type="text" name="description" value={mydata.description} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{
              marginBottom: '10px',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#666'
            }}>Enter Author</Form.Label>
        <Form.Control type="text" name="Author" value={mydata.Author}  onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit} >
        Submit
      </Button>
    </Form>
        </div>
</div>
        
        </>
    )
}

export  default BookEdit;