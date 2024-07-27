// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Để sử dụng các liên kết điều hướng
import './header.css'; 
const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1 className='title'>AdminDashBoard</h1>
        </div>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
