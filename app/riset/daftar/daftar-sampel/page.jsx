'use client';
import Layout from '@/app/layout/layout';
import Box from './components/Box';
import TableBS from './components/TableBS';
import TableKec from './components/TableKec';
import TableDes from './components/TableDesa';
import TableAll from './components/TableAll';
import * as Icon from 'react-feather';
import { useState } from 'react';

// tabel yg mau ditampilin
const tableType = [
    {
        name: 'bs',
        desc: 'Blok Sensus'
    },
    {
        name: 'kec',
        desc: 'Kecamatan'
    },
    {
        name: 'deskel',
        desc: 'Desa/Kelurahan'
    },
    {
        name: 'all',
        desc: 'Keseluruhan'
    }
]


export default function DaftarSampel() {
    const [filter, setFilter] = useState('bs');

    const selectedTableType = tableType.find((type) => type.name === filter);

    const tableComponents = {
        bs: <TableBS />,
        kec: <TableKec />,
        deskel: <TableDes />,
        all: <TableAll />
    }
    const selectedTableComponent = tableComponents[selectedTableType.name]
    return(
        <>
            <Layout className='w-full min-h-screen overflow-x-hidden'>
                <Box />
                <div className='bg-primary-600 w-5/6 mt-8 px-6'>
                    <div className='flex text-white py-4'>
                        <p className='font-medium'>Progres Sampel Survei</p>
                    </div>
                    <div className='flex justify-between mb-4'>
                        <div className='flex flex-row items-center '>
                            <p className="text-white">Filter :</p>
                            <select className="p-2 border bg-white rounded-lg mx-6 text-sm" id="select-progres-w" onChange={(e) => setFilter(e.target.value)}>
                                {tableType.map((type) => (
                                    <option key={type.name} value={type.name} className='text-sm'>{type.desc}</option>
                                ))}
                            </select>
                        </div>
                        <div className='flex items-center bg-secondary-800 py-2 px-4 rounded-lg text-white hover:bg-secondary-900'>
                            <Icon.Download size={18}/>
                            <button className=' pl-4'>Export</button>
                        </div>
                    </div>
                    {/* Set jenis tabel yg ditampilin */}
                    {selectedTableType && (
                        selectedTableComponent
                    )}
                </div>
            </Layout>
        </>
    )
}
