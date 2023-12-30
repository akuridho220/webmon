import Layout from '@/app/layout/layout';
import Box from './components/Box';
import TableBs from './components/TableBS';
import Table from './components/Table';
import * as Icon from 'react-feather';

export default function DaftarSampel() {
    const datas = [
        {
            kodeRuta:'xxx',
            nim:'222112319',
            namaPPl:'Ridho',
            kodeBs:'3507100014021B',
            bs:'01',
            bf:'01',
            noUrutRuta:'024',
            kodeKot:'3507',
            namaKot:'Gianyar',
            kodeKec:'3507100',
            namaKec:'Suatu Kec',
            kodeDes:'2507100014',
            namaDes:'Bantur',
            namaKrt:'Suditono',
            alamat:'Jalan Sm Km',
            jmlArt:'4',
            jmlArtGenZ:'2',
            noHp:'087123456789',
            kodeEligible:'2',
            latitude:'-8.04747969',
            longitude:'112.80824719',
            akurasi:'6',
            status:'',
            time:'25 January 2023 11:31:25'
        }
    ]
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
                            <Icon.Download />
                            <button className=' pl-4'>Export</button>
                        </div>
                    </div>
                    <Table/>
                </div>
            </Layout>
        </>
    )
}
