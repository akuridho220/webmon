import Layout from '@/app/layout/layout';
import Wellcome from './components/Wellcome';
import Waktu from './components/Waktu';
import Image from 'next/image';
import MulaiSelesai from './components/MulaiSelesai';

const mainMulai = 'bg-gradient-to-b from-[#951A2E] to-[#CA2128]';
const secMulai = 'bg-primary-700';
const mainSelesai = 'bg-secondary-900';
const secSelesai = 'bg-secondary-600';
export default function Dashboard() {
  return (
    <>
      <Layout>
        <div className="my-4 w-[90%] space-y-4">
          <Wellcome Nama="Muhammad Fauzan" />
          <Waktu />
          <div className="flex justify-between">
            <MulaiSelesai text="Mulai" tanggal="Senin, 25 Oktober 2023" waDom={mainMulai} wa={secMulai} />
            <MulaiSelesai text="Selesai" tanggal="Senin, 25 Oktober 2024" waDom={mainSelesai} wa={secSelesai} />
          </div>
        </div>
      </Layout>
    </>
  );
}
