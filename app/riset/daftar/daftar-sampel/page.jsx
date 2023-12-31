import Layout from '@/app/layout/layout';
import Box from './components/Box';
import TableBS from './components/TableBS';
import Table from './components/Table';
import * as Icon from 'react-feather';

export default function DaftarSampel() {
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
                            <select className="p-2 border bg-white rounded-lg mx-6" id="select-progres-w">
                                <option value="table-w1">Blok Sensus</option>
                                <option value="table-w2">Kecamatan</option>
                                <option value="table-w3">Desa/Kelurahan</option>
                                <option value="table-w4">Keseluruhan</option>
                            </select>
                        </div>
                        <div className='flex items-center bg-secondary-800 py-2 px-4 rounded-lg text-white hover:bg-secondary-900'>
                            <Icon.Download size={18}/>
                            <button className=' pl-4'>Export</button>
                        </div>
                    </div>
                    <TableBS/>
                </div>
            </Layout>
        </>
    )
}
