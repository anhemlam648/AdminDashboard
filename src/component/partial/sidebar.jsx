import React from 'react';
import { Link } from 'react-router-dom'; 
const Sidebar = () => {
  const sidebarStyle = {
    width: '250px',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    height: '100vh',
  };

  const sidebarTitleStyle = {
    marginTop:'25px',
    fontSize: '18px',
    marginBottom: '-5px',
  };

  const sidebarListStyle = {
    listStyleType: 'none',
    padding: '0',
  };

  const sidebarItemStyle = {
    padding: '10px',
    fontSize: '15px',
    cursor: 'pointer',
  };

  const sidebarItemTextStyle = {
    marginLeft: '10px',
    textDecoration: 'none', 
    color: '#333', 
  };

  return (
    <nav style={sidebarStyle}>
      <h2 style={sidebarTitleStyle}>Dash Menu</h2>
      <ul style={sidebarListStyle}>
        <li style={sidebarItemStyle}>
          <Link to="/#" style={sidebarItemTextStyle}>🖥️ Dashboard</Link>
        </li>
        <li style={sidebarItemStyle}>
          <Link to="/#" style={sidebarItemTextStyle}>🔲 UI Elements</Link>
        </li>
        <li style={sidebarItemStyle}>
          <Link to="/#" style={sidebarItemTextStyle}>📈 Charts</Link>
        </li>
        <li style={sidebarItemStyle}>
          <Link to="/#" style={sidebarItemTextStyle}>🔧 Tools</Link>
        </li>
        <li style={sidebarItemStyle}>
          <Link to="/#" style={sidebarItemTextStyle}>⚙️ Settings</Link>
        </li>
        <li style={sidebarItemStyle}>
          <Link to="/#" style={sidebarItemTextStyle}>📄 Documentation</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
