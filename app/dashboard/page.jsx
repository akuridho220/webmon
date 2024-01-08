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

const fetchData = async (url) => {
  const response = await fetch(url, { next: { revalidate: 60 } });
  return await response.json();
};
const getTotalListing = async () => {
  const [dataListing] = await Promise.all([fetchData('http://localhost:3100/api/dashboard/total-listing')]);
  return dataListing;
};

export default async function Dashboard() {
  const dataListing = await getTotalListing();
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
          <Summary totalListing={dataListing.total_listing} totalEligible={4000} totalSampelEligible={2000} />
          <div className="z-20">
            <Progress Selesai={140} totalSampel={500} persentase={Number(140 / 500).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })} />
          </div>
          {/* <div className="absolute -bottom-[28rem] z-10 flex justify-between lg:w-[72%] w-[90%] h-80">
            <Image src="/img/elements/pura.png" width={150} height={200} alt="maskot2" className="float-end" />
            <Image src="/img/elements/candi.png" width={150} height={200} alt="maskot2" className="float-end" />
          </div> */}
          <div className="h-20 flex items-center">
            <Footer />
          </div>
        </div>
      </Layout>
    </>
  );
}
