'use client';
import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import Swal from 'sweetalert2';
import cookieCutter from 'cookie-cutter';
import { useRouter, usePathname } from 'next/navigation';
import authService from '../service/authService';

export default function Menu() {
  const currentPath = usePathname();
  const router = useRouter();
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
    <div className="rounded-b-xl overflow-hidden shadow-lg md:w-fit w-48 justify-center flex items-center  pt-2  bg-putih-200 text-primary-600">
      <ul className="text-sm md:text-base font-semibold">
        <li>
          <Link href="/profile" className={currentPath === '/profile' ? 'flex items-center py-4 px-6 nav-item bg-primary-700 text-white ' : 'flex items-center py-4 px-6 nav-item hover:bg-primary-700 hover:text-white transition-all'}>
            <Icon.User />
            <span className="pl-4">Profile Saya</span>
          </Link>
        </li>
        <hr className="w-[90%] mx-auto shadow-md bg-white" />
        <li>
          <div onClick={HandleLogout} className="flex cursor-pointer items-center py-4 px-6 nav-item hover:bg-primary-700 hover:text-white  transition-all">
            <Icon.LogOut />
            <span className="pl-4">Keluar</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
