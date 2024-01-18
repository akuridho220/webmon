import React from 'react';
import BlokSensusTable from './BlokSensusTable'; // Import your specific components
import DesaTable from './DesaTable';
import KecamatanTable from './KecamatanTable';
import KabupatenTable from './KabupatenTable';

const autoTable = ({ params }) => {
  let judul = '';
  let content = null;

  if (params.kat === 'bs') {
    judul = `Detail listing blok sensus ${params.id}`;
    content = <BlokSensusTable />;
  } else if (params.kat === 'desa') {
    judul = `Detail listing desa ${params.id}`;
    content = <DesaTable />;
  } else if (params.kat === 'kec') {
    judul = `Detail listing kecamatan ${params.id}`;
    content = <KecamatanTable />;
  } else if (params.kat === 'kab') {
    judul = `Detail listing kabupaten ${params.id}`;
    content = <KabupatenTable />;
  }

  return { judul, content };
};

export default autoTable;
