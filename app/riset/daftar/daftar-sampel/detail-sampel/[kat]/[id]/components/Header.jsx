'use client';
import * as Icon from 'react-feather';
import HandleExport from '@/app/components/HandleExport';

export default function Header({ data }) {
  const dataToExport = data.map((item) => {
    return {
      Kode_Ruta: item.kode_ruta,
      Kode_BS: item.id_bs,
      Tim_Pencacah: item.nama_tim,
      NIM_Pencacah: item.nim_pencacah,
      Nama_Pencacah: item.nama,
      No_Segmen: item.no_segmen,
      BF: item.no_bf,
      BS: item.no_bs,
      No_urut_ruta: item.no_urut_ruta,
      No_urut_eligible: item.no_urut_ruta_egb,
      Nama_KRT: item.nama_krt,
      Jumlah_genZ_anak: item.jml_genz_anak,
      Jumlah_genZ_dewasa: item.jml_genz_dewasa,
      Alamat: item.alamat,
      Lat: item.lat,
      Long: item.long,
      Status_Cacah: item.status == 2 ? 'Tercacah' : 'Belum Tercacah',
    };
  });

  const Export = () => {
    HandleExport(dataToExport, 'Detail-Sampel');
  };

  return (
    <div className="flex w-[100%] justify-end">
      <button onClick={Export} className="md:w-fit w-full flex items-center justify-center bg-secondary-800 py-2 px-6  rounded-lg text-white hover:bg-secondary-900">
        <Icon.Download size={18} />
        <p className=" pl-4">Export</p>
      </button>
    </div>
  );
}
