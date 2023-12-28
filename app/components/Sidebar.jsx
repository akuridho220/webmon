'use client';

import * as Icon from 'react-feather';
import Accordion from './Accordion';
import Link from 'next/link';

export default function Sidebar() {
    return (
        <aside className="flex flex-col justify-between items-stretch w-1/5 fixed top-0 left-0 bg-[#951A2E] h-screen shadow-xl">
            <div className="">
                <div className="flex flex-row items-center h-auto w-full px-4">
                    <div className="p-2 flex">
                        <img src="/img/logo/logo-icon.png" alt="logo sidebar" width={72} height={70}/>
                    </div>
                    <div className="p-2">
                        <p className="text-lg text-white font-bold">Web Monitoring</p>
                        <p className="text-white text-sm">PKL 63</p>
                    </div>
                </div>
                <div>
                    <nav className="text-white text-lg font-semibold">
                        <Link href="/dashboard" className="flex items-center py-4 pl-6 nav-item hover:bg-[#8d2b3c]">
                            <Icon.Home/>
                            <span className='pl-4'>Dashboard</span>
                        </Link>
                        <Accordion />
                        <Link href="/monitoring-pcl" className="flex items-center py-4 pl-6 nav-item hover:bg-[#8d2b3c]">
                            <Icon.MapPin/>
                            <span className='pl-4'>Lokasi PCL</span>
                        </Link>
                        <Link href="faq" className="flex items-center py-4 pl-6 nav-item hover:bg-[#8d2b3c]">
                            <Icon.HelpCircle/>
                            <span className='pl-4'>FAQ</span>
                        </Link>
                    </nav>
                </div>
            </div>
            <div className="pb-4">
                <nav className="text-white text-lg font-semibold">
                    <Link href="/profile" className="flex items-center py-4 pl-6 nav-item hover:bg-[#8d2b3c]">
                        <Icon.User/>
                        <span className='pl-4'>Profile Saya</span>
                    </Link>
                    <Link href="" className="flex items-center py-4 pl-6 nav-item hover:bg-[#8d2b3c]">
                        <Icon.LogOut/>
                        <span className='pl-4'>Keluar</span>
                    </Link>
                </nav>
            </div>
        </aside>
    );
};
