'use client';

import { useState, useEffect } from 'react';
import * as Icon from 'react-feather';
import Image from 'next/image';
import Sidebar from './Sidebar';
import authService from '../service/authService';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Menu from './MenuUser';
import Link from 'next/link';
import Navbar from './Navbar';

export default function Header() {
  const [isMobileNavVisible, setMobileMenuOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState(''); // Initialize with an empty string or default value
  const [jenis, setJenis] = useState('');
  const [jabatan, setJabatan] = useState('');
  const names = name.split(' ');
  const firstTwoNames = names.slice(0, 2).join(' ');

  const router = useRouter();
  useEffect(() => {
    AOS.init({
      delay: 10,
      once: true,
    });
    const fetchData = async () => {
      try {
        const result = await authService.IsAuthenticated();

        if (result === false) {
          Swal.fire({
            icon: 'error',
            title: 'Anda Belum Login',
            text: 'Silahkan Login terlebih dahulu',
          }).then(() => {
            setTimeout(() => {
              router.push('/login');
            }, 1);
          });
        } else {
          setName(result.name);
          setJenis(result.jenis);
          setJabatan(result.jabatan);
        }
      } catch (error) {
        console.error(error); // Handle any errors
      }
    };

    fetchData();
  }, []); // Run once on component mount

  const toggleMobileNav = () => {
    setMobileMenuOpen(!isMobileNavVisible);
  };
  const toggleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* Header Dekstop */}
      <header className="w-full items-center bg-putih-200 h-20 lg:flex fixed top-0 right-0 justify-between z-10 shadow-md hidden">
        <div className="flex flex-row w-2/3 ml-8 justify-start">
          <div className="flex flex-row items-center h-auto w-full px-4">
            <div className="py-2 pr-2 flex">
              <Image src="/img/logo/logo-icon.png" alt="logo sidebar" width={54} height={54} />
            </div>
            <div className="py-2 text-primary-600 text-sm">
              <p className="lg:text-lg font-bold">Web Monitoring</p>
              <p className="">PKL 63</p>
            </div>
          </div>
          <div className="flex justify-center items-center w-full text-primary-600">
            <Navbar />
          </div>
        </div>
        <div className="profile flex w-max px-4">
          <div className="flex flex-col text-primary-600 pr-4">
            <p className="text-center">{firstTwoNames}</p>
            <p>
              {jenis} | {jabatan}
            </p>
          </div>
          <div className="text-white">
            <Icon.User onClick={toggleMenuOpen} className="h-full w-8 text-primary-600 hover:bg-primary-900 hover:text-white  transition-all  cursor-pointer rounded-full" />
            {isMenuOpen ? (
              <div className="absolute top-20 right-0">
                <Menu />
              </div>
            ) : null}
          </div>
        </div>
      </header>
      {/* Header Dekstop */}

      {/* Header Mobile */}
      <header className="w-full items-center bg-[#C4314E] h-16 flex fixed top-0 right-0 justify-between z-10 lg:hidden">
        <div className="w-fit text-white flex justify-start">
          <div className="ml-6">{isMobileNavVisible ? <Icon.X onClick={toggleMobileNav} /> : <Icon.AlignJustify onClick={toggleMobileNav} />}</div>
        </div>
        <div className="searchBar w-2/3 ml-4">
          <form>
            {/* <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> */}
            <div className="relative">
              <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm rounded-lg bg-[#F86A80]" placeholder="Cari..." required />
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
            </div>
          </form>
        </div>
        <div className="profile flex w-[20%] md:w-[15%] h-full px-2">
          <div className="text-white w-full  h-full relative">
            <Image onClick={toggleMenuOpen} src="/img/logo/logo-icon.png" fill={true} alt="maskot2" className="float-end" />
            {isMenuOpen ? (
              <div className="absolute top-16 -right-2">
                <Menu />
              </div>
            ) : null}
          </div>
        </div>
      </header>
      {/* Header Mobile */}

      {/* Mobile Navigation Menu */}

      <div className={`fixed left-0 h-screen top-0 w-64 bg-primary-800 z-[5] ${isMobileNavVisible ? `navOpen` : `navClose`}`}>
        <Sidebar />
      </div>
    </>
  );
}
