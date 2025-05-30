import { Outlet } from 'react-router-dom';
import TopNav from '../components/TopNav';
import SideNav from '../components/SideNav';
import LogoBar from '../components/LogoBar';

// export default function DashboardLayout() {
//   return (
//     <div className="min-h-screen flex flex-col font-sans bg-black">
//       {/* <TopNav /> */}
//       <SideNav />
//       <main className="pt-[100px] flex-1 bg-gray p-20">
//         <Outlet />
//       </main>
//     </div>
//   );
// }

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <LogoBar />
      <div className="flex flex-1 overflow-hidden">
        <SideNav />
        <main className="flex-1 p-8 bg-gray-50 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}