import Layout from '@/app/layout/layout';
import Box from './components/Box';
import TableType from './components/SelectTableType';


export default function DaftarSampel() {
    return(
        <Layout className='w-full min-h-screen overflow-x-hidden'>
            <Box />
            <TableType />
        </Layout>
    )
}
