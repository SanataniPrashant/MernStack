import { useEffect } from "react";
import Carousels from "../Components/Carousels"
import BASE_URL from '../Config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const adminAuthenticate = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        let api = `${BASE_URL}/admin/adminauthenticate`;
        const response = await axios.post(api, null, { headers: { "x-auth-token": token } });
        console.log(response.data);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("brand", response.data.brand);
        localStorage.setItem("sname", response.data.sname);
        localStorage.setItem("cname", response.data.cname);
        localStorage.setItem("adminid", response.data._id);
        navigate("/admindashboard");
      }
    } catch (error) {
      console.error(error);
      // Handle the error here
    }
  };

  useEffect(() => {
    adminAuthenticate();
  }, []);

  return (
    <>
      <Carousels />
    </>
  );
};
export default Home;