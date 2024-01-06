'use client';

import { useState } from 'react';
import Layout from '@/app/layout/layout';
import PageTitle from '@/app/components/PageTitle';
import Select from 'react-select';
import 'leaflet/dist/leaflet.css';

import MapComponent from './components/LeafletMap';

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

const judul = 'Monitoring Posisi Petugas';

const lokus = [
    {
        label: 'Seluruh Bali',
        value: '51',
        lat: '-8.44053890',
        long: '115.09195090',
        zoom: '10',
    },
    {
        label: 'Jembrana',
        value: '5101',
        lat: '-8.3141',
        long: '114.6842',
        zoom: '11',
    },
    {
        label: 'Tabanan',
        value: '5102',
        lat: '-8.4398',
        long: '115.1518',
        zoom: '11',
    },
    {
        label: 'Badung',
        value: '5103',
        lat: '-8.5457',
        long: '115.1669',
        zoom: '10',
    },
    {
        label: 'Gianyar',
        value: '5104',
        lat: '-8.4826',
        long: '115.2981',
        zoom: '11',
    },
    {
        label: 'Klungkung',
        value: '5105',
        lat: '-8.6394',
        long: '115.4910',
        zoom: '11',
    },
    {
        label: 'Bangli',
        value: '5106',
        lat: '-8.3331',
        long: '115.3448',
        zoom: '11',
    },
    {
        label: 'Karangasem',
        value: '5107',
        lat: '-8.3589',
        long: '115.6366',
        zoom: '11',
    },
    {
        label: 'Buleleng',
        value: '5108',
        lat: '-8.2224',
        long: '114.9445',
        zoom: '10',
    },
    {
        label: 'Kota Denpasar',
        value: '5171',
        lat: '-8.6625',
        long: '115.2126',
        zoom: '12',
    },
];

//TODO: diganti isi database
const petugas = [
    {
        label: 'PCL Jembrana',
        value: '5101',
        lat: '-8.3141',
        long: '114.6842',
        nama: 'John Doe',
        nim: '31337',
        no_hp: '62123456789',
        lokus: 'Warung Makan',
        id_tim: '',
        akurasi: '',
        time_created: '',
    },
    {
        label: 'PCL Tabanan',
        value: '5102',
        lat: '-8.4398',
        long: '115.1518',
        nama: 'John Doe',
        nim: '31337',
        no_hp: '',
        lokus: 'Warung Makan',
        id_tim: '',
        akurasi: '',
        time_created: '',
    },
    {
        label: 'PCL Badung',
        value: '5103',
        lat: '-8.5457',
        long: '115.1669',
        nama: 'John Doe',
        nim: '31337',
        no_hp: '',
        lokus: 'Warung Makan',
        id_tim: '',
        akurasi: '',
        time_created: '',
    },
    {
        label: 'PCL Gianyar',
        value: '5104',
        lat: '-8.4826',
        long: '115.2981',
        nama: 'John Doe',
        nim: '31337',
        no_hp: '',
        lokus: 'Warung Makan',
        id_tim: '',
        akurasi: '',
        time_created: '',
    },
    {
        label: 'PCL Klungkung',
        value: '5105',
        lat: '-8.6394',
        long: '115.4910',
        nama: 'John Doe',
        nim: '31337',
        no_hp: '',
        lokus: 'Warung Makan',
        id_tim: '',
        akurasi: '',
        time_created: '',
    },
    {
        label: 'PCL Bangli',
        value: '5106',
        lat: '-8.3331',
        long: '115.3448',
        nama: 'John Doe',
        nim: '31337',
        no_hp: '',
        lokus: 'Warung Makan',
        id_tim: '',
        akurasi: '',
        time_created: '',
    },
    {
        label: 'PCL Karangasem',
        value: '5107',
        lat: '-8.3589',
        long: '115.6366',
        nama: 'John Doe',
        nim: '31337',
        no_hp: '',
        lokus: 'Warung Makan',
        id_tim: '',
        akurasi: '',
        time_created: '',
    },
    {
        label: 'PCL Buleleng',
        value: '5108',
        lat: '-8.2224',
        long: '114.9445',
        nama: 'John Doe',
        nim: '31337',
        no_hp: '',
        lokus: 'Warung Makan',
        id_tim: '',
        akurasi: '',
        time_created: '',
    },
    {
        label: 'PCL Kota Denpasar',
        value: '5171',
        lat: '-8.6625',
        long: '115.2126',
        nama: 'John Doe',
        nim: '31337',
        no_hp: '',
        lokus: 'Warung Makan',
        id_tim: '',
        akurasi: '',
        time_created: '',
    },
];

export default function Monitoring() {
    const [selectedLokus, setSelectedLokus] = useState(lokus[0]);
    const [selectedPetugas, setSelectedPetugas] = useState(null);

    const [withAccuracy, setWithAccuracy] = useState(false);
    const [mapPosition, setMapPosition] = useState([lokus[0].lat, lokus[0].long]);
    const [mapZoom, setMapZoom] = useState(lokus[0].zoom);
    
    const handleLokusChange = (selected) => {
        setSelectedLokus(selected);
        setSelectedPetugas(null);

        setWithAccuracy(false);
        setMapPosition([selected.lat, selected.long]);
        setMapZoom(selected.zoom);
    };

    const handlePetugasChange = (selected) => {
        setSelectedLokus(null);
        setSelectedPetugas(selected);

        setWithAccuracy(true);
        setMapPosition([selected.lat, selected.long]);
        setMapZoom(17);
    };

    return (
        <>
            <Layout>
                <PageTitle judul={judul} />
                <div className='w-5/6 my-8 px-6 bg-primary-600 rounded-md'>
                    {/*<h1 class="my-2 text-center fw-bolder font-bold text-white">Monitoring Seluruh Petugas</h1>*/}
                    <p className="my-4 text-white">
                        &#x203B; Posisi petugas diperbarui 5 menit sekali dan ketika petugas berpindah lokasi
                        lebih dari 200 meter. Silakan <i>refresh</i> halaman untuk melihat lokasi terbaru.
                    </p>
                    <div className='w-full mb-4 flex items-center justify-stretch gap-3'>
                        <div className='w-full'>
                            <label for='select-lokus' className='text-white font-bold'>
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
                                />
                            </div>
                        </div>
                        <div className='w-full'>
                            <label for='select-nama' className='text-white font-bold'>
                                Posisi petugas berdasarkan nama
                            </label>
                            <div className="w-full rounded-xl bg-[#d93f57] bg-opacity-50">
                                <Select id='select-petugas'
                                    options={petugas}
                                    value={selectedPetugas}
                                    placeholder={"Cari nama petugas"}
                                    onChange={handlePetugasChange}
                                    isSearchable={true}
                                    styles={dropdownStyles}
                                />
                            </div>
                        </div>
                    </div>
                    <MapComponent petugas={petugas} position={mapPosition} zoom={mapZoom} radius={withAccuracy} />
                </div>
            </Layout>
        </>
    )
}
