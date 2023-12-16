// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.title}>Welcome to Resume Maker</h2>
        <div style={styles.buttonContainer}>
          <Link to="/login" style={styles.button}>Login</Link>
          <Link to="/register" style={styles.button}>Register</Link>
        </div>
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
  loginBox: {
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
  buttonContainer: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
    
  },
  button: {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '10px',
    margin:"10px",
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: 'calc(50% - 5px)',
  },
};

export default Home;
