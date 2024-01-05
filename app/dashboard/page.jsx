import Layout from '@/app/layout/layout';
import Wellcome from './components/Wellcome';
import Waktu from './components/Waktu';
import Image from 'next/image';
import MulaiSelesai from './components/MulaiSelesai';
import Summary from './components/Summary';
import Progress from './components/Progress';
import Footer from '@/app/components/Footer';

const mainMulai = 'bg-gradient-to-b from-[#951A2E] to-[#CA2128]';
const secMulai = 'bg-primary-700';
const mainSelesai = 'bg-secondary-900';
const secSelesai = 'bg-secondary-600';
export default function Dashboard() {
  return (
    <>
      <Layout>
        <div className="my-4 w-[90%] space-y-4 min-h-screen">
          <Wellcome Nama="Muhammad Fauzan" />
          <Waktu />
          <div className="max-md:space-y-4 md:flex justify-between">
            <MulaiSelesai text="Mulai" tanggal="Senin, 25 Oktober 2023" waDom={mainMulai} wa={secMulai} />
            <MulaiSelesai text="Selesai" tanggal="Senin, 25 Oktober 2024" waDom={mainSelesai} wa={secSelesai} />
          </div>
          <Summary totalListing={3000} totalEligible={4000} totalSampelEligible={2000} />
          <Progress Selesai={140} totalSampel={500} persentase={Number(140 / 500).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })} />
          <div className="static bottom-0 flex justify-between h-8 ">
            <Image src="/img/elements/pura.png" width={200} height={300} alt="maskot2" className="float-end" />
            <Image src="/img/elements/candi.png" width={200} height={300} alt="maskot2" className="float-end" />
          </div>
          <Footer />
        </div>
      </Layout>
    </>
  );
}
