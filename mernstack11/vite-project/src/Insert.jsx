import React, { useState } from 'react'

function Insert() {
    const [input, setInput] = useState("");

    const handleInput =(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInput({...input, [name]: value});
    }

    const handlesubmit = ()=>{
        console.log(input);
    }

  return (
    <>
    Enter Auther Name : <input type="text" name='name'  onChange={handleInput}/>
    <br />
    Enter Auther email : <input type="text" name='email'  onChange={handleInput}/>
    <br />
    Enter Book Name : <input type="text" name='bname' onChange={handleInput} />
    <br />
    Enter Price : <input type="text" name='price' onChange={handleInput}/>
    <br />
    <button onClick={handlesubmit}>Insert</button>

    </>
  )
}

export default Insert
