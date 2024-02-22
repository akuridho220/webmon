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
    const data = await fetchData(`${apiURL}riset/daftar/sampel/kab`);
    const newData = data.map((item) => {
      return {
        ...item,
        label: `Kabupaten ${item.nama_kab}`,
        value: `${item.nama_kab}`,
      };
    });
    return newData;
  };

  const getListKecamatan = async () => {
    const data = await fetchData(`${apiURL}riset/daftar/sampel/kec`);
    const newData = data.map((item) => {
      return {
        ...item,
        label: `Kecamatan ${item.nama_kec}`,
        value: `${item.nama_kec}`,
      };
    });
    return newData;
  };

  const getListDesa = async () => {
    const data = await fetchData(`${apiURL}riset/daftar/sampel/desa`);
    const newData = data.map((item) => {
      return {
        ...item,
        label: `Desa/Kelurahan ${item.nama_kel}`,
        value: `${item.nama_kel}`,
      };
    });
    return newData;
  };

  const getData = async () => {
    const [dataSampel, dataSampelSelesai] = await Promise.all([fetchData(`${apiURL}riset/daftar/tim/sampel`), fetchData(`${apiURL}riset/progres/tim`)]);
  
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
    const judul = "Progres Wilayah";
    const data = getData();
    const dataListKab = getListKabupaten();
    const dataListKec = getListKecamatan();
    const dataListDesa = getListDesa();

    const [dataProgres, listKab, listKec, listDesa] = await Promise.all([data, dataListKab, dataListKec, dataListDesa]);
    return(
        <>
            <Layout className="w-full min-h-screen overflow-x-hidden">
                <PageTitle judul={judul} />
                <Content data={dataProgres} listKab={listKab} listKec={listKec} listDesa={listDesa}/>
            </Layout>
        </>
    )
}
