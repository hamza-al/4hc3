// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './login';
import ResumeForm from './former';
import Resume from './resume';
import GridPage from './templates';
import Home from './home';
import Register from './register';

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/templates" element={<GridPage />} />
        <Route path="/main" element={<ResumeForm />} />
        
        {/* Add more routes for other pages if needed */}
      </Routes>
    </Router>
  );
};

export default App;
