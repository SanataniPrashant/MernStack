import { useState } from "react"
import axios from 'axios';

const Insert  = ()=>{
    const [input,setInput] = useState({});
    const handleInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInput((prevInput)=>({...prevInput,[name]:value}));
        console.log(input);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const api = "http://localhost:8000/author/insert";
        try {
            axios.post(api,input).then((response)=>{
                console.log(response);
                alert("data sent");
            })
            
        } catch (error) {
            console.log("error in sending data")
            alert(error);
        }
    }
    return (
        <>
        <div>
            <h1>Insert Author details</h1>
            <form>
                <label>Author Name:</label>
                <input type="text" name="name" vlaue={input.name} onChange={handleInput} required/>
                <br/>
                <br/>
                <label>Author email:</label>
                <input type="email" name="email" vlaue={input.email} onChange={handleInput} required/>
                <br/>
                <br/>
                <label>Author City:</label>
                <input type="text" name="city" vlaue={input.city} onChange={handleInput} required/>

                <button onClick={handleSubmit}>Send Data</button>
            </form>
        </div>
        </>
    )
}
export default Insert