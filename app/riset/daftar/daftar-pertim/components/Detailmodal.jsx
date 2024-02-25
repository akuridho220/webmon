import Modal from 'react-modal';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const photo_url = process.env.NEXT_PUBLIC_PHOTO_URL;
const DetailModal = ({ isOpen, onClose, dataPml, dataPpl }) => {
  
  const [imageUrl, setImageUrl] = useState('');

  // useEffect(() => {
  //   // Fetch image URL from API
  //   fetch(`${photo_url}222112319`)
  //     .then(response => response.json())
  //     .then(data => setImageUrl(data.imageUrl))
  //     .catch(error => console.error('Error fetching image URL:', error));
  // }, []);
  //console.log(photo_url.concat(dataPml[0].nim_pml)[0].status)
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Detail Modal"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg md:w-3/5 w-[95%] overflow-y-auto max-h-full z-30"
        overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20"
        ariaHideApp={false}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mx-auto">Detail Informasi Tim</h2>
          <button onClick={onClose} className="text-[#d93f57] hover:text-red-700 text-2xl">
            &#10006;
          </button>
        </div>
        <hr />
        <div className="flex flex-col items-center justify-center">
          <p className="text-center">Tim {dataPml[0].nama_tim}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center text-sm md:text-base">
            <Image src={photo_url.concat(dataPml[0].nim_pml).status != 404 ? `${photo_url}${dataPml[0].nim_pml}` : "/img/maskot/1.png"} width={120} height={160} alt="foto" />
            {/* <Image src={"/img/maskot/1.png"} width={120} height={160} alt="foto" /> */}
            <p className="text-[#d93f57] text-opacity-90 text-center">{dataPml[0].nama}</p>
            <p className="bg-[#d93f57] bg-opacity-20 rounded-xl text-center p-2">PML | {dataPml[0].nim_pml}</p>
          </div>
        </div>

        <div className="md:flex grid grid-cols-2 gap-4 justify-between">
          {dataPpl.map((ppl) => (
            <div className="flex flex-col items-center w-36 justify-between text-sm md:text-base" key={ppl.nim}>
              <Image src={`${photo_url}${ppl.nim}`} width={120} height={160} alt="foto" />
              <p className="text-[#d93f57] text-opacity-90 text-center">{ppl.nama}</p>
              <p className="bg-[#d93f57] bg-opacity-20 rounded-xl text-center p-2">PPL | {ppl.nim}</p>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default DetailModal;
