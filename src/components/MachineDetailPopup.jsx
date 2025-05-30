// components/MachineDetailPopup.jsx
export default function MachineDetailPopup({ data, onClose }) {
    return (
      <div className="absolute right-6 top-6 w-96 bg-black/35 backdrop-blur-s shadow-xl rounded-xl p-5 z-50 border border-gray-500">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">설비 상세 정보</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-white">✕</button>
        </div>
        <div className="text-sm space-y-2 text-white">
          <p><strong>기기명:</strong> {data.name}</p>
          <p><strong>평균 온도:</strong> {data.avgTemperature}°C</p>
          <p><strong>평균 압력:</strong> {data.avgPressure} bar</p>
          <p><strong>현재 상태:</strong> {data.status}</p>
          {data.error && <p className="text-red-500">⚠ {data.error}</p>}
        </div>
      </div>
    );
  }
  