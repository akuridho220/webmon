'use client';
import Layout from "@/app/layout/layout";
import ButtonTim from "./components/buttonTim";
import TimSelect from "./components/selectTim";
import Table from "./components/TableSelect";
import { useState } from "react";

export default function DaftarPerTim() {
  const [table, setTable] = useState();
  const handleTableChange = (selected) => {
    setTable(selected);
  }
  return (
    <>
      <Layout className="w-full min-h-screen overflow-x-hidden">
        <div className="flex flex-col w-[95%] rounded-xl bg-[#d93f57] bg-opacity-50 mt-10 p-6">
          <div className="flex flex-col w-90 rounded-xl bg-primary-600 mt-10 p-6">
            <div className="flex items-center text-white px-4">
              <p className="mx-auto font-medium">Monitoring Tim Petugas</p>
            </div>
          </div>
          <ButtonTim onSelect={handleTableChange}/>
          <TimSelect />
          <div className="w-[10%] ml-auto">
            
          </div>
          <Table selectedCategory={table}/>
        </div>
      </Layout>
    </>
  );
}
