import Layout from '@/app/layout/layout';
import PageTitle from '@/app/components/PageTitle';
import Header from './components/Header';
import TableDetailProgres from './components/TableDetail';
import BreadCrumbs from '@/app/components/BreadCrumbs';

const DetailProgresTim = () => {
  const judul = 'Progres Blok Sensus XXXX';
  return (
    <div>
      <Layout className="w-full min-h-screen overflow-x-hidden">
        <PageTitle judul={judul} />
        <div className="w-[90%]">
          <BreadCrumbs />
        </div>
        <div className="flex flex-col w-[90%] mx-auto rounded-xl space-y-4 bg-primary-900/95 px-6 pb-5" style={{ marginTop: '1em' }}>
          <div className="flex flex-col pt-4">
            <Header />
            <TableDetailProgres />
            {/* <TableDetail data={await getDataDetail()} /> */}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default DetailProgresTim;
