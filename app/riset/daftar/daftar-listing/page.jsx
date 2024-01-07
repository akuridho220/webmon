// import React from 'react';
import Layout from '@/app/layout/layout';
import Box from './components/Box';
import SelectTabel from './components/SelectTable';

const fetchData = async (url) => {
  const response = await fetch(url, {next: {revalidate: 60}});
  return await response.json();
};
const getDataBs = async () => {
  const [dataListing] = await Promise.all([
      fetchData('http://localhost:3100/tes'),
  ]);
  return dataListing;
};

const getDataKec = async () => {
  const [dataListing] = await Promise.all([
      fetchData('http://localhost:3100/api/riset/daftar/listing/kec'),
  ]);
  return dataListing;
};

export default async function DaftarListing() {
  const dataBs =  getDataBs();
  const dataKec = getDataKec();

  const [bs, kec] = await Promise.all([dataBs, dataKec]);
  return (
    <>
      <Layout className="w-full min-h-screen overflow-x-hidden">
        <Box />
        <SelectTabel dataBs={bs} dataKec={kec}/>
      </Layout>
    </>
  );
}
