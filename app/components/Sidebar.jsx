'use client';

import * as Icon from 'react-feather';
import Accordion from './Accordion';
import Link from 'next/link';
import authService from '../service/authService';
import Image from 'next/image';
import Swal from 'sweetalert2';
import cookieCutter from 'cookie-cutter';
import { useRouter, usePathname } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();
  const currentPath = usePathname();
  const HandleLogout = async () => {
    const result = await authService.Logout();

    if (result === true) {
      Swal.fire({
        icon: 'success',
        title: 'Logout',
        text: 'Berhasil Logout, Sampai jumpa lagi!',
      }).then(() => {
        setTimeout(() => {
          cookieCutter.set('accessToken', '', { expires: new Date(0) });
          router.push('/login');
        }, 1);
      });
    } else {
      console.log('Login failed', result);
      Swal.fire({
        title: 'Error!',
        text: result,
        icon: 'error',
      });
    }
  };
  return (
    <aside className="flex flex-col justify-between items-stretch w-full bg-putih-200 h-screen no-scrollbar overflow-y-auto shadow-xl">
      <div className="">
        <div className="flex flex-row items-center h-auto w-full px-4">
          <div className="py-2 pr-2 flex">
            <Image src="/img/logo/logo-icon.png" alt="logo sidebar" width={54} height={54} />
          </div>
          <div className="py-2">
            <p className="lg:text-lg text-sm text-primary-900 font-bold">Web Monitoring</p>
            <p className="text-primary-900 text-sm">PKL 63</p>
          </div>
        </div>
        <div>
          <nav className="text-primary-900 lg:text-lg text-sm font-semibold">
            <Link href="/dashboard" className={`flex items-center py-4 pl-6 nav-item hover:bg-[#8d2b3c] hover:text-white transition-all ${currentPath === '/dashboard' ? 'bg-[#8d2b3c] text-white' : ''}`}>
              <Icon.Home />
              <span className="pl-4">Dashboard</span>
            </Link>
            <Accordion />
            <Link href="/monitoring-pcl" className={`flex items-center py-4 pl-6 nav-item hover:bg-[#8d2b3c] hover:text-white transition-all ${currentPath === '/monitoring-pcl' ? 'bg-[#8d2b3c] text-white' : ''}`}>
              <Icon.MapPin />
              <span className="pl-4">Lokasi PCL</span>
            </Link>
            <Link href="/pusat-bantuan/faq" className={`flex items-center py-4 pl-6 nav-item hover:bg-[#8d2b3c] hover:text-white transition-all ${currentPath === '/pusat-bantuan/faq' ? 'bg-[#8d2b3c] text-white' : ''}`}>
              <Icon.HelpCircle />
              <span className="pl-4">FAQ</span>
            </Link>
          </nav>
        </div>
      </div>
    </aside>
  );
}
