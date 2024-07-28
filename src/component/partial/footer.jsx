import React from 'react';

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '5px 10px', 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  position: 'fixed',
  bottom: 0,
  left: 0,
  zIndex: 1000,
  fontSize: '12px', 
};

const footerContentStyle = {
  marginBottom: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
};

const footerLinksStyle = {
  marginTop: '-15px',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
};

const footerLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '10px', 
  margin: '2px 0', 
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
