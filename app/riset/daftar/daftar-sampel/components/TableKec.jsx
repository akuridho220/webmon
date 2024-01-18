import Link from "next/link"
const { default: BasicTable } = require("@/app/components/BasicTable")


const columns = [
    {
        accessorKey: 'nama_kec',
        header: 'Nama Kecamatan'
    },
    {
        accessorKey: 'jumlah_sampel',
        header: 'Jumlah Sampel'
    },
    {
        accessorKey: 'jumlah_listing',
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
                    <Link href={{pathname:`/riset/daftar/daftar-sampel/detail-sampel/kec/${data.kode_kec_full}`, query:{nama: `${data.nama_kec}`}}}>Detail</Link>
                    </button>
                </div>
            )
        }
    }
]

const TableKec = ({data}) => {
    return(
        <BasicTable data={data} columns={columns}/>
    )
}

export default TableKec;