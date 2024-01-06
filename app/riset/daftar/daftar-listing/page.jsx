import React from 'react';
import Layout from '@/app/layout/layout';
import Box from './components/Box';
import SelectTabel from './components/SelectTable';


const fetchData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const getDataBs = async () => {
  const [dataListing] = await Promise.all([
      fetchData('http://localhost:3000/api/riset/daftar/listing/bs')
  ]);

  return dataListing;
};

export default async function DaftarListing() {
  const dataBs = await getDataBs();
  // const dataKec = getDataKec();
  //console.log(dataBs)
  return (
    <>
      <Layout className="w-full min-h-screen overflow-x-hidden">
        <Box />
        <SelectTabel dataBs={dataBs}/>
      </Layout>
    </>
  );
}
