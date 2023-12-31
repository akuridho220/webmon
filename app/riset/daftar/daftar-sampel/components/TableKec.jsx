const { default: BasicTable } = require("@/app/components/BasicTable")

const datas = [
    {
        namaKec: 'Kuta',
        jumlahSampel: "102",
        jumlahListing: "2753",
    },
    {
        namaKec: 'Kuta Selatan',
        jumlahSampel: "200",
        jumlahListing: "3846",
    },
    {
        namaKec: 'Kuta Utara',
        jumlahSampel: '169',
        jumlahListing: '2931',
    },
    {
        namaKec: 'Mengwi',
        jumlahSampel: "223",
        jumlahListing: "3508",
    },
    {
        namaKec: 'Petang',
        jumlahSampel: "145",
        jumlahListing: "2554",
    },
    {
        namaKec: 'Abiansemal',
        jumlahSampel: "46",
        jumlahListing: "1646",
    },
    {
        namaKec: 'Bangli',
        jumlahSampel: "109",
        jumlahListing: "2045",
    },
    {
        namaKec: 'Kintamani',
        jumlahSampel: "168",
        jumlahListing: "2486",
    },
    {
        namaKec: 'Susut',
        jumlahSampel: "98",
        jumlahListing: "1732",
    },
    {
        namaKec: 'Banjar',
        jumlahSampel: "170",
        jumlahListing: "2712",
    },
    {
        namaKec: 'Buleleng',
        jumlahSampel: "127",
        jumlahListing: "2165",
    },
    {
        namaKec: 'Tejakula',
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
]

const TableKec = () => {
    return(
        <BasicTable data={datas} columns={columns}/>
    )
}

export default TableKec;