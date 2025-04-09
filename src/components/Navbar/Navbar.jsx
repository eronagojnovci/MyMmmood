// src/components/Navbar/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">MoodApp</h2>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link> 
        <Link to="/YourMood" className="navbar-link">Your mood</Link>
        <Link to="/links" className="navbar-link">Links</Link>
      </div>
    </nav>
  );
};

export default Navbar;
