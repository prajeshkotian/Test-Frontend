import React from 'react'
import { useNavigate } from 'react-router-dom'; 

export const Navbar = () => {
    const navigate = useNavigate(); 
    const goToRegister = () => {
        navigate('/Register');  // Navigate to the login page
    };
    const goToLogin =()=>{
        navigate('/Login');
    };
    return (
    <div className="navbar">
        <div className="nav-links">
          <button className="nav-button" onClick={goToLogin} >Login</button>
          <button className="nav-button" onClick={goToRegister}>Register</button>
        </div>
      </div>
  )
}
