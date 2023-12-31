const { default: BasicTable } = require("@/app/components/BasicTable")

const datas = [
    {
        namaDes: 'Kuta',
        jumlahSampel: "102",
        jumlahListing: "2753",
    },
    {
        namaDes: 'Ungasan',
        jumlahSampel: "200",
        jumlahListing: "3846",
    },
    {
        namaDes: 'Canggu',
        jumlahSampel: '169',
        jumlahListing: '2931',
    },
    {
        namaDes: 'Tumbak Bayuh  ',
        jumlahSampel: "223",
        jumlahListing: "3508",
    },
    {
        namaDes: 'Carang Sari',
        jumlahSampel: "145",
        jumlahListing: "2554",
    },
    {
        namaDes: 'Mambal',
        jumlahSampel: "46",
        jumlahListing: "1646",
    },
    {
        namaDes: 'Kubu',
        jumlahSampel: "109",
        jumlahListing: "2045",
    },
    {
        namaDes: 'Kintamani',
        jumlahSampel: "168",
        jumlahListing: "2486",
    },
    {
        namaDes: 'Apuan',
        jumlahSampel: "98",
        jumlahListing: "1732",
    },
    {
        namaDes: 'Kayu Putih',
        jumlahSampel: "170",
        jumlahListing: "2712",
    },
    {
        namaDes: 'Banjar Bali',
        jumlahSampel: "127",
        jumlahListing: "2165",
    },
    {
        namaDes: 'Bondalem',
        jumlahSampel: "129",
        jumlahListing: "1929",
    },
]

const columns = [
    {
        accessorKey: 'namaDes',
        header: 'Nama Desa/Kelurahan'
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

const TableDes = () => {
    return(
        <BasicTable data={datas} columns={columns}/>
    )
}

export default TableDes;