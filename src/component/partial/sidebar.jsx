import React from 'react';

function Sidebar() {
  const sidebarStyle = {
    width: '250px',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    height: '100vh',
  };

  const sidebarTitleStyle = {
    fontSize: '20px',
    marginBottom: '20px',
  };

  const sidebarListStyle = {
    listStyleType: 'none',
    padding: '0',
  };

  const sidebarItemStyle = {
    padding: '10px',
    fontSize: '18px',
    cursor: 'pointer',
  };

  return (
    <nav style={sidebarStyle}>
      <h2 style={sidebarTitleStyle}>Admin Panel</h2>
      <ul style={sidebarListStyle}>
        <li style={sidebarItemStyle}>Dashboard</li>
        <li style={sidebarItemStyle}>Users</li>
        <li style={sidebarItemStyle}>Orders</li>
        <li style={sidebarItemStyle}>Settings</li>
      </ul>
    </nav>
  );
}

export default Sidebar;
