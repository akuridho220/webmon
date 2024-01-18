import Link from "next/link"

const { default: BasicTable } = require("@/app/components/BasicTable")

const columns = [
    {
        accessorKey: 'nama_kel',
        header: 'Nama Desa/Kelurahan'
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
                    <button className="bg-accent-800 text-white rounded-lg px-4 py-1 text-sm text-center hover:bg-accent-900" onClick={() => navigator.clipboard.writeText(data.kodeDes)}>
                        <Link href={{pathname:`/riset/daftar/daftar-sampel/detail-sampel/desa/${data.kode_desa_full}`, query:{nama: `${data.nama_kel}`}}}>Detail</Link>
                    </button>
                </div>
            )
        }
    }
]

const TableDes = ({data}) => {
    return(
        <BasicTable data={data} columns={columns}/>
    )
}

export default TableDes;