import React, { useState, useEffect } from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Accordion, AccordionItem } from '@nextui-org/react';

const Dropdown = () => {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [chevron, setChevron] = useState(true);
  const [selectedKeys, setSelectedKeys] = useState(new Set());

  useEffect(() => {
    if (currentPath.startsWith('/riset/daftar')) {
      setSelectedKeys(new Set(['1']));
    } else if (currentPath.startsWith('/riset/progres')) {
      setSelectedKeys(new Set(['2']));
    } else {
      setSelectedKeys(new Set());
    }
  }, [currentPath]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setChevron(!chevron);
  };

  return (
    <div className="relative">
      <button className={currentPath.startsWith('/riset/') ? 'underline underline-offset-8 flex flex-row' : 'hover:underline hover:underline-offset-8 transition-all  flex flex-row'} onClick={toggleDropdown}>
        <span>Riset</span>
        <div>{chevron ? <Icon.ChevronDown /> : <Icon.ChevronUp />}</div>
      </button>

      {isOpen && (
        <div className="absolute mt-2 -left-10 py-2 w-48 bg-putih-200 rounded-lg shadow-xl z-10">
          <Accordion selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
            <AccordionItem key="1" aria-label="Accordion 1" title="Daftar" className="ml-2">
              <ul className="block space-y-4">
                <li className={currentPath === 'riset/daftar/daftar-listing' ? 'bg-primary-700 text-white rounded-md px-4 py-2' : 'hover:bg-primary-700 hover:text-white transition-all rounded-md px-4 py-2'}>
                  <Link href="riset/daftar/daftar-listing">Daftar Listing</Link>
                </li>
                <li className={currentPath === '/riset/daftar/daftar-sampel' ? 'bg-primary-700 text-white rounded-md px-4 py-2' : 'hover:bg-primary-700 hover:text-white transition-all rounded-md px-4 py-2'}>
                  <Link href="/riset/daftar/daftar-sampel">Daftar Sampel</Link>
                </li>
                <li className={currentPath === '/riset/daftar/daftar-pertim' ? 'bg-primary-700 text-white rounded-md px-4 py-2' : 'hover:bg-primary-700 hover:text-white transition-all rounded-md px-4 py-2'}>
                  <Link href="/riset/daftar/daftar-pertim">Daftar Per Tim</Link>
                </li>
              </ul>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Progress" className="ml-2">
              <ul className="block space-y-4">
                <li className={currentPath === '/riset/progres/progres-wilayah' ? 'bg-primary-700 text-white rounded-md px-4 py-2' : 'hover:bg-primary-700 hover:text-white transition-all rounded-md px-4 py-2'}>
                  <Link href="/riset/progres/progres-wilayah">Progress Wilayah</Link>
                </li>
                <li className={currentPath === '/riset/progres/progres-tim' ? 'bg-primary-700 text-white rounded-md px-4 py-2' : 'hover:bg-primary-700 hover:text-white transition-all rounded-md px-4 py-2'}>
                  <Link href="/riset/progres/progres-tim">Progress Per tim</Link>
                </li>
              </ul>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
