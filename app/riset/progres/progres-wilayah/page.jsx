import Layout from '@/app/layout/layout';
import Box from './components/Box';
import Content from './components/Content';
import PageTitle from '@/app/components/PageTitle';

const apiURL = process.env.NEXT_PUBLIC_API_URL;
const fetchData = async (url) => {
  const response = await fetch(url, { next: { revalidate: 60 } });
  return await response.json();
};

const getListKabupaten = async () => {
  const data = await fetchData(`${apiURL}kabupaten`);
  const newData = data.map((item) => {
    return {
      ...item,
      label: `Kabupaten ${item.nama_kab}`,
      value: `${item.id_kab}`,
    };
  });
  return newData;
};

const getListKecamatan = async () => {
  const data = await fetchData(`${apiURL}kecamatan`);
  const newData = data.map((item) => {
    return {
      ...item,
      label: `Kecamatan ${item.nama_kec}`,
      value: `${item.id_kab}${item.id_kec}`,
    };
  });
  return newData;
};

const getListDesa = async () => {
  const data = await fetchData(`${apiURL}desa`);
  const newData = data.map((item) => {
    return {
      ...item,
      label: `Desa ${item.nama_kel}`,
      value: `${item.id_kab}${item.id_kec}${item.id_kel}`,
    };
  });
  return newData;
};

const getData = async () => {
  const [dataSampel, dataSampelSelesai] = await Promise.all([fetchData(`${apiURL}riset/progres/sampel/bs`), fetchData(`${apiURL}riset/progres/wilayah`)]);

  const mergedData = dataSampel.map((sampelItem) => {
    const matchingListing = dataSampelSelesai.find((listingItem) => sampelItem.id_bs === listingItem.id_bs);

    return {
      ...sampelItem,
      jumlah_sampel_selesai: matchingListing ? matchingListing.jumlah_sampel_selesai : 0,
    };
  });

  return mergedData;
};

export default async function ProgresWilayah() {
  const judul = 'Progres Wilayah';
  const data = getData();
  const dataListKab = getListKabupaten();
  const dataListKec = getListKecamatan();
  const dataListDesa = getListDesa();

  const [dataProgres, listKab, listKec, listDesa] = await Promise.all([data, dataListKab, dataListKec, dataListDesa]);
  return (
    <>
      <Layout className="w-full min-h-screen overflow-x-hidden">
        <PageTitle judul={judul} />
        <Content data={dataProgres} listKab={listKab} listKec={listKec} listDesa={listDesa} />
      </Layout>
    </>
  );
}
