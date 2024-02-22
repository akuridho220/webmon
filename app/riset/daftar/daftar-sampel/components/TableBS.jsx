import Link from 'next/link';

const { default: BasicTable } = require("@/app/components/BasicTable")

const columns = [
    {
        accessorKey: 'id_bs',
        header: 'Blok Sensus'
    },
    {
        accessorKey: 'nama_tim',
        header: 'Tim Pencacah'
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
                    <button className="bg-accent-800 text-white rounded-lg px-4 py-1 text-sm text-center hover:bg-accent-900" onClick={() => navigator.clipboard.writeText(data.kodeBS)}>
                        <Link href={`/riset/daftar/daftar-sampel/detail-sampel/bs/${data.id_bs}`}>Detail</Link>
                    </button>
                </div>
            )
        }
    }
]

const TableBS = ({data}) => {
    return(
        <BasicTable data={data} columns={columns}/>
    )
}

export default TableBS;