import Layout from '@/app/layout/layout';
import Table from './components/TableDetail';
import Header from './components/Header';
import Box from './components/Box';
import { ModalProvider } from './components/Modal';

export default function DetailSampel({params}) {  
  return (
    <ModalProvider>
      <Layout className="w-full min-h-screen overflow-x-hidden">
        <div className="flex flex-col w-[95%] mx-auto rounded-xl space-y-4  px-6 pb-5 bg-primary-700/70" style={{marginTop: '1em'}}>
          <Box />
          <Header />
          <Table />
        </div>
      {params.kat}
      {params.id}
      </Layout>
    </ModalProvider>
  );
}
