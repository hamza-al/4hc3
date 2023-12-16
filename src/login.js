import React from 'react';
import './Login.css'; // Create a CSS file for styling
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <Link to={'/templates'}>
            <button type="submit">Login</button>
          </Link>
          
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
