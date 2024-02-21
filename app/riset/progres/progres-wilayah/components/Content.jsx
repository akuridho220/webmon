'use client';
import WilayahSelect from './WilayahSelect';
import TableWilayah from './TableProgressPerWilayah';
import ProgressBar from './ProgressBar';
import * as Icon from 'react-feather';
import HandleExport from '@/app/components/HandleExport';

const dataToExport = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Doe', age: 40 },
];
const Export = () => {
  HandleExport(dataToExport, 'Progres-Tim');
};

const Content = ({ data, listKab }) => (
  <>
    <div className="bg-primary-900/95 w-[90%] mt-8 px-6 rounded-xl overflow-hidden">
      <div className="block md:flex justify-between mb-4 pt-6">
        <div className="w-[90%] md:w-fit  justify-start">
          <WilayahSelect />
        </div>
        <div onClick={Export} className="flex items-center bg-secondary-800 py-2 px-4 rounded-lg text-white hover:bg-secondary-900 my-3 md:my-0">
          <Icon.Download size={18} />
          <button className=" pl-4 text-sm md:text-base">Export</button>
        </div>
      </div>
      <ProgressBar />
      <TableWilayah />
    </div>
  </>
);

export default Content;
