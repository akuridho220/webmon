import Layout from "@/app/layout/layout";
import Container from "./components/Container";
import PageTitle from "@/app/components/PageTitle";

const fetchData = async (url) => {
  const response = await fetch(url, { next: { revalidate: 60 } });
  return await response.json();
};

const getDataListing = async () => {
  const [dataListing] = await Promise.all([fetchData('http://localhost:3100/api/riset/daftar/tim/listing')]);
  return dataListing;
};

const getDataSampel = async () => {
  const [dataSampel, dataListing] = await Promise.all([
      fetchData('http://localhost:3100/api/riset/daftar/tim/sampel'),
      getDataListing()
  ]);

  const mergedData = dataSampel.map((sampelItem) => {
      const matchingListing = dataListing.find(
          (listingItem) => sampelItem.kode_bs === listingItem.kode_bs
      );
  
      return {
          ...sampelItem,
          jumlah_listing: matchingListing ? matchingListing.jumlah_listing : 0,
      };
  });

  return mergedData;
};

const getListTim = async () => {
  const data = await fetchData('http://localhost:3100/api/riset/daftar/tim/list-tim');
  const newData = data.map(item => {
    return {
        ...item,
        label: `TIM ${item.id_tim}`,
        value: `${item.id_tim}`
    };
  });
  return newData;
}

const judul = 'Daftar Listing dan Sampel Per Tim';
export default async function DaftarPerTim({id}) {




  const dataListing = getDataListing();
  const dataSampel = getDataSampel();
  const dataListTim = getListTim();

  const [listing, sampel, listTim] = await Promise.all([dataListing, dataSampel, dataListTim])
  return (
    <>
      <Layout className="w-full min-h-screen overflow-x-hidden">
        <PageTitle judul={judul} />
        <Container dataListing={listing} dataSampel={sampel} dataListTim={listTim} />
      </Layout>
    </>
  );
}
