'use client'
import { 
    getCoreRowModel, 
    useReactTable, 
    flexRender, 
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel } from "@tanstack/react-table";
import { useState } from "react";
import * as Icon from 'react-feather';


function BasicTable({data, columns}) {
    const[sorting, setSorting] = useState([])
    const[filtering, setFiltering] = useState('')

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting: sorting,
            globalFilter: filtering
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering

    })
    return(
        <div className="flex flex-col my-2">
            <div className="-my-2 overflow-x-auto sm:-mx-6">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6">
                    <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
                        <div className="flex justify-between bg-gray-100">
                            <div className="flex items-center text-sm p-4 ">
                                <p className="">Show</p>
                                <select id='filterSize' className="p-2 border bg-white rounded-lg mx-2" onChange={(event) => table.setPageSize(parseInt(event.target.value))}>
                                    <option value="10" >10</option>
                                    <option value="25" >25</option>
                                    <option value="50" >50</option>
                                    <option value="100" >100</option>
                                </select>
                                <p className="">entries</p>
                            </div>
                            <div className="flex items-center text-sm p-4">
                                <p className="px-2">Search :</p>
                                <input type="text" className="p-2 border rounded" value={filtering} onChange={(e) => setFiltering(e.target.value)}/>
                            </div>
                        </div>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-200 text-sm font-medium text-gray-700 uppercase tracking-wider">
                                {table.getHeaderGroups().map(headerGroup => (
                                    <tr key={headerGroup.id}>
                                        {headerGroup.headers.map(header => (
                                            <th key={header.id} scope="col" className="px-6 py-3 cursor-pointer text-center" onClick={header.column.getToggleSortingHandler()}>
                                                <div className="flex items-center justify-center">
                                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                                    {{asc: <Icon.ChevronUp size={16}/>, desc:<Icon.ChevronDown size={16}/>}[header.column.getIsSorted() ?? '      ']}
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {table.getRowModel().rows.map(row => (
                                    <tr key={row.id}>
                                        {row.getVisibleCells().map(cell => (
                                            <td key={cell.id} className="px-6 py-3 whitespace-nowrap text-sm text-gray-600 text-center">
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex text-white py-2 justify-end">
                        <Icon.ChevronsLeft 
                            onClick={() => table.setPageIndex(0)} 
                            className="cursor-pointer"/>
                        <Icon.ChevronLeft 
                            aria-disabled={!table.getCanPreviousPage()} 
                            onClick={() => table.previousPage()}
                            className="cursor-pointer"/>
                        <p className="px-4">{table.getState().pagination.pageIndex + 1} / {table.getPageCount()}</p>
                        <Icon.ChevronRight 
                            aria-disabled={!table.getCanNextPage()} 
                            onClick={() => table.nextPage()}
                            className="cursor-pointer"/>
                        <Icon.ChevronsRight 
                            onClick={() => table.setPageIndex(table.getPageCount() - 1)} 
                            className="cursor-pointer"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasicTable;