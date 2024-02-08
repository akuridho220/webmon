import React, { useState } from 'react';
import DropdownDaftar from './DropdownDaftar';
import DropdownProgres from './DropdownProgres';
import * as Icon from 'react-feather';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [chevron, setChevron] = useState(true)

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setChevron(!chevron);
    };

  return (
    <div className="relative">
      <button
        className="flex flex-row"
        onClick={toggleDropdown}
      >
        <span>Riset</span>
        <div>
          {chevron ? <Icon.ChevronDown/> : <Icon.ChevronUp />}
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 ml-16 py-2 w-32 bg-putih-100 rounded-lg shadow-xl z-10">
          <ul>
            <li className="hover:bg-gray-100 border-b justify-start">
              <div className="block px-2 text-primary-600">
                <DropdownDaftar title={'Daftar'}/>
              </div>
            </li>
            <li className="hover:bg-gray-100">
              <div className="block px-2 text-primary-600">
                <DropdownProgres title={'Progres'}/>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
