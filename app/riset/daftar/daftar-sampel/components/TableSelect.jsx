import React from 'react';
import TableBlokSensus from './TableBS';
import TableDesaKelurahan from './TableDesa';
import TableKecamatan from './TableKec';
import TableKeseluruhan from './TableAll';
import TableKabupaten from './TableKab';

const TableSelect = ({ selectedCategory, dataBs, dataKec, dataDesa, dataKab }) => {
  const renderTable = () => {
    switch (selectedCategory) {
      case 'blok sensus':
        return <TableBlokSensus data={dataBs} />;
      case 'desa/kelurahan':
        return <TableDesaKelurahan data={dataDesa} />;
      case 'kecamatan':
        return <TableKecamatan data={dataKec} />;
      case 'kabupaten':
        return <TableKabupaten data={dataKab} />;
      case 'keseluruhan':
        return <TableKeseluruhan />;
      default:
        return <TableBlokSensus data={dataBs} />;
    }
  };

  return <>{renderTable()}</>;
};

export default TableSelect;