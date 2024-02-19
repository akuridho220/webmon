'use client';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const HandleExport = (data, judul) => {
  // Function to convert JSON to XLSX
  const jsonToXLSX = (jsonArray) => {
    const worksheet = XLSX.utils.json_to_sheet(jsonArray);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    const fileName = judul + '.xlsx';
    saveAs(blob, fileName);
  };

  Swal.fire({
    title: 'Export Data',
    text: 'Data akan diexport dalam bentuk file excel, apakah anda yakin?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Ok',
    cancelButtonText: 'Cancel',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Data berhasil diexport!', '', 'success');
      jsonToXLSX(data); // Call the function to convert JSON to XLSX
    }
  });
};

export default HandleExport;
