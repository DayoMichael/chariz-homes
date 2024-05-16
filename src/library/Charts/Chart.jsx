import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
        display:false,
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

// Mock data arrays
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// Generate random numbers for data points
const generateRandomData = () => {
  const data = [];
  for (let i = 0; i < labels.length; i++) {
    data.push(Math.floor(Math.random() * 1000)); // Generate random numbers between 0 and 1000
  }
  return data;
};

// Mock data object
const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: generateRandomData(), // Generate random data
      borderColor: '#F29254',
      backgroundColor: '#F29254',
    },
  ],
};

export function ChartView() {
  return <div className='w-full'><Line options={options} data={data} /></div>;
}
