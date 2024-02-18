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
      accessorKey: 'kode_ruta',
      header: 'Kode Ruta',
    },
    {
      accessorKey: 'nim_pencacah',
      header: 'NIM PPL',
    },
    {
      accessorKey: 'nama',
      header: 'Nama PPL',
    },
    {
      accessorKey: 'id_bs',
      header: 'ID BS',
    },
    {
      accessorKey: 'no_bf',
      header: 'BF',
    },
    {
      accessorKey: 'no_bs',
      header: 'BS',
    },
    {
      accessorKey: 'no_segmen',
      header: 'No Segmen',
    },
    {
      accessorKey: 'no_urut_ruta',
      header: 'Nomor Urut RUta',
    },
    {
      accessorKey: 'nama_krt',
      header: 'Nama KRT',
    },
    {
      accessorKey: 'alamat',
      header: 'Alamat',
    },
    // {
    //   accessorFn: (row) => `${row.jml_genx_anak}+${row.jml_genz_dewasa}`,
    //   header: 'Jumlah IS UUP',
    // },
    {
      accessorKey: 'jml_genz_anak',
      header: 'Jumlah Gen Z Anak',
    },
    {
      accessorKey: 'jml_genz_dewasa',
      header: 'Jumlah Gen Z Dewasa',
    },
  ];

const TableAll = ({data}) => {
    return(
        <BasicTable data={data} columns={columns}/>
    )
}

export default TableAll;