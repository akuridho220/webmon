// import React from 'react';
import Layout from '@/app/layout/layout';
import PageTitle from '@/app/components/PageTitle';
import SelectTabel from './components/SelectTable';

const apiURL = process.env.NEXT_PUBLIC_API_URL;
const fetchData = async (url) => {
  const response = await fetch(url, { next: { revalidate: 60 } });
  return await response.json();
};

const getDataBs = async () => {
  const [dataListing] = await Promise.all([fetchData(`${apiURL}riset/daftar/listing/bs`)]);
  return dataListing;
};

const getDataKec = async () => {
  const [dataListing] = await Promise.all([fetchData(`${apiURL}riset/daftar/listing/kec`)]);
  return dataListing;
};

const getDataDesa = async () => {
  const [dataListing] = await Promise.all([fetchData(`${apiURL}riset/daftar/listing/desa`)]);
  return dataListing;
};

const getDataKab = async () => {
  const [dataListing] = await Promise.all([fetchData(`${apiURL}riset/daftar/listing/kab`)]);
  return dataListing;
};

const judul = 'Daftar Listing';
export default async function DaftarListing() {
  const dataBs = getDataBs();
  const dataKec = getDataKec();
  const dataDesa = getDataDesa();
  const dataKab = getDataKab();

  const [bs, kec, desa, kab] = await Promise.all([dataBs, dataKec, dataDesa, dataKab]);
  return (
    <>
      <Layout className="w-full min-h-screen overflow-x-hidden">
        <PageTitle judul={judul} />
        <SelectTabel dataBs={bs} dataKec={kec} dataDesa={desa} dataKab={kab} />
      </Layout>
    </>
  );
}
