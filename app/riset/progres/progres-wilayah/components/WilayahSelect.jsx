"use client";
import React from "react";
import KecamatanDropdown from "./KecamatanDropdown";
import KabupatenDropdown from "./KabupatenDropdown";
import KelurahanDropdown from "./KelurahanDropdown";

const WilayahSelect = ({ onSelect }) => {
  const handleKabupatenSelect = (selectedKab) => {};
  const handleKecamatanSelect = (selectedKec) => {};
  const handleKelurahanSelect = (selectedKel) => {};
  return (
          <>
            <div className="flex items-center">
              <KabupatenDropdown onSelect={handleKabupatenSelect} />
              <div className="ml-4">
                <KecamatanDropdown onSelect={handleKecamatanSelect} />
              </div>
              <div className="ml-4">
                <KelurahanDropdown onSelect={handleKelurahanSelect} />
              </div>
            </div>
          </>
  );
};

export default WilayahSelect;
