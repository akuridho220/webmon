import Layout from '@/app/layout/layout';
import Content from './components/Content';
import PageTitle from '@/app/components/PageTitle';

const apiURL = process.env.NEXT_PUBLIC_API_URL;
const fetchData = async (url) => {
  const response = await fetch(url, { next: { revalidate: 60 } });
  return await response.json();
};

const getListTim = async () => {
  const data = await fetchData(`${apiURL}riset/daftar/tim/list-tim`);
  const newData = data.map((item) => {
    return {
      ...item,
      label: `TIM ${item.nama_tim}`,
      value: `${item.nama_tim}`,
    };
  });
  return newData;
};

const getData = async () => {
  const [dataSampel, dataSampelSelesai] = await Promise.all([fetchData(`${apiURL}riset/daftar/tim/sampel`), fetchData(`${apiURL}riset/progres/tim`)]);

  const mergedData = dataSampel.map((sampelItem) => {
    const matchingListing = dataSampelSelesai.find((listingItem) => sampelItem.id_tim === listingItem.id_tim);

    return {
      ...sampelItem,
      jumlah_sampel_selesai: matchingListing ? matchingListing.jumlah_sampel_selesai : 0,
    };
  });

  return mergedData;
};

const countProgres = (datanya) => {
  let totalSampelSelesai = 0;
  let totalJumlahSampel = 0;

  datanya.forEach((data) => {
    totalSampelSelesai += parseInt(data.jumlah_sampel_selesai);
    totalJumlahSampel += parseInt(data.jumlah_sampel);
  });
  return [totalJumlahSampel, totalSampelSelesai];
};
export default async function ProgresTim() {
  const judul = 'Progres Tim';

  const data = getData();
  const dataListTim = getListTim();

  const [dataProgres, listTim] = await Promise.all([data, dataListTim]);

  return (
    <>
      <Layout className="w-full min-h-screen overflow-x-hidden">
        <PageTitle judul={judul} />
        <Content data={dataProgres} listTim={listTim} dataAwal={countProgres(dataProgres)} />
      </Layout>
    </>
  );
}
