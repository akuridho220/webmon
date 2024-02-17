'use client';
import WilayahSelect from './WilayahSelect';
import TableWilayah from './TableProgressPerWilayah';
import ProgressBar from './ProgressBar';
import * as Icon from 'react-feather';
import HandleExport from '@/app/components/HandleExport';

const Content = () => (
  <>
    <div className="bg-primary-600 w-5/6 mt-8 px-6">
      <div className="flex text-white py-4">
        <p className="font-medium">Monitoring PPL Berdasarkan Wilayah</p>
      </div>
      <div className="flex text-white py-4">
        <p className="font-medium">Filter</p>
      </div>
      <div className="flex justify-between mb-4">
        {/* <div className='flex flex-row items-center '> */}
        <WilayahSelect />
        {/* </div> */}
        <div onClick={HandleExport} className="flex items-center bg-secondary-800 py-2 px-4 rounded-lg text-white hover:bg-secondary-900">
          <Icon.Download size={18} />
          <button className=" pl-4">Export</button>
        </div>
      </div>
      <ProgressBar detail={true} done={6} max={35} />
      <TableWilayah />
    </div>
  </>
);

export default Content;
