// import React, { useEffect, useState } from 'react';
import React from 'react';
import Layout from '@/app/layout/layout';
import Header from './components/Header';
import TableDetail from './components/tableDetail';
import PageTitle from '@/app/components/PageTitle';

const apiURL = process.env.NEXT_PUBLIC_API_URL;
const fetchData = async (url) => {
  const response = await fetch(url, { next: { revalidate: 60 } });
  return await response.json();
};

// const getDataBs = async () => {
//   const [dataListing] = await Promise.all([fetchData(`${apiURL}riset/daftar/listing/bs`)]);
//   return dataListing;
// };

export default async function DetailListing({ params, searchParams }) {
  let judul = '';
  let url = '';
  // const [dataBs, setDataBs] = useState(null);

  if (params.kat == 'bs') {
    url = `${apiURL}riset/daftar/listing/bs/detail/${params.id}`;
    judul = `Detail Listing Blok Sensus ${params.id}`;
  } else if (params.kat == 'desa') {
    url = `${apiURL}riset/daftar/listing/desa/detail/${params.id}`;
    judul = `Detail Listing Desa/Kelurahan ${searchParams.nama}`;
  } else if (params.kat == 'kec') {
    url = `${apiURL}riset/daftar/listing/kec/detail/${params.id}`;
    judul = `Detail Listing Kecamatan ${searchParams.nama}`;
  } else {
    url = `${apiURL}riset/daftar/listing/kab/detail/${params.id}`;
    judul = `Detail Listing Kabupaten ${searchParams.nama}`;
  }

  // useEffect(() => {
  //   const fetchDataBs = async () => {
  //     const data = await getDataBs();
  //     const filteredData = data.filter(item => item.kode_bs === '444A');
  //     setDataBs(filteredData);
  //   };

  //   fetchDataBs();
  // }, []);

  const getDataDetail = async () => {
    const data = await fetchData(url);
    return data;
  };
  return (
    <>
      <Layout className="w-full min-h-screen overflow-x-hidden">
        <PageTitle judul={judul} />
        <div className="flex flex-col w-[85%] mx-auto rounded-xl space-y-4 bg-primary-600 px-6 pb-5" style={{ marginTop: '1em' }}>
          <div className="flex flex-col pt-4">
            <Header />
            <TableDetail data={await getDataDetail()} />
          </div>
        </div>
      </Layout>
    </>
  );
}
