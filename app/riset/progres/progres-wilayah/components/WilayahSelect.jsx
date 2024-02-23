'use client';
import React, {useState} from 'react';
import KecamatanDropdown from './KecamatanDropdown';
import KabupatenDropdown from './KabupatenDropdown';
import KelurahanDropdown from './KelurahanDropdown';


const WilayahSelect = ({ onSelect, listKab, listKec, listDesa }) => {
  const [kec, setKec] = useState(listKec);
  const [desa, setDesa] = useState(listDesa);

  const handleKabupatenSelect = (selectedKab) => {
    setKec(listKec.filter((item) => item.id_kab == selectedKab));
    setDesa(listDesa.filter((item) => item.id_kab == selectedKab));

    onSelect(selectedKab);
  };
  const handleKecamatanSelect = (selectedKec) => {
    setDesa(listDesa.filter((item) => item.id_kab == selectedKec.substring(0,2) && item.id_kec == selectedKec.substring(2,5)));

    onSelect(selectedKec);
  };
  const handleKelurahanSelect = (selectedKel) => {
    onSelect(selectedKel);
  };
  return (
          <>
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="mr-4 mb-3 md:mb-0" style={{ width: '310px' }}>
                <KabupatenDropdown onSelect={handleKabupatenSelect} dataListKab={listKab}/>
              </div>
              <div className="mr-4 mb-3 md:mb-0" style={{ width: '310px' }}>
                <KecamatanDropdown onSelect={handleKecamatanSelect} dataListKec={kec}/>
              </div>
              <div className="mr-4 mb-3 md:mb-0" style={{ width: '310px' }}>
                <KelurahanDropdown onSelect={handleKelurahanSelect} dataListDesa={desa}/>
              </div>
            </div>
          </>
  );
};

export default WilayahSelect;
