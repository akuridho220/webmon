'use client';
import { useState } from 'react';
import * as Icon from 'react-feather';
import Accordion from './Accordion';
import Link from 'next/link';

export default function Sidebar() {
    // const [risets, setRisets] = useState([
    //     {
    //         key: 1,
    //         title: 'Riset',
    //         isOpen: false
    //     }
    // ]);

    // const toggleAccordion = (accordionkey) => { 
    //     const updatedAccordions = risets.map((accord) => { 
    //         if (accord.key === accordionkey) { 
    //             return { ...accord, isOpen: !accord.isOpen }; 
    //         } else { 
    //             return { ...accord, isOpen: false }; 
    //         } 
    //     }); 
    //     setRisets(updatedAccordions); 
    // };

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
                        <Link href="/dashboard" className="flex items-center py-4 pl-6 nav-item">
                            <div className="grow-0 pr-4">
                                <Icon.Home />
                            </div>
                            Dashboard
                        </Link>
                        <Link href="" className="flex items-center py-4 pl-6 nav-item">
                            <div className="grow-0 pr-4">
                                <Icon.FileText />
                            </div>
                            Riset
                        </Link>
                        {/* {risets.map((riset) => (
                            <Accordion
                                key={1}
                                title={riset.title}
                                data={riset.data}
                                isOpen={riset.isOpen}
                                toggleAccordion={()=>toggleAccordion(riset.key)}
                            />
                        ))} */}
                        <Link href="/monitoring" className="flex items-center py-4 pl-6 nav-item">
                            <div className="grow-0 pr-4">
                                <Icon.MapPin />
                            </div>
                            Lokasi PPL
                        </Link>
                        <Link href="faq" className="flex items-center py-4 pl-6 nav-item">
                            <div className="grow-0 pr-4">
                                <Icon.Search />
                            </div>
                            FAQ
                        </Link>
                    </nav>
                </div>
            </div>
            <div className="pb-4">
                <nav className="text-white text-lg font-semibold">
                    <Link href="/profile" className="flex items-center py-4 pl-6 nav-item">
                        <div className="grow-0 pr-4">
                            <Icon.User />
                        </div>
                    Profil Saya
                    </Link>
                    <Link href="" className="flex items-center py-4 pl-6 nav-item">
                        <div className="grow-0 pr-4">
                            <Icon.LogOut />
                        </div>
                        Logout
                    </Link>
                </nav>
            </div>
        </aside>
    );
};
