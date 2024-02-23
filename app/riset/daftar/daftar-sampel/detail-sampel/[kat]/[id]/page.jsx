import Layout from '@/app/layout/layout';
import Table from './components/TableDetail';
import Header from './components/Header';
import PageTitle from '@/app/components/PageTitle';
import { ModalProvider } from './components/Modal';
import BreadCrumbs from '@/app/components/BreadCrumbs';

const apiURL = process.env.NEXT_PUBLIC_API_URL;
const fetchData = async (url) => {
  const response = await fetch(url, { next: { revalidate: 60 } });
  return await response.json();
};

export default async function DetailSampel({ params, searchParams }) {
  let url = '';
  let judul = '';
  if (params.kat == 'bs') {
    url = `${apiURL}riset/daftar/sampel/bs/detail/${params.id}`;
    judul = `Detail Sampel Blok Sensus ${params.id}`;
  } else if (params.kat == 'desa') {
    url = `${apiURL}riset/daftar/sampel/desa/detail/${params.id}`;
    judul = `Detail Sampel Desa/Kelurahan ${searchParams.nama}`;
  } else if (params.kat == 'kec') {
    url = `${apiURL}riset/daftar/sampel/kec/detail/${params.id}`;
    judul = `Detail Sampel Kecamatan ${searchParams.nama}`;
  } else {
    url = `${apiURL}riset/daftar/sampel/kab/detail/${params.id}`;
    judul = `Detail Sampel Kabupaten ${searchParams.nama}`;
  }

  const getDataDetail = async () => {
    const data = await fetchData(url);
    return data;
  };

  const dataDetail = await getDataDetail();
  return (
    <ModalProvider>
      <Layout className="w-full min-h-screen overflow-x-hidden">
        <PageTitle judul={judul} />
        <div className="flex flex-col w-[90%] mx-auto rounded-xl space-y-4 bg-primary-900/95 px-6 pb-5" style={{ marginTop: '1em' }}>
          <div className="flex flex-col pt-4">
            <div className="text-white flex justify-between items-center">
              <BreadCrumbs />
              <Header data={dataDetail} />
            </div>
            <Table data={dataDetail} />
          </div>
        </div>
      </Layout>
    </ModalProvider>
  );
}
