import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/LogoARMW.png';

export default function TopNav() {
  const menuItems = [
    { label: '공정 현황', path: '/' },
    { label: '설비 모니터링', path: '/monitor' },
    { label: '이상 리포트', path: '/alerts' },
    { label: '메타포트 뷰어', path: '/matterport' },
  ];

  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 50) {
        setHidden(true); // 아래로 스크롤: 숨김
      } else {
        setHidden(false); // 위로 스크롤: 보임
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full px-20 py-5 bg-white shadow-sm z-50 transition-transform duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="w-full flex items-center justify-between">
        <div className="font-bold text-xl text-brand">ARMW</div>
        <nav className="flex gap-10 text-sm font-light text-gray-600">
          {menuItems.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `transition-all duration-200 hover:text-black ${
                  isActive ? 'font-medium text-black' : ''
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="text-xs text-gray-500">사이트 정보</div>
      </div>
    </header>
  );
}
