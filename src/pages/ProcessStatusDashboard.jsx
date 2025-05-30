import { useEffect, useState } from 'react';
import MachineStatusPanel from '../components/MachineStatusPanel';
import BarChartPanel from '../components/BarChartPanel';
import { fetchSensorSummary, fetchMachineStatus, fetchAlerts } from '../data/mockSensorAPI';
import SummaryCards from '../components/SummaryCard';
import ProgressTable from '../components/ProgressTable';

export default function ProcessStatusDashboard() {
  const [status, setStatus] = useState({});
  const [sensor, setSensor] = useState([]);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    async function loadData() {
      const [machineStatus, sensorSummary, latestAlerts] = await Promise.all([
        fetchMachineStatus(),
        fetchSensorSummary(),
        fetchAlerts(),
      ]);
      setStatus(machineStatus);
      setSensor(sensorSummary);
      setAlerts(latestAlerts);
    }
    loadData(); `1`
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-3 gap-6">
        {Object.entries(status).map(([name, state]) => (
          <div key={name} className="bg-white rounded shadow p-4">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p>
              상태: <span className={state === '가동' ? 'text-green-500' : state === '정지' ? 'text-red-500' : 'text-yellow-500'}>{state}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <BarChartPanel data={sensor} />
        <MachineStatusPanel data={[84, 76, 90]} alerts={alerts} />
      </div>
      <div className="flex flex-col gap-8">
        <SummaryCards/>
        <ProgressTable />
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-2">최근 알림</h2>
        <ul className="text-sm list-disc pl-4 space-y-1">
          {alerts.map((msg, idx) => (
            <li key={idx} className={msg.includes('경고') ? 'text-red-500' : 'text-gray-800'}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
