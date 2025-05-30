import PQCDCardGrid from '../components/pqcd/PQCDCardGrid';
import ProductivityChart from '../components/pqcd/ProductivityChart';
import QualityChart from '../components/pqcd/QualityChart';
import CostDeliveryChart from '../components/pqcd/CostDeliveryChart';
import { defectRates,safetyStats } from '../data/pqcdMockAPI';
import SafetyChart from '../components/pqcd/SafetyChart';


export default function PQCDDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">PQCD 핵심 지표 대시보드</h1>
      <PQCDCardGrid />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch'>
        <div className='h-full min
        -h-[300px]'><ProductivityChart /></div> 
        <div className='h-full min-h-[300px]'><QualityChart data={defectRates} /></div> 
        <div className='h-full min-h-[300px]'><CostDeliveryChart /></div> 
        <div className='h-full min-h-[300px]'><SafetyChart data={safetyStats} /></div> 
      </div>
    </div>
  );
}
