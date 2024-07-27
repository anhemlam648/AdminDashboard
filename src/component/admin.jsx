// src/components/AdminDashboard.jsx
import React from 'react';
import Header from './partial/header'; 
import Footer from './partial/footer'; 

function AdminDashboard() {
  const Content = {
        textAlign: 'center',
        margin: '20px 0',
        fontSize: '32px',
        color: '#333',
        marginLeft: '950px',
        marginRight: '-800px',
      };
  return (
    <div>
      <Header />
        <h1 style={Content}>Hello Welcome!. Vu Trung Nghia</h1>
      <Footer />
    </div>
  );
}

export default AdminDashboard;
