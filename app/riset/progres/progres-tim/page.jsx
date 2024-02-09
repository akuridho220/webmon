import Layout from '@/app/layout/layout';
import Content from './components/Content';
import PageTitle from '@/app/components/PageTitle';
import Breadcrumb from './components/Breadcrumbs';

export default function ProgresTim() {
  const judul = "Progres Tim"
  return (
    <>
      <Layout className="w-full min-h-screen overflow-x-hidden">
        <PageTitle judul={judul} />
        <Breadcrumb />
        <Content />
      </Layout>
    </>
  );
}
