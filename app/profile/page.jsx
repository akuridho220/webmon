import Layout from "@/app/layout/layout";
import Box from "./components/Box";

export default function Profile() {
  return (
    <>
      <Layout>
        <div className="my-4 w-[90%] space-y-4">
          <Box 
            nama={"DUTATAMA ROSEWIKA TAUFIQ HADIHARDAYA"}
            status={"Mahasiswa"}
            email={"222112116@stis.ac.id"}
            jabatan={"Bidang TI"}
          />
        </div>
      </Layout>
    </>
  );
}
