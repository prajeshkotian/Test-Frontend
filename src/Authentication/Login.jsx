import React, { useState } from 'react';
import './Login.css';  // Make sure to style the form in this CSS file

export const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  // Handle changes to form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);
    // You can perform your login API call or other validation here
  };

  return (
    <div className="Login">
      <div className="Login_Container">
        <form onSubmit={handleSubmit} className="Login_Form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <button type="submit" className="form-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
