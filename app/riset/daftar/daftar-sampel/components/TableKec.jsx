import Link from "next/link"
const { default: BasicTable } = require("@/app/components/BasicTable")

const datas = [
    {
        namaKec: 'Kuta',
        kodeKec: 'kodenya',
        jumlahSampel: "102",
        jumlahListing: "2753",
    },
    {
        namaKec: 'Kuta Selatan',
        kodeKec: 'kodenya',
        jumlahSampel: "200",
        jumlahListing: "3846",
    },
    {
        namaKec: 'Kuta Utara',
        kodeKec: 'kodenya',
        jumlahSampel: '169',
        jumlahListing: '2931',
    },
    {
        namaKec: 'Mengwi',
        kodeKec: 'kodenya',
        jumlahSampel: "223",
        jumlahListing: "3508",
    },
    {
        namaKec: 'Petang',
        kodeKec: 'kodenya',
        jumlahSampel: "145",
        jumlahListing: "2554",
    },
    {
        namaKec: 'Abiansemal',
        kodeKec: 'kodenya',
        jumlahSampel: "46",
        jumlahListing: "1646",
    },
    {
        namaKec: 'Bangli',
        kodeKec: 'kodenya',
        jumlahSampel: "109",
        jumlahListing: "2045",
    },
    {
        namaKec: 'Kintamani',
        kodeKec: 'kodenya',
        jumlahSampel: "168",
        jumlahListing: "2486",
    },
    {
        namaKec: 'Susut',
        kodeKec: 'kodenya',
        jumlahSampel: "98",
        jumlahListing: "1732",
    },
    {
        namaKec: 'Banjar',
        kodeKec: 'kodenya',
        jumlahSampel: "170",
        jumlahListing: "2712",
    },
    {
        namaKec: 'Buleleng',
        kodeKec: 'kodenya',
        jumlahSampel: "127",
        jumlahListing: "2165",
    },
    {
        namaKec: 'Tejakula',
        kodeKec: 'kodenya',
        jumlahSampel: "129",
        jumlahListing: "1929",
    },
]

const columns = [
    {
        accessorKey: 'namaKec',
        header: 'Nama Kecamatan'
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
                    <button className="bg-accent-800 text-white rounded-lg px-4 py-1 text-sm text-center hover:bg-accent-900" onClick={() => navigator.clipboard.writeText(data.kodeKec)}>
                        <Link href={`/riset/daftar/daftar-sampel/detail-sampel/${data.kodeKec}`}>Detail</Link>
                    </button>
                </div>
            )
        }
    }
]

const TableKec = () => {
    return(
        <BasicTable data={datas} columns={columns}/>
    )
}

export default TableKec;