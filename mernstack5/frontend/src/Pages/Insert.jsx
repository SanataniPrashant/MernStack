
import axios from 'axios'

import { useState } from "react"

const Insert =()=>{
  const [input,setInput] = useState({});
  const handleInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInput((prev)=>({...prev,[name]:value}));
    console.log(input);
  }

  const handleSubmit = ()=>{
    let api = "http://localhost:8000/user/insert";
    axios.post(api, input).then((res) => {
      console.log(res.data);
      alert('sent')
    })
  }

  return (
    <>
    <h1>this is insert page</h1>

    Enter userName : <input type="text"  name="username" value={input.username} onChange={handleInput} />
    <br />
    Enter email : <input type="text"  name="email"  value={input.email} onChange={handleInput} />
    <br />
    Enter Fname : <input type="text"  name="fname"  value={input.fname} onChange={handleInput} />
    <br />
    Enter Lname : <input type="text"  name="lname"  value={input.lname} onChange={handleInput} />

    <br />
    <button onClick={handleSubmit}>Insert</button>
    </>
  )

  
        
        
   
}

export default Insert