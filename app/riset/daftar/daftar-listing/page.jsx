// import React from 'react';
import Layout from '@/app/layout/layout';
import Box from './components/Box';
import SelectTabel from './components/SelectTable';
import { data } from 'autoprefixer';

const fetchData = async (url) => {
  const response = await fetch(url, { next: { revalidate: 60 } });
  return await response.json();
};

const getDataBs = async () => {
  const [dataListing] = await Promise.all([fetchData('http://localhost:3100/api/riset/daftar/listing/bs')]);
  return dataListing;
};

const getDataKec = async () => {
  const [dataListing] = await Promise.all([fetchData('http://localhost:3100/api/riset/daftar/listing/kec')]);
  return dataListing;
};

const getDataDesa = async () => {
  const [dataListing] = await Promise.all([fetchData('http://localhost:3100/api/riset/daftar/listing/desa')]);
  return dataListing;
};

const getDataKab = async () => {
  const [dataListing] = await Promise.all([fetchData('http://localhost:3100/api/riset/daftar/listing/kab')]);
  return dataListing;
};

export default async function DaftarListing() {
  const dataBs = getDataBs();
  const dataKec = getDataKec();
  const dataDesa = getDataDesa();
  const dataKab = getDataKab();

  const [bs, kec, desa, kab] = await Promise.all([dataBs, dataKec, dataDesa, dataKab]);
  return (
    <>
      <Layout className="w-full min-h-screen overflow-x-hidden">
        <Box />
        <SelectTabel dataBs={bs} dataKec={kec} dataDesa={desa} dataKab={kab} />
      </Layout>
    </>
  );
}
