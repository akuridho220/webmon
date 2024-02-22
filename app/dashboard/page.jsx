import Layout from '@/app/layout/layout';
import Wellcome from './components/Wellcome';
import Waktu from './components/Waktu';
import Summary from './components/Summary';
import Progress from './components/ProgressKue';
import ProgressKueWilayah from './components/ProgressKueWilayah';
import { data } from 'autoprefixer';

const apiURL = process.env.NEXT_PUBLIC_API_URL;

const fetchData = async (url) => {
  const response = await fetch(url, { next: { revalidate: 60 } });
  return await response.json();
};
const getTotalListing = async () => {
  const [dataListing] = await Promise.all([fetchData(`${apiURL}dashboard/total-listing`)]);
  return dataListing;
};
const getProgres = async () => {
  const [progress] = await Promise.all([fetchData(`${apiURL}dashboard/progress`)]);
  return progress;
};

const getProgressWilayah = async () => {
  const [progressWilayah] = await Promise.all([fetchData(`${apiURL}dashboard/progress-kab`)]);
  return progressWilayah;
};

export default async function Dashboard() {
  const dataProgres = await getProgres();
  const dataListing = await getTotalListing();
  const dataProgressWilayah = await getProgressWilayah();
  const tercacah = dataProgres.tercacah ?? 0;
  const eligible = dataListing.total_eligible ?? 0;
  return (
    <>
      <Layout>
        <div className="my-4 w-[90%] space-y-5 min-h-screen">
          <div data-aos="fade-down">
            <Wellcome />
          </div>
          <div data-aos="fade-up">
            <Waktu mulai={'Kamis, 29 Februari 2024'} selesai={'Sabtu, 9 Maret 2024'} kegiatan={'Pencacahan Lapangan'} StartDate={'02/29/2024'} EndDate={'03/09/2024'} />
          </div>
          <div data-aos="fade-up">
            <Summary totalListing={dataListing.total_listing} totalEligible={eligible} totalSampelEligible={dataListing.total_sampel} />
          </div>
          <div className="z-20" data-aos="fade-up">
            <Progress Selesai={tercacah} totalSampel={dataProgres.total} />
          </div>
          <div className="z-20" data-aos="fade-up">
            <ProgressKueWilayah data={dataProgressWilayah} />
          </div>
        </div>
      </Layout>
    </>
  );
}
