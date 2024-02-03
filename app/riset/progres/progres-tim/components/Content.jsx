'use client';
import TimSelect from './TimSelect';
import TableTim from './TableProgressPerTim';
import * as Icon from 'react-feather';
import ProgressBar from './ProgressBar';
import Swal from 'sweetalert2';

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

const Content = () => (
  <>
    <div className="bg-primary-600 w-5/6 mt-8 px-6">
      <div className="flex text-white py-4">
        <p className="font-medium">Monitoring PPL Berdasarkan Tim</p>
      </div>
      <div className="flex justify-between mb-4">
        {/* <div className='flex flex-row items-center '> */}
        <TimSelect />
        {/* </div> */}
        <div onClick={HandleExport} className="flex items-center bg-secondary-800 py-2 px-4 rounded-lg text-white hover:bg-secondary-900">
          <Icon.Download size={18} />
          <button className=" pl-4">Export</button>
        </div>
      </div>
      <ProgressBar detail={true} done={6} max={35} />
      <TableTim />
    </div>
    ;
  </>
);

export default Content;
