import React from 'react';
import Header from './partial/header';
import Footer from './partial/footer';
import Sidebar from './partial/sidebar';
import Card from './partial/card';
import Chart from './partial/chart';
import EventsChart from './partial/eventschart';
function AdminDashboard() {
  const dashboardContainerStyle = {
    display: 'flex',
  };

  const mainContentStyle = {
    flex: 1,
    padding: '20px',
  };

  const cardsContainerStyle = {
    marginTop: '40px',
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
  };

  const headingStyle = {
    marginTop: '40px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '-15px',
    fontFamily: 'Arial, sans-serif',
  };
  const chartsContainerStyle = {
    display: 'flex',
    gap: '-5px', 
    marginTop: '30px',
    alignItems: 'flex-start', 
  };

  return (
    <div style={dashboardContainerStyle}>
      <Header />
      <Sidebar />
      <main style={mainContentStyle}>
      <h1 style={headingStyle}>Vu Trung Nghia</h1>
        <div style={cardsContainerStyle}>
          <Card title="Total Sales" value="$1,600" />
          <Card title="New Users" value="350" />
          <Card title="Orders" value="80" />
        </div>
        <div style={chartsContainerStyle}>
          <div style={{ flex: 1 }}>
            <Chart />
          </div>
          <div style={{ flex: 1 }}>
            <EventsChart />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AdminDashboard;
