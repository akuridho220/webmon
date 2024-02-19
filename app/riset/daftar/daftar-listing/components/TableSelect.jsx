import React from 'react';
import TableBlokSensus from './TableBlokSensus';
import TableDesaKelurahan from './TableDesa';
import TableKecamatan from './TableKecamatan';
import TableKeseluruhan from './TableKeseluruhan';
import TableKabupaten from './TableKabupaten';

const TableSelect = ({ selectedCategory, dataBs, dataKec, dataDesa, dataKab, dataAll }) => {
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
        return <TableKeseluruhan data={dataAll}/>;
      default:
        return <TableBlokSensus data={dataBs} />;
    }
  };

  return <>{renderTable()}</>;
};

export default TableSelect;
