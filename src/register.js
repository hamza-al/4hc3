// Register.js
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div style={styles.container}>
      <div style={styles.registerBox}>
        <h2 style={styles.title}>Register</h2>
        <form>
          <label style={styles.label}>Username</label>
          <input type="text" style={styles.input} required />

          <label style={styles.label}>Password</label>
          <input type="password" style={styles.input} required />
            <Link to={'/templates'}> 
            <button type="submit" style={styles.button}>Register</button></Link>
          
        </form>
        <p style={styles.linkText}>
          Already have an account? <Link to="/login" style={styles.link}>Login here</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  registerBox: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '300px',
    textAlign: 'center',
  },
  title: {
    color: '#333',
  },
  label: {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    boxSizing: 'border-box',
    border: 'none',
    borderRadius: '4px',
    outline: 'none',
  },
  button: {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
  },
  linkText: {
    marginTop: '10px',
  },
  link: {
    color: '#4caf50',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Register;
