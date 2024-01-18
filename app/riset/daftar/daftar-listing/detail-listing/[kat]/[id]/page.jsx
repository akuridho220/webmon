'use client';
import React, { useEffect, useState } from 'react';
import Layout from '@/app/layout/layout';
import Header from  './components/Header';
import Table from './components/tableDetail';
import PageTitle from '@/app/components/PageTitle';

const apiURL = process.env.NEXT_PUBLIC_API_URL;
const fetchData = async (url) => {
  const response = await fetch(url, { next: { revalidate: 60 } });
  return await response.json();
};

const getDataBs = async () => {
  const [dataListing] = await Promise.all([fetchData(`${apiURL}riset/daftar/listing/bs`)]);
  return dataListing;
};


export default function DetailListing({params}) {
  const judul = `Detail Listing Blok Sensus ${params.kat}`;
  const [dataBs, setDataBs] = useState(null);

  useEffect(() => {
    const fetchDataBs = async () => {
      const data = await getDataBs();
      const filteredData = data.filter(item => item.kode_bs === '444A');
      setDataBs(filteredData);
    };

    fetchDataBs();
  }, []);

  
  return (
    <>
      <Layout className="w-full min-h-screen overflow-x-hidden">
      <PageTitle judul={judul} />
      <div className="flex flex-col w-[88%] mx-auto rounded-xl space-y-4 px-5 pb-5 mt-8">
          <div className="flex-col rounded-xl space-y-4 px-6 pb-5 bg-primary-600 overflow-x-auto">
            <Header data = {dataBs}/>
            <Table />
          </div>
          {params.kat}
          {params.id}
      </div>
      </Layout>
    </>
  );
}
