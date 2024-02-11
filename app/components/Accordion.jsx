'use client';

import { useState, useEffect } from 'react';
import * as Icon from 'react-feather';
import AccordionChild from './AccordionChild';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Accordion() {
  const currentPath = usePathname();
  const [accordionOpen, setAccordionOpen] = useState(false);

  useEffect(() => {
    if (currentPath.startsWith('/riset/')) {
      setAccordionOpen(true);
    } else {
      setAccordionOpen(false);
    }
  }, [currentPath]);

  return (
    <div className={`py-2 hover:bg-[#8d2b3c] text-primary-900 hover:text-white transition-all ${currentPath.startsWith('/riset/') ? 'text-white bg-[#8d2b3c]' : ''}`}>
      <h2>
        <button
          className="flex items-center justify-between w-full text-left font-semibold py-2 "
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-01`}
        >
          <div className="flex items-center pl-6">
            <div className="grow-0 pr-4">
              <Icon.FileText />
            </div>
            <span>Riset</span>
          </div>
        </button>
      </h2>
      <div
        id={`accordion-text-01`}
        role="region"
        aria-labelledby={`accordion-title-01`}
        className={`grid text-base  overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <AccordionChild title={'Daftar'} active={false}>
            <Link href="/riset/daftar/daftar-listing" className="flex items-center py-4 pl-14 nav-item">
              <Icon.ChevronRight size={12} />
              <span className="pl-4">Daftar Listing</span>
            </Link>
            <Link href="/riset/daftar/daftar-sampel" className="flex items-center py-4 pl-14 nav-item">
              <Icon.ChevronRight size={12} />
              <span className="pl-4">Daftar Sampel</span>
            </Link>
            <Link href="/riset/daftar/daftar-pertim" className="flex items-center py-4 pl-14 nav-item">
              <Icon.ChevronRight size={12} />
              <span className="pl-4">Daftar Per Tim</span>
            </Link>
          </AccordionChild>
          <AccordionChild title={'Progres'} active={false}>
            <Link href="/riset/progres/progres-wilayah" className="flex items-center py-4 pl-14 nav-item">
              <Icon.ChevronRight size={12} />
              <span className="pl-4">Progres Wilayah</span>
            </Link>
            <Link href="/riset/progres/progres-tim" className="flex items-center py-4 pl-14      nav-item">
              <Icon.ChevronRight size={12} />
              <span className="pl-4">Progres Per Tim</span>
            </Link>
          </AccordionChild>
        </div>
      </div>
    </div>
  );
}
