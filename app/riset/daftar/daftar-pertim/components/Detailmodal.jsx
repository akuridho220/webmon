import Modal from "react-modal";
import Image from "next/image";
import { useEffect, useState } from "react";

const DetailModal = ({ isOpen, onClose, dataPml, dataPpl }) => {
  

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Detail Modal"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg w-3/5"
        overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20"
        ariaHideApp={false}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mx-auto">Detail Informasi Tim</h2>
          <button
            onClick={onClose}
            className="text-[#d93f57] hover:text-red-700 text-2xl"
          >
            &#10006;
          </button>
        </div>
        <hr />
        <div className="flex flex-col items-center justify-center">
          <p className="text-center">Tim {dataPml[0].id_tim}</p>
          <p className="text-center mb-6">Lokus {dataPml[0].lokus}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center">
            <Image
              src="/img/maskot/1.png"
              width={120}
              height={160}
              alt="foto"
            />
            <p className="text-[#d93f57] text-opacity-90 text-center">
              {dataPml[0].nama}
            </p>
            <p className="bg-[#d93f57] bg-opacity-20 rounded-xl text-center p-2">
              PML | {dataPml[0].nim}
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          {dataPpl.map((ppl) => (
            <div className="flex flex-col items-center w-36 justify-between" key={ppl.nim}>
              <Image
              src="/img/maskot/1.png"
              width={120}
              height={160}
              alt="foto"
              />
              <p className="text-[#d93f57] text-opacity-90 text-center">
                {ppl.nama}
              </p>
              <p className="bg-[#d93f57] bg-opacity-20 rounded-xl text-center p-2">
                PPL | {ppl.nim}
              </p>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default DetailModal;
