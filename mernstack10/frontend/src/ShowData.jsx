import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ShowData() {
  const [prodata, setProdata]= useState({});
  const [myimages, setMyimages]= useState([]);
    const [showImage, setShowImage]= useState("");

  const { id } = useParams();

  const loadData = async () => {
    let api = "http://localhost:8000/user/showdata";
    const res = await axios.post(api, { id: id });
    console.log(res);
    setProdata(res.data);
    setMyimages(res.data.images);
    setShowImage(res.data.defaultImage);
  };

  useEffect(() => {
    loadData();
  }, []);

 

  const ans = myimages.map((key, index) => {
    return (
      <>
      <div> {index+1}</div>
      <a href="#"  onMouseMove={()=>{setShowImage(key)}}>
             <img src={`http://localhost:8000/${key}`} 
           width="50" height="50" />
      </a>

      <br /> <br />
      </>
    );
  });

  return (
    <>
      <h1>Display data</h1>
      <h2>{id}</h2>
      <div>
        {ans}
      </div>
      <div>
        <img style={{ height: "400px", width: "400px" }} src={`http://localhost:8000/${showImage}`} alt="img" />
      </div>
    </>
  );
}

export default ShowData;