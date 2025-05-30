import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function ProductivityChart() {
  const data = {
    labels: ['3월', '4월', '5월', '6월'],
    datasets: [
      {
        label: '생산성 (%)',
        data: [88, 92, 95, 93],
        borderColor: '#10b981',
        fill: false,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-2">생산성 추이</h2>
      <Line data={data} />
    </div>
  );
}