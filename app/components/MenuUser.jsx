'use client';
import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import Swal from 'sweetalert2';
import cookieCutter from 'cookie-cutter';
import { useRouter } from 'next/navigation';
import authService from '../service/authService';

export default function Menu() {
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
    <div className="rounded-b-lg shadow-lg md:w-fit w-48 justify-center flex items-center  pt-2 pb-4 bg-primary-800/90 text-white">
      <ul className="space-y-3 text-sm md:text-base font-semibold">
        <li>
          <Link href="/profile" className="flex items-center py-4 px-6 nav-item hover:bg-[#8d2b3c]">
            <Icon.User />
            <span className="pl-4">Profile Saya</span>
          </Link>
        </li>
        <hr className="w-[90%] mx-auto shadow-md bg-white" />
        <li>
          <div onClick={HandleLogout} className="flex cursor-pointer items-center py-4 px-6 nav-item hover:bg-[#8d2b3c]">
            <Icon.LogOut />
            <span className="pl-4">Keluar</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
