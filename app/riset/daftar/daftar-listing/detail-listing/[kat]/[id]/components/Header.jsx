'use client';
import React from 'react';
import * as Icon from 'react-feather';
import HandleExport from '@/app/components/HandleExport';

export default function Header() {
  // const [showModalBS, setShowModalBS] = useState(false);
  return (
    <div className="">
      <div className="flex py-2 w-[100%] justify-between">
        <div className="w-[10%]"></div>
        <div>
          <button onClick={HandleExport} className="flex items-center justify-center bg-secondary-800 py-2 px-6 w-fit rounded-lg text-white hover:bg-secondary-900">
            <Icon.Download size={18} />
            <p className=" pl-4">Export</p>
          </button>
        </div>
      </div>
    </div>
  );
}
