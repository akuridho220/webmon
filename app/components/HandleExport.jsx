'use client';
import Swal from 'sweetalert2';
import React from 'react';

const HandleExport = () => {
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
      Swal.fire('Error', 'Maaf Fitur belum terimplementasi', 'error');
    }
  });
};

export default HandleExport;
