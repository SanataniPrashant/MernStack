import React from 'react';
import { useNavigate } from 'react-router-dom';
const AdminProfile = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/home');
  }
  return (
    <>
    <div className="admin-profile">
      <div className="header-section">
        <img src="profile-picture.jpg" alt="Admin Profile Picture" className="profile-picture" />
        <h2>Admin Name: {localStorage.getItem("name")}</h2>
      </div>
      <div className="profile-information-section">
        <h3>Contact Information</h3>
        <ul>
          <li>Email: {localStorage.getItem("email")}</li>
          <li>Showroom Name: {localStorage.getItem("sname")}</li>
          <li>City: {localStorage.getItem("cname")}</li>
          <li>Brand Name: {localStorage.getItem("brand")}</li>
        </ul>
        <h3>About Me</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
      </div>
      <div className="action-buttons-section">
        <button  style={{
    backgroundColor: '#4CAF50', 
    color: '#fff', 
    padding: '10px 20px', 
    border: 'none', 
    borderRadius: '5px', 
    cursor: 'pointer'
  }}  onClick={logout}>Logout</button>
      </div>
      <div className="additional-features-section">
        <h3>Recent Activity</h3>
        <ul>
          <li>Recent Login: 2023-02-20 14:30:00</li>
          <li>Recent Action: Updated user profile</li>
        </ul>
        <h3>System Notifications</h3>
        <ul>
          <li>New User Registration: John Doe</li>
          <li>System Update: New version available</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default AdminProfile;