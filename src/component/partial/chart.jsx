import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 15px;
  padding: 15px;
  width: 90%; 
  height: 295px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ChartTitle = styled.h3`
  margin: 0 0 15px;
  font-size: 18px;
  color: #333;
`;

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Sales',
      data: [30, 45, 65, 55, 75, 90, 100],
      borderColor: '#4caf50',
      backgroundColor: 'rgba(76, 175, 80, 0.2)',
      fill: true,
    },
    {
      label: 'Expenses',
      data: [20, 35, 50, 40, 60, 70, 80],
      borderColor: '#ff5722',
      backgroundColor: 'rgba(255, 87, 34, 0.2)',
      fill: true,
    },
    {
      label: 'Profit',
      data: [10, 15, 25, 15, 15, 20, 30],
      borderColor: '#2196f3',
      backgroundColor: 'rgba(33, 150, 243, 0.2)',
      fill: true,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `${tooltipItem.dataset.label}: $${tooltipItem.raw}`;
        },
      },
    },
  },
};

function Chart() {
  return (
    <ChartContainer>
      <ChartTitle>Sales Chart</ChartTitle>
      <Line data={chartData} options={chartOptions} />
    </ChartContainer>
  );
}

export default Chart;
