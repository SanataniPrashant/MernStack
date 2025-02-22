import { useState, useEffect } from "react";
import axios from 'axios';

const Display = () => {
  const [Mydata, setMydata] = useState([]);
  const loaddata = async () => {
    let api = "http://localhost:8000/user/display"
    try {
      let response =await axios.get(api);
      console.log(response.data);
      setMydata(response.data)
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    loaddata();
  }, []);

  const ans = Mydata.map((key) => {
    return (
      <tr>
        <td>{key.userid.username}</td>
        <td>{key.userid.email}</td>
        <td>{key.fname}</td>
        <td>{key.lname}</td>
      </tr>
    );
  });

  return (
    <>
      <h1>Display user Records</h1>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {ans}
        </tbody>
      </table>
    </>
  );
};

export default Display;