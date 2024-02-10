'use client'
import ButtonTim from "./buttonTim";
import TimSelect from "./selectTim";
import Table from "./TableSelect";
import { useState, useEffect, useCallback } from "react";

const Container = ({dataListing, dataSampel, dataListTim}) => {
    const [table, setTable] = useState();
    const [listing, setListing] = useState(dataListing);
    const [sampel, setSampel] = useState(dataSampel);

    const handleTableChange = (selected) => {
        setTable(selected);
        
    }
    
    // const fetchNewData = useCallback(async (selectedTim) =>{
    //     const fetchData = async (url) => {
    //         const response = await fetch(url, { next: { revalidate: 60 } });
    //         return await response.json();
    //     };

    //     const getDataListing = async () => {
    //         const [dataListing] = await Promise.all([fetchData(`${apiURL}riset/daftar/tim/listing/${selectedTim}`)]);
    //         setListing(dataListing);
    //     };

    //     const getDataSampel = async () => {
    //         const [dataSampel, dataListing] = await Promise.all([fetchData(`${apiURL}riset/daftar/tim/sampel/${selectedTim}`), getDataListing()]);
        
    //         const mergedData = dataSampel.map((sampelItem) => {
    //             const matchingListing = dataListing.find((listingItem) => sampelItem.id_bs === listingItem.id_bs);
    //             return {
    //                 ...sampelItem,
    //                 jumlah_listing: matchingListing ? matchingListing.jumlah_listing : 0,
    //             };
    //         });
    //         setSampel(mergedData)
    //     };
    // },[]);


    // useEffect(() => {
    //     fetchNewData()
    // }, [fetchNewData]);

    const filterDataByTim = (data, tim) => {
        return data.filter(item => item.id_tim === tim);
    };

    const handleTimSelect = (selectedTim) => {
        const filteredDataListing = filterDataByTim(dataListing, selectedTim);
        const filteredDataSampel = filterDataByTim(dataSampel, selectedTim);

        setListing(filteredDataListing);
        setSampel(filteredDataSampel);
    }
    return(
        <>
            <div className="bg-primary-900/95 md:w-[90%] w-[95%] mt-8 px-6 rounded-xl">
                <ButtonTim onSelect={handleTableChange}/>
                <TimSelect dataListTim={dataListTim} onSelect={handleTimSelect}/>
                {/* <TimSelect dataListTim={dataListTim} onSelect={fetchNewData}/> */}
                <Table selectedCategory={table} dataListing={listing} dataSampel={sampel}/>
            </div>
        </>
    )
}

export default Container;