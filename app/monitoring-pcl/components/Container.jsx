'use client';

import dynamic from 'next/dynamic';
import { useState, useId } from 'react';
import Select from 'react-select';
import 'leaflet/dist/leaflet.css';
import { lokus } from './Lokus';
//import MapComponent from './LeafletMap';

const MapComponent = dynamic(() => import('./LeafletMap'), {ssr: false});

const dropdownStyles = {
    control: (provided) => ({
        ...provided,
        borderRadius: "0.5rem",
        color: "#000",
        minWidth: "20rem",
    }),
    input: (provided) => ({
        ...provided,
        color: "#000",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected
            ? "rgba(217, 63, 87, 1)"
            : "transparent",
        borderRadius: "0.3rem",
        color: state.isSelected ? "white" : "black",
    }),
};


const Container = ({data}) => {
    const [selectedLokus, setSelectedLokus] = useState(lokus[0]);
    const [selectedPetugas, setSelectedPetugas] = useState(null);
    const [tooltip, setTooltip] = useState(false);

    const [withAccuracy, setWithAccuracy] = useState(false);
    const [mapPosition, setMapPosition] = useState([lokus[0].lat, lokus[0].long]);
    const [mapZoom, setMapZoom] = useState(lokus[0].zoom);
    
    const handleLokusChange = (selected) => {
        setSelectedLokus(selected);
        setSelectedPetugas(null);

        setWithAccuracy(false);
        setMapPosition([selected.lat, selected.long]);
        setMapZoom(selected.zoom);
        setTooltip(false);
    };

    const handlePetugasChange = (selected) => {
        setSelectedLokus(null);
        setSelectedPetugas(selected);

        setWithAccuracy(true);
        setMapPosition([selected.lat, selected.long]);
        setMapZoom(17);
        setTooltip(true);
    };

    return(
        <div className='w-[90%] my-8 px-6 bg-primary-900/95 rounded-md'>
            <p className="my-4 text-white">
                &#x203B; Posisi petugas diperbarui 10 menit sekali dan ketika petugas berpindah lokasi
                lebih dari 200 meter. Silakan <i>refresh</i> halaman untuk melihat lokasi terbaru.
            </p>
            <div className='w-full mb-4 xl:flex items-center justify-stretch gap-3'>
                <div className='w-full'>
                    <label htmlFor='select-lokus' className='text-white font-bold'>
                        Posisi petugas berdasarkan lokus
                    </label>
                    <div className="w-full rounded-xl bg-[#d93f57] bg-opacity-50">
                        <Select id='select-lokus'
                            options={lokus}
                            value={selectedLokus}
                            placeholder={"Pilih lokus pencacahan"}
                            onChange={handleLokusChange}
                            isSearchable={true}
                            styles={dropdownStyles}
                            instanceId={useId()}
                        />
                    </div>
                </div>
                <div className='w-full mt-3 xl:mt-0'>
                    <label htmlFor='select-nama' className='text-white font-bold'>
                        Posisi petugas berdasarkan nama
                    </label>
                    <div className="w-full rounded-xl bg-[#d93f57] bg-opacity-50">
                        <Select id='select-petugas'
                            options={data}
                            value={selectedPetugas}
                            placeholder={"Cari nama petugas"}
                            onChange={handlePetugasChange}
                            isSearchable={true}
                            styles={dropdownStyles}
                            instanceId={useId()}
                        />
                    </div>
                </div>
            </div>
            <MapComponent petugas={data} position={mapPosition} zoom={mapZoom} radius={withAccuracy} toolTip={tooltip}/>
        </div>
    )
}

export default Container;