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

  const cardsContainerStyle = {
    marginTop: '30px',
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
  };

  return (
    <div style={dashboardContainerStyle}>
      <Header />
      <Sidebar />
      <main style={mainContentStyle}>
        <div style={cardsContainerStyle}>
          <Card title="Total Sales" value="$1,600" />
          <Card title="New Users" value="350" />
          <Card title="Orders" value="80" />
        </div>
        <Chart />
      </main>
      <Footer />
    </div>
  );
}

export default AdminDashboard;
