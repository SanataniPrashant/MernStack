import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Display = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/user/getdata"); 
        setApiData(response.data); 
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Display Data</h2>
      {
        apiData.map((item) => (
          <div key={item._id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
            <h3>{item.name}</h3>
            <p>Email: {item.email}</p>
            <p>City: {item.city}</p>
            <img src={item.imgurl} alt="Uploaded" style={{ width: "200px", height: "auto" }} />
          </div>
        ))}
    </div>
  );
};

export default Display;