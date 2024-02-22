import Link from 'next/link';

const { default: BasicTable } = require('@/app/components/BasicTable');

const columns = [
  {
    accessorKey: 'id_bs',
    header: 'Blok Sensus',
  },
  {
    accessorKey: 'nama_tim',
    header: 'Tim Pencacah',
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
          <button className="text-white rounded-lg text-sm text-center px-4 py-2 bg-accent-900 hover:bg-orange-700" onClick={() => navigator.clipboard.writeText(data.kodeBS)}>
            <Link href={`/riset/daftar/daftar-sampel/detail-sampel/bs/${data.id_bs}`}>Detail</Link>
          </button>
        </div>
      );
    },
  },
];

const TableBS = ({ data }) => {
  console.log(data);
  return <BasicTable data={data} columns={columns} />;
};

export default TableBS;
