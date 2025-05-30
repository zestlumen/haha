import { NavLink } from 'react-router-dom';
import logo from '../assets/LogoARMW.png';

export default function SideNav() {
  const menuItems = [
    { label: '공정 현황', path: '/' },
    { label: '설비 모니터링', path: '/monitor' },
    { label: '이상 리포트', path: '/alerts' },
    { label: 'PQCD', path: '/pqcd' },
    { label: '즉흥적인', path: '/jeukheung' },
  ];

  return (
    <aside className="w-[200px] min-h-screen bg-white shadow-md flex flex-col px-6 py-8">
      <nav className="flex flex-col gap-6 text-sm text-gray-700">
        {menuItems.map(({ label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `transition-all hover:text-black ${
                isActive ? 'font-semibold text-brand' : ''
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto text-xs text-gray-400 pt-10">로그인</div>
    </aside>
  );
}
