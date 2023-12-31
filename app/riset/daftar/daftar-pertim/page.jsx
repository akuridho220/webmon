import Layout from "@/app/layout/layout";
import ButtonTim from "./components/buttonTim";
import TimSelect from "./components/selectTim";
import TableTim from "./components/TablePerTim";
import * as Icon from "react-feather";

export default function DaftarPerTim() {
  return (
    <>
      <Layout>
        <div className="flex flex-col w-[95%] rounded-xl bg-[#d93f57] bg-opacity-50 mt-10 p-6">
          <div className="flex flex-col w-90 rounded-xl bg-[#d93f57] mt-10 p-6">
            <div className="flex items-center text-white px-4">
              <p className="mx-auto">Monitoring Tim Petugas</p>
            </div>
          </div>
          <ButtonTim />
          <TimSelect />
          <div className="w-[10%] ml-auto">
            <div className="flex items-center bg-secondary-800 py-2 px-4 rounded-lg text-white hover:bg-secondary-900">
              <Icon.Download size={18} />
              <button className=" pl-4">Export</button>
            </div>
          </div>
          <TableTim />
        </div>
      </Layout>
    </>
  );
}
