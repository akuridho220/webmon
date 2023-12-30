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
]

export default function TableBS() {
    function filterShow(){
        
    }
    return (
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
                                <tr>
                                    <th scope="col" className="px-6 py-3" >
                                        Kode BS
                                    </th>
                                    <th scope="col" className="px-6 py-3" >
                                        Pencacah
                                    </th>
                                    <th scope="col" className="px-6 py-3" >
                                        Jumlah Sampel
                                    </th>
                                    <th scope="col" className="px-6 py-3" >
                                        Jumlah Terlisting
                                    </th>
                                    <th scope="col" className="px-6 py-3" >
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {datas.map(data => (
                                    <tr key={data.kodeBS}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-600">{data.kodeBS}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-600">{data.pencacah}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            <div className="text-sm text-gray-600">{data.jumlahSampel}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            <div className="text-sm text-gray-600">{data.jumlahListing}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                                            <a href="#" className="bg-accent-800 px-4 py-1 text-white rounded-xl hover:bg-accent-900">
                                                Detail
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}