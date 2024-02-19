'use client';
import { useEffect, useState } from 'react';

const ProgressBar = ({ detail, done, max }) => {
  // const [dataCacah, setDataCacah] = useState(data);
  // const [done, setDone] = useState(data[0].jumlah_sampel_selesai);
  // const [max, setMax] = useState(data[0].jumlah_sampel);
  // const [done, setDone] = useState(0);
  // const [max, setMax] = useState(0);
  
  let dataProgress;
  if (max == 0) {
    dataProgress = 0;
  } else {
    dataProgress = Math.round((done / max) * 100);
  }
  const [progress, setProgress] = useState(dataProgress);

  return (
    <div className="pt-1">
      {detail && ( // Kondisional rendering berdasarkan nilai detail
        <div id="detail" className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
              {done} Selesai dari {max} Sampel
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">{`${progress}%`}</span>
          </div>
        </div>
      )}
      <div className="flex h-2 mb-4 overflow-hidden bg-red-100">
        <div style={{ width: `${progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
