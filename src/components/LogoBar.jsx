import logo from '../assets/LogoARMW.png';
import user from '../assets/AvatarPlaceholder.png';
import { div } from 'three/tsl';

export default function LogoBar() {
  return (
    <div className="flex items-center justify-between h-20 bg-[#E2EDF4] shadow px-4">
      <img src={logo} alt="ARMW Logo" className="h-12 object-contain" />
      <img src={user} alt="User Logo" className="h-6 rounded-full cursor-pointer hover:brightness-110"  />
    </div>
  );
}
