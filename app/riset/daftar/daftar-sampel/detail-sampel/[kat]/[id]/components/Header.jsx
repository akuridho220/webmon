import * as Icon from 'react-feather';
import HandleExport from '@/app/components/HandleExport';

const dataToExport = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Doe', age: 40 },
];
const Export = () => {
  HandleExport(dataToExport, 'Detail-Sampel');
};

export default function Header() {
  return (
    <div className="flex w-[100%] justify-between">
      <div className="w-[10%]"></div>
      <div>
        <button onClick={Export} className="flex items-center justify-center bg-secondary-800 py-2 px-6 w-fit rounded-lg text-white hover:bg-secondary-900">
          <Icon.Download size={18} />
          <p className=" pl-4">Export</p>
        </button>
      </div>
    </div>
  );
}
