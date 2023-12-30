'use client'
import { 
    getCoreRowModel, 
    useReactTable, 
    flexRender, 
    getPaginationRowModel } from "@tanstack/react-table";
import { useState } from "react";

const datas = [
    {
        kodeBS: '3507040001013B',
        pencacah: 'Ridho',
        jumlahSampel: '10',
        jumlahListing: '86',
    },
    {
        kodeBS: '3507040001023B',
        pencacah: 'Ridho',
        jumlahSampel: '10',
        jumlahListing: '81',
    },
    {
        kodeBS: '3507040001025B',
        pencacah: 'Ridho',
        jumlahSampel: '10',
        jumlahListing: '90',
    },
    {
        kodeBS: '3507040001027B',
        pencacah: 'Ridho',
        jumlahSampel: '10',
        jumlahListing: '78',
    },
    {
        kodeBS: '3507040001013B',
        pencacah: 'Tya',
        jumlahSampel: '10',
        jumlahListing: '86',
    },
    {
        kodeBS: '3507040001023B',
        pencacah: 'Tya',
        jumlahSampel: '10',
        jumlahListing: '81',
    },
    {
        kodeBS: '3507040001025B',
        pencacah: 'Tya',
        jumlahSampel: '10',
        jumlahListing: '90',
    },
    {
        kodeBS: '3507040001027B',
        pencacah: 'Tya',
        jumlahSampel: '10',
        jumlahListing: '78',
    },
]

const columns = [
    {
        accessorKey: 'kodeBS',
        header: 'Kode BS'
    },
    {
        accessorKey: 'pencacah',
        header: 'Pencacah'
    },
    {
        accessorKey: 'jumlahSampel',
        header: 'Jumlah Sampel'
    },
    {
        accessorKey: 'jumlahListing',
        header: 'Jumlah Terlisting'
    },

]

const Table = () => {
    const [data, setData] = useState(datas)
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    });

    return(
        <div className="flex flex-col my-2">
            <div className="-my-2 overflow-x-auto sm:-mx-6">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <div className="flex justify-between bg-gray-100">
                            <div className="flex items-center text-sm p-4 ">
                                <p className="">Show</p>
                                <select className="p-2 border bg-white rounded-lg mx-2" id="select-progres-w">
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                                <p className="">entries</p>
                            </div>
                            <div className="flex items-center text-sm p-4">
                                <p className="px-2">Search :</p>
                                <input type="text" className="p-2 border rounded"/>
                            </div>
                        </div>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-200 text-sm font-medium text-gray-700 uppercase tracking-wider">
                                {table.getHeaderGroups().map(headerGroup => (
                                    <tr key={headerGroup.id}>
                                        {headerGroup.headers.map(header => (
                                            <th key={header.id} scope="col" className="px-6 py-3">
                                                {flexRender(header.column.columnDef.header, header.getContext())}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {table.getRowModel().rows.map(row => (
                                    <tr key={row.id}>
                                        {row.getVisibleCells().map(cell => (
                                            <td key={cell.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table;