import React from 'react';
import * as Icon from 'react-feather';
// import ModalBS from './detailBS';

export default function Header(){
    // const [showModalBS, setShowModalBS] = useState(false);
    return(
    <div className=''>
       {/* <div className="flex items-center justify-center pt-5 pb-3 w-fit rounded-lg text-white">
            <p>Progress Detail Sampling: </p>
          </div> */}
        <div className="flex py-2 w-[100%] justify-between">
            <div className="w-[10%]">
            </div>
            <div>
              <button className="flex items-center justify-center bg-secondary-800 py-2 px-6 w-fit rounded-lg text-white hover:bg-secondary-900">
                <Icon.Download size={18} />
                <p className=" pl-4">Export</p>
              </button>
            </div>
          {/* <div className="w+[10%]">
            <button
              className="flex items-center justify-left bg-secondary-800 py-2 px-6 w-fit rounded-lg text-white hover:bg-secondary-900"
              onClick={() => setShowModalBS(true)}
            >
              <Icon.Info size={20} />
              <p className="pl-2"> Tentang BS</p>
            </button>
            {showModalBS && <ModalBS onClosed={() => setShowModalBS(false)} dataBS = {data}  />}
          </div> */}
        </div>
    </div>
    )
}
