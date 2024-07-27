// src/components/AdminDashboard.jsx
import React from 'react';
import Header from './partial/header'; 
import Footer from './partial/footer'; 

function AdminDashboard() {
    const contentStyle = {
        textAlign: 'center',
        margin: '20px 0',
        fontSize: '32px',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
        marginLeft: '350px',
      };
    
      const mainStyle = {
        textAlign: 'center',
        fontSize: '18px',
        color: '#555',
        fontFamily: 'Arial, sans-serif',
        marginLeft: '450px',
      };
  return (
    <div>
      <Header />
      <h1 style={contentStyle}>Hello Welcome! Vu Trung Nghia</h1>
      <p style={mainStyle}>Project: A modern React application setup with Vite. This template is designed to provide a fast and efficient development environment, featuring real-time updates and clean, maintainable code.</p>
      <Footer />
    </div>
  );
}

export default AdminDashboard;
