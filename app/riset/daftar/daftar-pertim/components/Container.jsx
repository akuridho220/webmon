'use client';
import ButtonTim from './buttonTim';
import TimSelect from './selectTim';
import Table from './TableSelect';
import { useState } from 'react';

const Container = ({ dataListing, dataSampel, dataListTim }) => {
  const [table, setTable] = useState();
  const [listing, setListing] = useState(dataListing);
  const [sampel, setSampel] = useState(dataSampel);

  const handleTableChange = (selected) => {
    setTable(selected);
  };


  const filterDataByTim = (data, tim) => {
    return data.filter((item) => item.id_tim === tim);
  };

  const handleTimSelect = (selectedTim) => {
    const filteredDataListing = filterDataByTim(dataListing, selectedTim);
    const filteredDataSampel = filterDataByTim(dataSampel, selectedTim);

    setListing(filteredDataListing);
    setSampel(filteredDataSampel);
  };
  return (
    <>
      <div className="bg-primary-900/95 w-[90%] mt-8 px-6 rounded-xl overflow-hidden">
        <ButtonTim onSelect={handleTableChange} />
        <TimSelect dataListTim={dataListTim} onSelect={handleTimSelect} selectedCategory={table} dataListing={listing} dataSampel={sampel} />
        {/* <TimSelect dataListTim={dataListTim} onSelect={fetchNewData}/> */}
        <Table selectedCategory={table} dataListing={listing} dataSampel={sampel} />
      </div>
    </>
  );
};

export default Container;
