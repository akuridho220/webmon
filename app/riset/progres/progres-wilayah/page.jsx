import Layout from "@/app/layout/layout"
import Box from './components/Box';
import WilayahSelect from "./components/WilayahSelect";
import TableWilayah from "./components/TableProgressPerWilayah";
import ProgressBar from "./components/ProgressBar";
import * as Icon from "react-feather";


export default function ProgresWilayah() {
    return(
        <>
            <Layout className="w-full min-h-screen overflow-x-hidden">
            <Box />
            <div className='bg-primary-600 w-5/6 mt-8 px-6'>
                    <div className='flex text-white py-4'>
                        <p className='font-medium'>Monitoring PPL Berdasarkan Wilayah</p>
                    </div>
                    <div className='flex text-white py-4'>
                        <p className='font-medium'>Pilih wilayah</p>
                    </div>
                    <div className='flex justify-between mb-4'>
                        {/* <div className='flex flex-row items-center '> */}
                            <WilayahSelect/>
                        {/* </div> */}
                        <div className='flex items-center bg-secondary-800 py-2 px-4 rounded-lg text-white hover:bg-secondary-900'>
                            <Icon.Download size={18}/>
                            <button className=' pl-4'>Export</button>
                        </div>
                    </div>
                    <ProgressBar detail={true} done={6} max={35} />
                <TableWilayah />
            </div>
            </Layout>
        </>
    )
}
