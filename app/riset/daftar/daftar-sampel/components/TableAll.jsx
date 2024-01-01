const { default: BasicTable } = require("@/app/components/BasicTable")

const datas = [
    {
        kodeRuta:'xxx',
        nim:'222112319',
        namaPPL:'Ridho',
        kodeBs:'3507100014021B',
        bs:'01',
        bf:'01',
        noUrutRuta:'024',
        kodeKot:'3507',
        namaKot:'Gianyar',
        kodeKec:'3507100',
        namaKec:'Suatu Kec',
        kodeDes:'2507100014',
        namaDes:'Bantur',
        namaKrt:'Suditono',
        alamat:'Jalan Sm Km',
        jmlArt:'4',
        jmlArtGenZ:'2',
        noHp:'087123456789',
        kodeEligible:'2',
        latitude:'-8.04747969',
        longitude:'112.80824719',
        akurasi:'6',
        status:'',
        time:'25 January 2023 11:31:25'
    }
]

const columns = [
    {
        accessorKey: 'kodeRuta',
        header: 'Kode Ruta'
    },
    {
        accessorKey: 'nim',
        header: 'NIM PPL'
    },
    {
        accessorKey: 'namaPPL',
        header: 'Nama PPL'
    },
    {
        accessorKey: 'kodeBs',
        header: 'Kode Blok Sensus'
    },
    {
        accessorKey: 'bs',
        header: 'BS'
    },
    {
        accessorKey: 'bf',
        header: 'BF'
    },
    {
        accessorKey: 'noUrutRuta',
        header: 'Nomor Urut Ruta'
    },
    {
        accessorKey: 'kodeKot',
        header: 'Kode Kabupaten/Kota'
    },
    {
        accessorKey: 'namaKot',
        header: 'Nama Kabupaten/Kota'
    },
    {
        accessorKey: 'kodeKec',
        header: 'Kode Kecamatan'
    },
    {
        accessorKey: 'namaKec',
        header: 'Nama Kecamatan'
    },
    {
        accessorKey: 'kodeDes',
        header: 'Kode Desa/Kelurahan'
    },
    {
        accessorKey: 'namaDes',
        header: 'Nama Desa/Kelurahan'
    },
    {
        accessorKey: 'namaKrt',
        header: 'Nama KRT'
    },
    {
        accessorKey: 'alamat',
        header: 'Alamat'
    },
    {
        accessorKey: 'jmlArt',
        header: 'Jumlah ART'
    },
    {
        accessorKey: 'jmlArtGenZ',
        header: 'Jumlah ART Gen Z'
    },
    {
        accessorKey: 'noHp',
        header: 'Nomor HP'
    },
    {
        accessorKey: 'kodeEligible',
        header: 'Kode Eligible'
    },
    {
        accessorKey: 'latitude',
        header: 'Latitude'
    },
    {
        accessorKey: 'longitude',
        header: 'Longitude'
    },
    {
        accessorKey: 'akurasi',
        header: 'Akurasi'
    },
    {
        accessorKey: 'status',
        header: 'Status'
    },
    {
        accessorKey: 'time',
        header: 'Time'
    },
]

const TableAll = () => {
    return(
        <BasicTable data={datas} columns={columns}/>
    )
}

export default TableAll;