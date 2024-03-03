import Layout from '@/app/layout/layout';
import Container from './components/Container';
import PageTitle from '@/app/components/PageTitle';

const apiURL = process.env.NEXT_PUBLIC_API_URL;
const fetchData = async (url) => {
  const response = await fetch(url, { next: { revalidate: 60 } });
  return await response.json();
};

const getDataListing = async () => {
  const [dataListing] = await Promise.all([fetchData(`${apiURL}riset/daftar/tim/listing`)]);
  return dataListing;
};

const getDataSampel = async () => {
  const [dataSampel, dataListing] = await Promise.all([fetchData(`${apiURL}riset/daftar/tim/sampel`), getDataListing()]);

  const mergedData = dataSampel.map((sampelItem) => {
    const matchingListing = dataListing.find((listingItem) => sampelItem.id_tim === listingItem.id_tim);

    return {
      ...sampelItem,
      jumlah_listing: matchingListing ? matchingListing.jumlah_listing : 0,
    };
  });

  return mergedData;
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

const judul = 'Daftar Listing dan Sampel Per Tim';
export default async function DaftarPerTim({ id }) {
  const dataListing = getDataListing();
  const dataSampel = getDataSampel();
  const dataListTim = getListTim();

  const [listing, sampel, listTim] = await Promise.all([dataListing, dataSampel, dataListTim]);
  return (
    <>
      <Layout className="w-full min-h-screen overflow-x-hidden">
        <PageTitle judul={judul} />
        <Container dataListing={listing} dataSampel={sampel} dataListTim={listTim} />
      </Layout>
    </>
  );
}
