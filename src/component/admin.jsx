import React from 'react';
import Header from './partial/header';
import Footer from './partial/footer';
import Sidebar from './partial/sidebar';
import Card from './partial/card';
import Chart from './partial/chart';

function AdminDashboard() {
  const dashboardContainerStyle = {
    display: 'flex',
  };

  const mainContentStyle = {
    flex: 1,
    padding: '20px',
  };

  const dashboardHeadingStyle = {
    fontSize: '24px',
    color: '#333',
  };

  const cardsContainerStyle = {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
  };

  return (
    <div style={dashboardContainerStyle}>
      <Header />
      <Sidebar />
      <main style={mainContentStyle}>
        <h1 style={dashboardHeadingStyle}>Dashboard</h1>
        <div style={cardsContainerStyle}>
          <Card title="Total Sales" value="$1,200" />
          <Card title="New Users" value="345" />
          <Card title="Orders" value="78" />
        </div>
        <Chart />
      </main>
      <Footer />
    </div>
  );
}

export default AdminDashboard;
