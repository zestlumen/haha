import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const centerTextPlugin = {
  id: 'centerText',
  beforeDraw: (chart) => {
    const { width, height, ctx } = chart;
    const total = chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
    const avg = Math.round(total / chart.data.datasets[0].data.length);

    ctx.save();
    ctx.font = 'bold 20px sans-serif';
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.fillText(`평균 ${avg}%`, width / 2, height / 2 + 6);
  },
};

export default function MachineStatusPanel({ data, alerts }) {
  const chartData = {
    labels: ['지거', '텐타', '래피드'],
    datasets: [
      {
        data,
        backgroundColor: ['#f87171', '#60a5fa', '#4ade80'],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="bg-white rounded shadow p-4 w-full">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">설비 가동률</h2>
        <div className="relative">
          <span className="text-xl">🔔</span>
          <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white px-1 rounded-full">
            {alerts.length}
          </span>
        </div>
      </div>
      <Doughnut data={chartData} plugins={[centerTextPlugin]} />
      <ul className="mt-4 text-sm space-y-1">
        {alerts.map((msg, idx) => (
          <li
            key={idx}
            className={msg.includes('경고') ? 'text-red-500' : 'text-gray-700'}
          >
            ● {msg}
          </li>
        ))}
      </ul>
    </div>
  );
}

/*
설비가동률 - 기기들이 하루동안 얼마나 오래 작동했는지 비율로 보여주는 그래프
가동률이 낮으면 공정 효율이 낮거나 고장 났을 가능성 이 있고
어떤 기계를 점검할지 스케줄 조정할 수 있음.
*/