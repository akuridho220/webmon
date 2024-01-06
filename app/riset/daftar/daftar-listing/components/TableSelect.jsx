'use client';
import React from 'react';
import TableBlokSensus from './TableBlokSensus';
import TableDesaKelurahan from './TableDesa';
import TableKecamatan from './TableKecamatan';
import TableKeseluruhan from './TableKeseluruhan';
import TableKabupaten from './TableKabupaten';

const TableSelect = ({ selectedCategory, dataBs }) => {
  const renderTable = () => {
    switch (selectedCategory) {
      case 'blok sensus':
        return <TableBlokSensus data={dataBs} />;
      case 'desa/kelurahan':
        return <TableDesaKelurahan />;
      case 'kecamatan':
        return <TableKecamatan />;
      case 'kabupaten':
        return <TableKabupaten />;
      case 'keseluruhan':
        return <TableKeseluruhan />;
      default:
        return <TableBlokSensus data={dataBs}/>;
    }
  };

  return <>{renderTable()}</>;
};

export default TableSelect;
