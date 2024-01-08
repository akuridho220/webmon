import Layout from '@/app/layout/layout';
import PageTitle from '@/app/components/PageTitle';
import TableType from './components/SelectTableType';

const fetchData = async (url) => {
    const response = await fetch(url, { next: { revalidate: 60 } });
    return await response.json();
};

const getDataBs = async () => {
    const [dataSampel, dataListing] = await Promise.all([
        fetchData('http://localhost:3100/api/riset/daftar/sampel/bs'),
        fetchData('http://localhost:3100/api/riset/daftar/listing/bs'),
    ]);

    const mergedData = dataSampel.map((sampelItem) => {
        const matchingListing = dataListing.find(
            (listingItem) => sampelItem.kode_bs === listingItem.kode_bs
        );
    
        return {
            ...sampelItem,
            jumlah_listing: matchingListing ? matchingListing.jumlah_listing : 0,
        };
    });

    return mergedData;
};

const getDataKec = async () => {
    const [dataSampel, dataListing] = await Promise.all([
        fetchData('http://localhost:3100/api/riset/daftar/sampel/kec'),
        fetchData('http://localhost:3100/api/riset/daftar/listing/kec'),
    ]);

    const mergedData = dataSampel.map((sampelItem) => {
        const matchingListing = dataListing.find(
            (listingItem) => sampelItem.kode_bs === listingItem.kode_bs
        );
    
        return {
            ...sampelItem,
            jumlah_listing: matchingListing ? matchingListing.jumlah_listing : 0,
        };
    });

    return mergedData;
};

const getDataKab = async () => {
    const [dataSampel, dataListing] = await Promise.all([
        fetchData('http://localhost:3100/api/riset/daftar/sampel/kab'),
        fetchData('http://localhost:3100/api/riset/daftar/listing/kab'),
    ]);

    const mergedData = dataSampel.map((sampelItem) => {
        const matchingListing = dataListing.find(
            (listingItem) => sampelItem.kode_bs === listingItem.kode_bs
        );
    
        return {
            ...sampelItem,
            jumlah_listing: matchingListing ? matchingListing.jumlah_listing : 0,
        };
    });

    return mergedData;
};

const judul = 'Daftar Sampel';

const getDataDes = async () => {
    const [dataSampel, dataListing] = await Promise.all([
        fetchData('http://localhost:3100/api/riset/daftar/sampel/desa'),
        fetchData('http://localhost:3100/api/riset/daftar/listing/desa'),
    ]);

    const mergedData = dataSampel.map((sampelItem) => {
        const matchingListing = dataListing.find(
            (listingItem) => sampelItem.kode_bs === listingItem.kode_bs
        );
    
        return {
            ...sampelItem,
            jumlah_listing: matchingListing ? matchingListing.jumlah_listing : 0,
        };
    });

    return mergedData;
};

export default async function DaftarSampel() {
    const dataBs = getDataBs();
    const dataKec = getDataKec();
    const dataDesa = getDataDes();
    const dataKab = getDataKab();

    const [bs, kec, desa, kab] = await Promise.all([dataBs, dataKec, dataDesa, dataKab]);
    return(
        <Layout className='w-full min-h-screen overflow-x-hidden'>
            <PageTitle judul={judul} />
            <TableType dataBs={bs} dataDesa={desa} dataKab={kab} dataKec={kec}/>
        </Layout>
    )
}
