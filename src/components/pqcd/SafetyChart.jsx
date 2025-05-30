import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function SafetyChart({ data }) {
  const chartData = {
    labels: data.map(d => d.month),
    datasets: [
      {
        label: '사고 건수',
        data: data.map(d => d.incidents),
        backgroundColor: '#f87171', // 빨간색
      },
      {
        label: '근접 사고',
        data: data.map(d => d.nearMiss),
        backgroundColor: '#fbbf24', // 노란색
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: '건수',
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
      <h2 className="text-lg font-bold mb-2">안전지표 (사고 및 근접사고)</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
}
