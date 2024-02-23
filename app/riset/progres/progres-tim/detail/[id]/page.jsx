import Layout from '@/app/layout/layout';
import PageTitle from '@/app/components/PageTitle';
import Header from './components/Header';
import TableDetailProgres from './components/TableDetail';
import BreadCrumbs from '@/app/components/BreadCrumbs';

const apiURL = process.env.NEXT_PUBLIC_API_URL;
const fetchData = async (url) => {
  const response = await fetch(url, { next: { revalidate: 60 } });
  return await response.json();
};

const DetailProgresTim = async ({ params }) => {
  const getData = async () => {
    const data = await fetchData(`${apiURL}riset/progres/tim/detail/${params.id}`);
    return data;
  };

  const dataDetail = await getData();
  const judul = `Progres Tim ${dataDetail[0].nama_tim}`;

  return (
    <div>
      <Layout className="w-full min-h-screen overflow-x-hidden">
        <PageTitle judul={judul} />
        <div className="flex flex-col w-[90%] mx-auto rounded-xl space-y-4 overflow-hidden bg-primary-900/95 px-6 pb-5" style={{ marginTop: '1em' }}>
          <div className="flex flex-col pt-4">
            {/* <TableDetailProgres /> */}
            <div className="text-white flex justify-between items-center">
              <BreadCrumbs />
              <Header data={dataDetail} />
            </div>
            <TableDetailProgres data={dataDetail} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default DetailProgresTim;
