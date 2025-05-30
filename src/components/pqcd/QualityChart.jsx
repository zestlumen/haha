// components/QualityChart.jsx
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

export default function QualityChart({ data }) {
  const chartdata = {
    labels: data.map(d => d.month),
    datasets: [
      {
        label: '불량률 (%)',
        data: data.map(d => d.rate),
        borderColor: '#f87171',
        backgroundColor: 'rgba(248, 113, 113, 0.2)',
        tension: 0.3,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: '#f87171',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
        title: {
          display: true,
          text: '%',
        },
      },
      x: {
        title: {
          display: true,
          text: '월별',
        },
      },
    },
  };

  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-bold mb-2">품질 추이 (불량률)</h2>
      <Line data={chartdata} options={options} />
    </div>
  );
}
