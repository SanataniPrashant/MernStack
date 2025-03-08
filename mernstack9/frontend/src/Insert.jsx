import { useState } from "react";
import axios from "axios";

const Insert=()=>{
 const [name, setEmpname] = useState("");
 const [city, setCity] = useState("");
 const [empdesignation, setEmpdesignation] = useState("");
 const [empsalary, setEmpsalary] = useState("");
 const [image, setImage] = useState("");


  const handleImage=(e)=>{
         let value=e.target.files[0];
         setImage(value);
         console.log(image);
  }

 const handleSubmit=async()=>{
  let api="http://localhost:8000/emp/datasave";

   const formData = new FormData();
         formData.append("name", name);
         formData.append("city", city);
         formData.append("empdesignation", empdesignation);
         formData.append("empsalary", empsalary);
         formData.append("image", image);
  
      const response= await axios.post(api, formData);
      console.log(response.data);
 }


  return(
    <>
      <h1> Insert Student Records</h1>
      Enter Empname : <input type="text" name="name" value={name} onChange={(e)=>{setEmpname(e.target.value)}} />
      <br />
      Enter city : <input type="text" name="city" value={city} onChange={(e)=>{setCity(e.target.value)}} />
      <br />
      Enter Empdesignation : <input type="text" name="empdesignation" value={empdesignation} onChange={(e)=>{setEmpdesignation(e.target.value)}} />
      <br />
      Enter EmpSalary : <input type="text" name="empsalary" value={empsalary} onChange={(e)=>{setEmpsalary(e.target.value)}} />
      <br />
      Upload image : <input type="file" name="image" onChange={handleImage}    />
      <br />
      <button onClick={handleSubmit}> save!!!</button>
    </>
  )
}

export default Insert;
