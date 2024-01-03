import Layout from "@/app/layout/layout";
import ButtonTim from "./components/buttonTim";
import TimSelect from "./components/TimSelect";
import TableTim from "./components/TableProgressPerTim";
import * as Icon from "react-feather";
import Box from './components/Box';
import ProgressBar from './components/ProgressBar';

export default function ProgresTim() {
    return(
        <>
           <Layout className="w-full min-h-screen overflow-x-hidden">
            <Box />
            <div className='bg-primary-600 w-5/6 mt-8 px-6'>
                    <div className='flex text-white py-4'>
                        <p className='font-medium'>Monitoring PPL Berdasarkan Tim</p>
                    </div>
                    <div className='flex justify-between mb-4'>
                        {/* <div className='flex flex-row items-center '> */}
                            <TimSelect />
                        {/* </div> */}
                        <div className='flex items-center bg-secondary-800 py-2 px-4 rounded-lg text-white hover:bg-secondary-900'>
                            <Icon.Download size={18}/>
                            <button className=' pl-4'>Export</button>
                        </div>
                    </div>
                    <ProgressBar detail={true} done={6} max={35} />
                <TableTim />
            </div>
          </Layout>
        </>
    )
}
