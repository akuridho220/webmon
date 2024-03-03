import Layout from '@/app/layout/layout';
import PageTitle from '@/app/components/PageTitle';
import TableType from './components/SelectTableType';

const apiURL = process.env.NEXT_PUBLIC_API_URL;
const fetchData = async (url) => {
  const response = await fetch(url, { next: { revalidate: 60 } });
  return await response.json();
};

const getDataBs = async () => {
  const [dataSampel, dataListing] = await Promise.all([fetchData(`${apiURL}riset/daftar/sampel/bs`), fetchData(`${apiURL}riset/daftar/listing/bs`)]);

  const mergedData = dataSampel.map((sampelItem) => {
    const matchingListing = dataListing.find((listingItem) => sampelItem.id_bs === listingItem.id_bs);

    return {
      ...sampelItem,
      jumlah_listing: matchingListing ? matchingListing.jumlah_listing : 0,
    };
  });

  return mergedData;
};

const getDataKec = async () => {
  const [dataSampel, dataListing] = await Promise.all([fetchData(`${apiURL}riset/daftar/sampel/kec`), fetchData(`${apiURL}riset/daftar/listing/kec`)]);

  const mergedData = dataSampel.map((sampelItem) => {
    const matchingListing = dataListing.find((listingItem) => sampelItem.nama_kec === listingItem.nama_kec);

    return {
      ...sampelItem,
      jumlah_listing: matchingListing ? matchingListing.jumlah_listing : 0,
    };
  });

  return mergedData;
};

const getDataKab = async () => {
  const [dataSampel, dataListing] = await Promise.all([fetchData(`${apiURL}riset/daftar/sampel/kab`), fetchData(`${apiURL}riset/daftar/listing/kab`)]);

  const mergedData = dataSampel.map((sampelItem) => {
    const matchingListing = dataListing.find((listingItem) => sampelItem.nama_kab === listingItem.nama_kabupaten);

    return {
      ...sampelItem,
      jumlah_listing: matchingListing ? matchingListing.jumlah_listing : 0,
    };
  });

  return mergedData;
};

const getDataDes = async () => {
  const [dataSampel, dataListing] = await Promise.all([fetchData(`${apiURL}riset/daftar/sampel/desa`), fetchData(`${apiURL}riset/daftar/listing/desa`)]);

  const mergedData = dataSampel.map((sampelItem) => {
    const matchingListing = dataListing.find((listingItem) => sampelItem.id_bs === listingItem.id_bs);

    return {
      ...sampelItem,
      jumlah_listing: matchingListing ? matchingListing.jumlah_listing : 0,
    };
  });

  return mergedData;
};

const getDataAll = async () => {
  const [dataSampel, dataListing] = await Promise.all([fetchData(`${apiURL}riset/daftar/sampel/all`), fetchData(`${apiURL}riset/daftar/listing/all`)]);

  const mergedData = dataSampel.map((sampelItem) => {
    const matchingListing = dataListing.find((listingItem) => sampelItem.id_bs === listingItem.id_bs);

    return {
      ...sampelItem,
      jumlah_listing: matchingListing ? matchingListing.jumlah_listing : 0,
    };
  });

  return mergedData;
};

const judul = 'Daftar Sampel';
export default async function DaftarSampel() {
  const dataBs = getDataBs();
  const dataKec = getDataKec();
  const dataDesa = getDataDes();
  const dataKab = getDataKab();
  const dataAll = getDataAll();

  const [bs, kec, desa, kab, all] = await Promise.all([dataBs, dataKec, dataDesa, dataKab, dataAll]);
  return (
    <Layout className="w-full min-h-screen overflow-x-hidden">
      <PageTitle judul={judul} />
      <TableType dataBs={bs} dataDesa={desa} dataKab={kab} dataKec={kec} dataAll={all}/>
    </Layout>
  );
}
