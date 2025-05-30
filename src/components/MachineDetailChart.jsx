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

export default function MachineDetailChart({ sensorData = [] }) {
  const chartData = {
    labels: sensorData.map(d => d.label),
    datasets: [
      {
        label: '센서값',
        data: sensorData.map(d => d.value),
        backgroundColor: '#34d399',
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-bold mb-2">센서별 상세 데이터</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
}
