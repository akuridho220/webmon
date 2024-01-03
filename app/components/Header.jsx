'use client';

import { useState } from 'react';
import * as Icon from 'react-feather';
import Image from 'next/image';
import Sidebar from './Sidebar';

export default function Header() {
  const [isMobileNavVisible, setMobileMenuOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileMenuOpen(!isMobileNavVisible);
  };
  return (
    <>
      {/* Header Dekstop */}
      <header className="w-full items-center bg-[#C4314E] h-20 pr-6 pl-64 lg:flex fixed top-0 right-0 justify-between z-10 hidden">
        <div className="searchBar w-2/3 ml-8">
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
        <div className="profile flex w-max px-4">
          <div className="flex flex-col text-white pr-4">
            <p>Nama Orang</p>
            <p>Jabatan | Bidang</p>
          </div>
          <div className="text-white">
            <p>FOTO</p>
          </div>
        </div>
      </header>
      {/* Header Dekstop */}

      {/* Header Mobile */}
      <header className="w-full items-center bg-[#C4314E] h-20 flex fixed top-0 right-0 justify-between z-10 lg:hidden">
        <div className="w-fit text-white flex justify-start">
          <div className="ml-6">{isMobileNavVisible ? <Icon.X onClick={toggleMobileNav} /> : <Icon.AlignJustify onClick={toggleMobileNav} />}</div>
        </div>
        <div className="searchBar w-2/3 ml-8">
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
            <Image src="/img/logo/logo-icon.png" fill={true} alt="maskot2" className="float-end" />
          </div>
        </div>
      </header>
      {/* Header Mobile */}

      {/* Mobile Navigation Menu */}
      {isMobileNavVisible && (
        <div className="fixed left-0 h-screen top-0 w-64 bg-primary-800 z-[5] transform transition-all translate-x-0">
          <Sidebar />
        </div>
      )}
    </>
  );
}
