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
            <div className="flex flex-col items-center">
              <KabupatenDropdown onSelect={handleKabupatenSelect} />
              <div className="mt-4">
                <KecamatanDropdown onSelect={handleKecamatanSelect} />
              </div>
              <div className="mt-4">
                <KelurahanDropdown onSelect={handleKelurahanSelect} />
              </div>
            </div>
          </>
  );
};

export default WilayahSelect;
