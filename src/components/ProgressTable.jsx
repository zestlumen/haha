import { useEffect, useState } from 'react';
import { fetchMachineProgress } from '../data/mockProgressAPI';

export default function ProgressTable() {
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    fetchMachineProgress().then(setMachines);
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4">설비별 진행률</h2>
      <table className="w-full text-sm text-left">
        <thead className="text-gray-500 border-b">
          <tr>
          <th className="w-[15%] py-2">설비명</th>
            <th className="w-[15%]">상태</th>
            <th className="w-[55%]">진행률</th>
            <th className="w-[15%] px-10">예상 완료</th>
          </tr>
        </thead>
        <tbody>
          {machines.map((m) => (
            <tr key={m.id} className="border-b last:border-none">
              <td className="py-2 font-medium">{m.id}</td>
              <td>{m.status}</td>
              <td>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${
                      m.progress === 100 ? 'bg-green-400' : 'bg-blue-400'
                    }`}
                    style={{ width: `${m.progress}%` }}
                  ></div>
                </div>
                <div className="text-xs text-right">{m.progress}%</div>
              </td>
              <td className='px-10'>{m.eta}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
