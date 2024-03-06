import React from 'react';
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
  // const modifiedData = dataListing.map(item => ({
  //   ...item,
  //   kode_bs_full: item.id_prov+''+item.id_kab+''+item.id_kec+''+item.id_kel+''+item.kode_bs,
  // }));

  // return modifiedData;
  return dataListing;
};

const getDataKec = async () => {
  const [dataListing] = await Promise.all([fetchData(`${apiURL}riset/daftar/listing/kec`)]);
  // const modifiedData = dataListing.map(item => ({
  //   ...item,
  //   kode_kec_full: `${item.id_prov}${item.id_kab}${item.id_kec}`,
  // }));

  // return modifiedData;
  return dataListing;
};

const getDataDesa = async () => {
  const [dataListing] = await Promise.all([fetchData(`${apiURL}riset/daftar/listing/desa`)]);
  // const modifiedData = dataListing.map(item => ({
  //   ...item,
  //   kode_desa_full: `${item.id_prov}${item.id_kab}${item.id_kec}${item.id_kel}`,
  // }));

  // return modifiedData;
  return dataListing;
};

const getDataKab = async () => {
  const [dataListing, listingSelesai] = await Promise.all([fetchData(`${apiURL}riset/daftar/listing/kab`), fetchData(`${apiURL}progres/listing/kab`)]);

  //const [dataListing] = await Promise.all([fetchData(`${apiURL}riset/daftar/listing/kab`)]);


  const mergedData = dataListing.map((sampelItem) => {
    const matchingListing = listingSelesai.find((listingItem) => sampelItem.id_kab === listingItem.id_kab);

    return {
      ...sampelItem,
      jumlah_listing_selesai: matchingListing ? matchingListing.jumlah_listing_selesai : 0,
    };
  });

  return mergedData;
  //return dataListing;
};

const getDataAll = async () => {
  const [dataListing] = await Promise.all([fetchData(`${apiURL}riset/daftar/listing/all`)]);
  return dataListing;
};

const judul = 'Daftar Listing';
export default async function DaftarListing() {
  const dataBs = getDataBs();
  const dataKec = getDataKec();
  const dataDesa = getDataDesa();
  const dataKab = getDataKab();
  const dataAll = getDataAll();

  const [bs, kec, desa, kab, all] = await Promise.all([dataBs, dataKec, dataDesa, dataKab, dataAll]);
  return (
    <>
      <Layout className="w-full min-h-screen overflow-x-hidden">
        <PageTitle judul={judul} />
        <SelectTabel dataBs={bs} dataKec={kec} dataDesa={desa} dataKab={kab} dataAll={all} />
      </Layout>
    </>
  );
}
