import React from 'react';
import { Link } from 'react-router-dom'; // Để sử dụng các liên kết điều hướng

const Header = () => {
  const headerStyle = {
    backgroundColor: '#0099FF',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%', 
    position: 'fixed', 
    top: 0, 
    left: 0,
    zIndex: 1000,
  };

  const headerContentStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative', 
  };

  const titleStyle = {
    position: 'absolute',
    left: '-26px', 
    bottom:  ' 5px', 
    fontSize: '18px',
    margin: '0', 
    marginLeft: '-130px',
  };

  const navbarStyle = {
    display: 'flex',
    marginLeft: '250px',
  };

  const navbarListStyle = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
  };

  const navbarItemStyle = {
    margin: '0 15px',
  };

  const navbarLinkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '15px',
    marginRight: '100px',
  };
  const buttonStyle = {
    backgroundColor: '#4caf50', 
    color: '#fff', 
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    fontSize: '15px',
    cursor: 'pointer',
    textDecoration: 'none',
    marginLeft:'30px',
  };
  return (
    <header style={headerStyle}>
      <div style={headerContentStyle}>
        <h1 style={titleStyle}>AdminDashBoard</h1>
        <nav style={navbarStyle}>
          <ul style={navbarListStyle}>
            <li style={navbarItemStyle}><Link to="#" style={navbarLinkStyle}>Home</Link></li>
            <li style={navbarItemStyle}><Link to="#" style={navbarLinkStyle}>Dashboard</Link></li>
            <li style={navbarItemStyle}><Link to="#" style={navbarLinkStyle}>Settings</Link></li>
            <li style={navbarItemStyle}><Link to="#" style={navbarLinkStyle}>Profile</Link></li>
          </ul>
        </nav>
        <Link to="#" style={buttonStyle}>Upgrade Pro</Link>
      </div>
    </header>
  );
};

export default Header;
