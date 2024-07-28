import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
`;

const ChartTitle = styled.h3`
  margin: 0 0 20px;
  font-size: 20px;
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
