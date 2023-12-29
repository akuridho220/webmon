import Layout from '@/app/layout/layout';
import Wellcome from './components/Wellcome';
import Image from 'next/image';

export default function Dashboard() {
  return (
    <>
      <Layout>
        <div className="my-4 w-[90%]">
          <Wellcome Nama="Muhammad Fauzan" />
        </div>
      </Layout>
    </>
  );
}
