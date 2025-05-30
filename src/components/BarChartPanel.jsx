import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function BarChartPanel({ data }) {
  const chartData = {
    labels: data.map(d => d.label),
    datasets: [
      {
        label: '센서 요약 값',
        data: data.map(d => d.value),
        backgroundColor: '#8ABCDD',
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
      <h2 className="text-lg font-bold mb-2">Data1</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
}

/*
막대그래프 - 이상 탐지 횟수 (기기별)
각 설비마다 붙은 센서들이 온도, 압력, 속도 등을 측정
기준을 넘으면 이상상태로 기록 됨
이상횟수를 막대로 그려서 어떤 기계가 문제가 많은지 직관적으로 볼 수 있고
해당 기기를 예방 점검, 유지보수 우선 대상으로 할 수 있음.

각 기기에 온도센서/압력센서/속도센서/상태정보/경고 센서들이 있고 
실시간 데이터를 다 보기에 너무 많아서 평균/최대/상태만 보는게 효율적

*/