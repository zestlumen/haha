// ProcessMonitor.jsx
import { useState, useEffect } from 'react';
import ProcessFlow3D from '../components/ProcessFlow3D';
import MachineDetailPopup from '../components/MachineDetailPopup.jsx';
import { fetchSensorDetail } from '../data/mockSensorAPI';

export default function ProcessMonitor() {
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [detail, setDetail] = useState(null);

  const handleClosePopup = () => {
    setSelectedMachine(null);
    setDetail(null); // ✅ 이 줄 추가
  };

  useEffect(() => {
    if (selectedMachine) {
      fetchSensorDetail(selectedMachine).then(setDetail);
    }
  }, [selectedMachine]);

  return (
    <div className="relative">
      <ProcessFlow3D onMachineClick={setSelectedMachine} />

      {detail && (
        <MachineDetailPopup data={detail} onClose={handleClosePopup} />
      )}
    </div>
  );
}
