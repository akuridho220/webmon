import Layout from '@/app/layout/layout';
import Table from './components/TableDetail';
import Header from './components/Header';
import Box from './components/Box';
import { ModalProvider } from './components/Modal';

const apiURL = process.env.NEXT_PUBLIC_API_URL;
const fetchData = async (url) => {
  const response = await fetch(url, { next: { revalidate: 60 } });
  return await response.json();
};

export default async function DetailSampel({params}) { 
  let url = '';
  if(params.kat == 'bs'){
    url = `${apiURL}riset/daftar/sampel/bs/detail/${params.id}`
  } else if (params.kat == 'desa'){
    url = `${apiURL}riset/daftar/sampel/desa/detail/${params.id}`
  } else if (params.kat == 'kec'){
    url = `${apiURL}riset/daftar/sampel/kec/detail/${params.id}`
  } else {
    url = `${apiURL}riset/daftar/sampel/kab/detail/${params.id}`
  }
  
  const getDataDetail = async () => {
    const data = await fetchData(url);
    return data;
  };

  return (
    <ModalProvider>
      <Layout className="w-full min-h-screen overflow-x-hidden">
        <div className="flex flex-col w-[95%] mx-auto rounded-xl space-y-4  px-6 pb-5 bg-primary-700/70" style={{marginTop: '1em'}}>
          <Box />
          <Header />
          <Table data={await getDataDetail()}/>
        </div>
      {params.kat}
      {params.id}
      </Layout>
    </ModalProvider>
  );
}
