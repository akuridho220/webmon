'use client'
import ButtonTim from "./buttonTim";
import TimSelect from "./selectTim";
import Table from "./TableSelect";
import { useState } from "react";

const Container = ({dataListing, dataSampel, dataListTim, selectedTim}) => {
    const [table, setTable] = useState();
    const handleTableChange = (selected) => {
        setTable(selected);
    }
    return(
        <>
            <div className="bg-primary-600 w-[85%] mt-8 px-6 rounded-xl">
                <ButtonTim onSelect={handleTableChange}/>
                <TimSelect dataListTim={dataListTim} onSelect={selectedTim}/>
                <Table selectedCategory={table} dataListing={dataListing} dataSampel={dataSampel}/>
            </div>
        </>
    )
}

export default Container;