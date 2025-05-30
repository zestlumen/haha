export default function PQCDCardGrid() {
    const data = [
      { label: '생산성', value: '95%', color: 'bg-green-200' },
      { label: '품질', value: '98%', color: 'bg-blue-200' },
      { label: '비용', value: '92%', color: 'bg-yellow-200' },
      { label: '납기', value: '97%', color: 'bg-purple-200' },
    ];
  
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((item) => (
          <div
            key={item.label}
            className={`p-4 rounded shadow text-center ${item.color}`}
          >
            <div className="text-lg font-semibold">{item.label}</div>
            <div className="text-2xl font-bold">{item.value}</div>
          </div>
        ))}
      </div>
    );
  }
  