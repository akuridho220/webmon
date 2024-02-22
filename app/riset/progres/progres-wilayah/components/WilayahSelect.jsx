'use client';
import React from 'react';
import KecamatanDropdown from './KecamatanDropdown';
import KabupatenDropdown from './KabupatenDropdown';
import KelurahanDropdown from './KelurahanDropdown';

const WilayahSelect = ({ onSelect }) => {
  const handleKabupatenSelect = (selectedKab) => {};
  const handleKecamatanSelect = (selectedKec) => {};
  const handleKelurahanSelect = (selectedKel) => {};
  return (
          <>
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="mr-4 mb-3 md:mb-0" style={{ width: '310px' }}>
                <KabupatenDropdown onSelect={handleKabupatenSelect} />
              </div>
              <div className="mr-4 mb-3 md:mb-0" style={{ width: '310px' }}>
                <KecamatanDropdown onSelect={handleKecamatanSelect} />
              </div>
              <div className="mr-4 mb-3 md:mb-0" style={{ width: '310px' }}>
                <KelurahanDropdown onSelect={handleKelurahanSelect} />
              </div>
            </div>
          </>
  );
};

export default WilayahSelect;
