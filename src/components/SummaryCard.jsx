import { useEffect, useState } from 'react';
import { fetchSummaryData } from '../data/mockSummaryAPI.js';

export default function SummaryCards() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    fetchSummaryData().then(setSummary);
  }, []);

  if (!summary) return <div>불러오는 중...</div>;

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="bg-white shadow rounded-lg p-6 text-center">
        <div className="text-sm text-gray-500 mb-2">오늘 작업 지시</div>
        <div className="text-2xl font-bold">{summary.todayWorkCount}건</div>
      </div>
      <div className="bg-white shadow rounded-lg p-6 text-center">
        <div className="text-sm text-gray-500 mb-2">평균 리드타임</div>
        <div className="text-2xl font-bold">{summary.avgLeadTime}분</div>
      </div>
      <div className="bg-white shadow rounded-lg p-6 text-center">
        <div className="text-sm text-gray-500 mb-2">진행률 평균</div>
        <div className="text-2xl font-bold">{summary.avgProgress}%</div>
      </div>
    </div>
  );
}
