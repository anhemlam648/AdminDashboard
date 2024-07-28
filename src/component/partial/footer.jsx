import React from 'react';

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px 15px',
  display: 'flex',
  justifyContent: 'center', 
  alignItems: 'center',
  width: '100%', 
  position: 'fixed', 
  bottom: 0, 
  left: 0,
  zIndex: 1000,
  fontSize: '20px',
};

const footerContentStyle = {
  display: 'flex',
  flexDirection: 'column', 
  alignItems: 'center', 
  textAlign: 'center', 
};

const footerLinksStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column', 
};

const footerLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '20px',
  margin: '5px 0', 
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <p>&copy; 2024 Welcome to my website Vu Trung Nghia.</p>
        <ul style={footerLinksStyle}>
          <li><a href="/privacy" style={footerLinkStyle}>Privacy Policy</a></li>
          <li><a href="/terms" style={footerLinkStyle}>Terms of Service</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
