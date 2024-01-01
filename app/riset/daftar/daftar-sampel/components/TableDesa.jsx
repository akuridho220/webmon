import Link from "next/link"

const { default: BasicTable } = require("@/app/components/BasicTable")

const datas = [
    {
        namaDes: 'Kuta',
        kodeDes: 'kodenya',
        jumlahSampel: "102",
        jumlahListing: "2753",
    },
    {
        namaDes: 'Ungasan',
        kodeDes: 'kodenya',
        jumlahSampel: "200",
        jumlahListing: "3846",
    },
    {
        namaDes: 'Canggu',
        kodeDes: 'kodenya',
        jumlahSampel: '169',
        jumlahListing: '2931',
    },
    {
        namaDes: 'Tumbak Bayuh',
        kodeDes: 'kodenya',
        jumlahSampel: "223",
        jumlahListing: "3508",
    },
    {
        namaDes: 'Carang Sari',
        kodeDes: 'kodenya',
        jumlahSampel: "145",
        jumlahListing: "2554",
    },
    {
        namaDes: 'Mambal',
        kodeDes: 'kodenya',
        jumlahSampel: "46",
        jumlahListing: "1646",
    },
    {
        namaDes: 'Kubu',
        kodeDes: 'kodenya',
        jumlahSampel: "109",
        jumlahListing: "2045",
    },
    {
        namaDes: 'Kintamani',
        kodeDes: 'kodenya',
        jumlahSampel: "168",
        jumlahListing: "2486",
    },
    {
        namaDes: 'Apuan',
        kodeDes: 'kodenya',
        jumlahSampel: "98",
        jumlahListing: "1732",
    },
    {
        namaDes: 'Kayu Putih',
        kodeDes: 'kodenya',
        jumlahSampel: "170",
        jumlahListing: "2712",
    },
    {
        namaDes: 'Banjar Bali',
        kodeDes: 'kodenya',
        jumlahSampel: "127",
        jumlahListing: "2165",
    },
    {
        namaDes: 'Bondalem',
        kodeDes: 'kodenya',
        jumlahSampel: "129",
        jumlahListing: "1929",
    },
]

const columns = [
    {
        accessorKey: 'namaDes',
        header: 'Nama Desa/Kelurahan'
    },
    {
        accessorKey: 'jumlahSampel',
        header: 'Jumlah Sampel'
    },
    {
        accessorKey: 'jumlahListing',
        header: 'Jumlah Terlisting'
    },
    {
        id: 'actions',
        header: 'Aksi',
        cell: ({row}) => {
            const data = row.original
            return (
                <div className="bg-white flex justify-center">
                    <button className="bg-accent-800 text-white rounded-lg px-4 py-1 text-sm text-center hover:bg-accent-900" onClick={() => navigator.clipboard.writeText(data.kodeDes)}>
                        <Link href={`/riset/daftar/daftar-sampel/detail-sampel/${data.kodeDes}`}>Detail</Link>
                    </button>
                </div>
            )
        }
    }
]

const TableDes = () => {
    return(
        <BasicTable data={datas} columns={columns}/>
    )
}

export default TableDes;