import Layout from '@/app/layout/layout';
import Wellcome from './components/Wellcome';
import Waktu from './components/Waktu';
import MulaiSelesai from './components/MulaiSelesai';
import Summary from './components/Summary';
import Progress from './components/Progress';

const mainMulai = 'bg-gradient-to-b from-[#951A2E] to-[#CA2128]';
const secMulai = 'bg-primary-700';
const mainSelesai = 'bg-secondary-900';
const secSelesai = 'bg-secondary-600';
const apiURL = process.env.NEXT_PUBLIC_API_URL;

const fetchData = async (url) => {
  const response = await fetch(url, { next: { revalidate: 60 } });
  return await response.json();
};
const getTotalListing = async () => {
  const [dataListing] = await Promise.all([fetchData(`${apiURL}dashboard/total-listing`)]);
  return dataListing;
};

export default async function Dashboard() {
  const dataListing = await getTotalListing();
  return (
    <>
      <Layout>
        <div className="my-4 w-[90%] space-y-4 min-h-screen">
          <div data-aos="fade-down">
            <Wellcome />
          </div>
          <div data-aos="fade-up">
            <Waktu />
          </div>
          <div data-aos="fade-up" className="max-md:space-y-4 md:flex justify-between">
            <MulaiSelesai text="Mulai" tanggal="Senin, 22 Januari 2024" waDom={mainMulai} wa={secMulai} />
            <MulaiSelesai text="Selesai" tanggal="Jumat, 26 Januari 2024" waDom={mainSelesai} wa={secSelesai} />
          </div>
          <div data-aos="fade-up">
            <Summary totalListing={dataListing.total_listing} totalEligible={4000} totalSampelEligible={2000} />
          </div>
          <div className="z-20" data-aos="fade-up">
            <Progress Selesai={140} totalSampel={500} persentase={Number(140 / 500).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })} />
          </div>
        </div>
      </Layout>
    </>
  );
}
