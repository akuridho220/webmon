import Layout from '@/app/layout/layout';
import PageTitle from '@/app/components/PageTitle';
import Container from './components/Container';

const judul = 'Monitoring Posisi Petugas';
const fetchData = async (url) => {
  const response = await fetch(url, { next: { revalidate: 60 } });
  return await response.json();
};

const getDataPosisi = async () => {
  const [data] = await Promise.all([fetchData(`${apiURL}monitoring-pcl`)]);

  const newData = data.map((item) => {
    return {
      ...item,
      label: `${item.nama} - ${item.nim}`,
      value: `${item.nim}`,
    };
  });

  return newData;
};

export default async function Monitoring() {
  const dataPosisi = await getDataPosisi();

  return (
    <>
      <Layout>
        <PageTitle judul={judul} />
        <Container data={dataPosisi} />
      </Layout>
    </>
  );
}
