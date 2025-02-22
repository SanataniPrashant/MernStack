import { useState, useEffect } from "react";
import axios from "axios";

const Salary = () => {
  const [Empdata, setEmpdata] = useState([]);

  const loadData = () => {
    let api = "http://localhost:8000/employee/salarysummary";
    axios.get(api).then((res) => {
      // console.log(res.data);
      setEmpdata(res.data);
    });
  };
  let a=0;
  Empdata.map((e)=>{return a+=e.salary} )
  console.log(a);

  useEffect(() => {
    loadData();
    
  }, []);


 

  return (
    <>
      <h1>Total Salary: {a}</h1>
      
    </>
  );
};