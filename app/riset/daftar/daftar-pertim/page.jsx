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
      // fetchData('http://localhost:3100/api/riset/daftar/tim/listing'),
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

const judul = 'Daftar Listing dan Sampel Per Tim';
export default async function DaftarPerTim() {
  const dataListing = getDataListing();
  const dataSampel = getDataSampel();

  const [listing, sampel] = await Promise.all([dataListing, dataSampel])
  return (
    <>
      <Layout className="w-full min-h-screen overflow-x-hidden">
        <PageTitle judul={judul} />
        <Container dataListing={listing} dataSampel={sampel} />
      </Layout>
    </>
  );
}
