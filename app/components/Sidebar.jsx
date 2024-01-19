'use client';

import { useState } from 'react';
import * as Icon from 'react-feather';
import Accordion from './Accordion';
import Link from 'next/link';
import authService from '../service/authService';
import Swal from 'sweetalert2';
import cookieCutter from 'cookie-cutter';

export default function Sidebar() {
  const [logoutError, setLogoutError] = useState(null);

  const handleLogout = async () => {
    const result = await authService.Logout();

    if (result === true) {
      Swal.fire({
        icon: 'success',
        title: 'Logout successful',
        text: 'See you soon!',
        showConfirmButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          cookieCutter.set('accessToken', '', { expires: new Date(0) });
          window.location.href = '/login';
        }
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
    <aside className="flex flex-col justify-between items-stretch w-full bg-primary-900 h-screen no-scrollbar overflow-y-auto shadow-xl">
      <div className="">
        <div className="flex flex-row items-center h-auto w-full px-4">
          <div className="py-2 pr-2 flex">
            <img src="/img/logo/logo-icon.png" alt="logo sidebar" width={54} />
          </div>
          <div className="py-2">
            <p className="lg:text-lg text-sm text-white font-bold">Web Monitoring</p>
            <p className="text-white text-sm">PKL 63</p>
          </div>
        </div>
        <div>
          <nav className="text-white lg:text-lg text-sm font-semibold">
            <Link href="/dashboard" className="flex items-center py-4 pl-6 nav-item hover:bg-[#8d2b3c]">
              <Icon.Home />
              <span className="pl-4">Dashboard</span>
            </Link>
            <Accordion />
            <Link href="/monitoring-pcl" className="flex items-center py-4 pl-6 nav-item hover:bg-[#8d2b3c]">
              <Icon.MapPin />
              <span className="pl-4">Lokasi PCL</span>
            </Link>
            <Link href="/pusat-bantuan/faq" className="flex items-center py-4 pl-6 nav-item hover:bg-[#8d2b3c]">
              <Icon.HelpCircle />
              <span className="pl-4">FAQ</span>
            </Link>
          </nav>
        </div>
      </div>
      <div className="pb-4">
        <nav className="text-white lg:text-lg text-sm font-semibold">
          <Link href="/profile" className="flex items-center py-4 pl-6 nav-item hover:bg-[#8d2b3c]">
            <Icon.User />
            <span className="pl-4">Profile Saya</span>
          </Link>
          <div onClick={handleLogout} className="flex cursor-pointer items-center py-4 pl-6 nav-item hover:bg-[#8d2b3c]">
            <Icon.LogOut />
            <span className="pl-4">Keluar</span>
          </div>
        </nav>
      </div>
    </aside>
  );
}
