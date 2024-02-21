'use client';

import React, { useState, useEffect } from 'react';
import ProgressKueKab from './ProgressKueKab';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import * as Icon from 'react-feather';

const ProgressKueWilayah = ({ data }) => {
  const dataWilayah = data ?? [];
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowArrows(window.innerWidth >= 768); // Ganti 768 dengan breakpoint yang sesuai untuk ukuran medium
    };
    handleResize(); // Panggil fungsi handleResize saat komponen dimuat
    window.addEventListener('resize', handleResize); // Tambahkan event listener untuk menangani perubahan ukuran jendela
    return () => window.removeEventListener('resize', handleResize); // Membersihkan event listener saat komponen dibongkar
  }, []);

  console.log(dataWilayah);
  // Fungsi untuk menampilkan panah sebelumnya
  const renderPrevArrow = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 0 }}>
        <Icon.ChevronLeft />
      </button>
    );

  // Fungsi untuk menampilkan panah selanjutnya
  const renderNextArrow = (onClickHandler, hasNext, label) =>
    hasNext && (
      <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 0 }}>
        <Icon.ChevronRight />
      </button>
    );

  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
    background: 'transparent',
    border: 0,
    outline: 0,
    fontSize: '1.5rem',
    transition: 'all 0.3s ease',
    color: '#011F4B',
  };

  return (
    <>
      <div className="w-full mx-auto bg-white rounded-xl  text-hitam-100 shadow-md pb-4 overflow-hidden">
        <div className="font-semibold text-base flex w-[98%] mx-auto items-center overflow-hidden">
          <div className=" mx-4 my-4 space-y-4 w-full">
            <p className="font-semibold text-lg md:text-xl">Progress Pencacahan per Wilayah</p>
            <hr className="bg-slate-300 w-full h-[0.12rem] shadow-xl" />
            <div className="block w-[98%]">
              <Carousel
                showArrows={showArrows}
                autoPlay
                infiniteLoop
                stopOnHover={true}
                showStatus={false}
                renderArrowPrev={renderPrevArrow} // Menambahkan renderPrevArrow
                renderArrowNext={renderNextArrow} // Menambahkan renderNextArrow
              >
                {dataWilayah.map((item, index) => (
                  <ProgressKueKab key={index} kabupaten={item.nama_kab} totalSampel={item.total} Selesai={item.tercacah} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressKueWilayah;
