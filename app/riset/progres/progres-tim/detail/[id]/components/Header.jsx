'use client';
import React from 'react';
import * as Icon from 'react-feather';
import Swal from 'sweetalert2';
// import ModalBS from './detailBS';

export default function Header() {
  const HandleExport = () => {
    Swal.fire({
      title: 'Export Data',
      text: 'Pilih Format Export Data',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Excel',
      cancelButtonText: 'PDF',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Error', 'Maaf Fitur belum terimplementasi', 'error');
      } else {
        Swal.fire('Error', 'Maaf Fitur belum terimplementasi', 'error');
      }
    });
  };
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