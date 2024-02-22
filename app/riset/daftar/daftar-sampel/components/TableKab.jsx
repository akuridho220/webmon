import Link from "next/link"
const { default: BasicTable } = require("@/app/components/BasicTable")


const columns = [
    {
        accessorKey: 'nama_kab',
        header: 'Nama Kabupaten'
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
                        <Link href={{pathname:`/riset/daftar/daftar-sampel/detail-sampel/kab/${data.id_bs}`, query:{nama: `${data.nama_kab}`}}}>Detail</Link>
                    </button>
                </div>
            )
        }
    }
]

const TableKab = ({data}) => {
    return(
        <BasicTable data={data} columns={columns}/>
    )
}

export default TableKab;