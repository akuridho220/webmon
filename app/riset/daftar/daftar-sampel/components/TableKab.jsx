import Link from 'next/link';
const { default: BasicTable } = require('@/app/components/BasicTable');

const columns = [
  {
    accessorKey: 'nama_kab',
    header: 'Nama Kabupaten',
  },
  {
    accessorKey: 'jumlah_sampel',
    header: 'Jumlah Sampel',
  },
  {
    accessorKey: 'jumlah_listing',
    header: 'Jumlah Terlisting',
  },
  {
    id: 'actions',
    header: 'Aksi',
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div className="bg-white flex justify-center">
          <button className="text-white rounded-lg  text-sm text-center px-4 py-2 bg-accent-900 hover:bg-orange-700" onClick={() => navigator.clipboard.writeText(data.kodeKec)}>
            <Link href={{ pathname: `/riset/daftar/daftar-sampel/detail-sampel/kab/${data.id_bs}`, query: { nama: `${data.nama_kab}` } }}>Detail</Link>
          </button>
        </div>
      );
    },
  },
];

const TableKab = ({ data }) => {
  return <BasicTable data={data} columns={columns} />;
};

export default TableKab;
