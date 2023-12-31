import Modal from "react-modal";
import Image from "next/image";

const DetailModal = ({ isOpen, onClose, data }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Detail Modal"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg w-90"
        overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
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
        <p className="text-center">Tim 110</p>
        <p className="text-center mb-6">Lokus Denpasar</p>

        <div className="flex justify-center items-center">
          <div className="mr-4">
            <Image
              src="/img/maskot/1.png"
              width={150}
              height={200}
              alt="foto"
            />
            <p className="text-[#d93f57] text-opacity-90 text-center">
              Ridho Pangestu
            </p>
            <p className="bg-[#d93f57] bg-opacity-20 rounded-xl text-center p-2">
              PML | 22211918
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="mr-4">
            <Image
              src="/img/maskot/1.png"
              width={150}
              height={200}
              alt="foto"
            />
            <p className="text-[#d93f57] text-opacity-90 text-center">
              Anggota 1
            </p>
            <p className="bg-[#d93f57] bg-opacity-20 rounded-xl text-center p-2">
              PPL | 22211918
            </p>
          </div>
          <div className="mr-4 ml-4">
            <Image
              src="/img/maskot/1.png"
              width={150}
              height={200}
              alt="foto"
            />
            <p className="text-[#d93f57] text-opacity-90 text-center">
              Anggota 2
            </p>
            <p className="bg-[#d93f57] bg-opacity-20 rounded-xl text-center p-2">
              PPL | 22211918
            </p>
          </div>
          <div className="ml-4">
            <Image
              src="/img/maskot/1.png"
              width={150}
              height={200}
              alt="foto"
            />
            <p className="text-[#d93f57] text-opacity-90 text-center">
              Anggota 3
            </p>
            <p className="bg-[#d93f57] bg-opacity-20 rounded-xl text-center p-2">
              PPL | 22211918
            </p>
          </div>
          <div className="ml-4">
            <Image
              src="/img/maskot/1.png"
              width={150}
              height={200}
              alt="foto"
            />
            <p className="text-[#d93f57] text-opacity-90 text-center">
              Anggota 4
            </p>
            <p className="bg-[#d93f57] bg-opacity-20 rounded-xl text-center p-2">
              PPL | 22211918
            </p>
          </div>
          <div className="ml-4">
            <Image
              src="/img/maskot/1.png"
              width={150}
              height={200}
              alt="foto"
            />
            <p className="text-[#d93f57] text-opacity-90 text-center">
              Anggota 5
            </p>
            <p className="bg-[#d93f57] bg-opacity-20 rounded-xl text-center p-2">
              PPL | 22211918
            </p>
          </div>
          <div className="ml-4">
            <Image
              src="/img/maskot/1.png"
              width={150}
              height={200}
              alt="foto"
            />
            <p className="text-[#d93f57] text-opacity-90 text-center">
              Anggota 6
            </p>
            <p className="bg-[#d93f57] bg-opacity-20 rounded-xl text-center p-2">
              PPL | 22211918
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DetailModal;
