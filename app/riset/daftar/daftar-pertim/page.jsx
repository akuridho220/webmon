import Layout from "@/app/layout/layout";
import Container from "./components/Container";
import PageTitle from "@/app/components/PageTitle";



const judul = 'Daftar Listing dan Sampel Per Tim';
export default function DaftarPerTim() {
  return (
    <>
      <Layout className="w-full min-h-screen overflow-x-hidden">
        <PageTitle judul={judul} />
        <Container />
      </Layout>
    </>
  );
}
