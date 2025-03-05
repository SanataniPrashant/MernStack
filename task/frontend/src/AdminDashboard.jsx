import { useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Footerr from './Components/Footerr';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/home');
  }

  useEffect(()=>{
    const token= localStorage.getItem("token");
      if(!token)
      {
        navigate("/home");        
      }
  })

  return (
    <>
      <Dropdown as={NavItem} id="dropdown-basic-1">
        <Dropdown.Toggle as={NavLink} style={{fontSize:"20px", color:"#333"}} >Dropdown</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item> <Link to ="adminprofile" style={{ textDecoration: 'none', color: '#333' }}>Profile</Link></Dropdown.Item>
          <Dropdown.Item><Link to ="inquiries" style={{ textDecoration: 'none', color: '#333' }}>Inquiries</Link></Dropdown.Item>
          <Dropdown.Item><Link to ="addvehicle" style={{ textDecoration: 'none', color: '#333' }}>Add Vehicle</Link></Dropdown.Item>
        </Dropdown.Menu>
        <div style={{fontSize:"20px", color:"#333"}}>
          Welcome to {localStorage.getItem("brand")} : {localStorage.getItem("name")}
        </div>
        <button className="logout-button" onClick={logout}>Logout</button>
      </Dropdown>

      <section>
        <Outlet />
      </section>

      <Footerr/>
    </>
  )
}

export default AdminDashboard;