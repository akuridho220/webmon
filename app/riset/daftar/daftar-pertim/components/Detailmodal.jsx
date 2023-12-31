import Modal from "react-modal";


const DetailModal = ({ isOpen, onClose, data }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Detail Modal">
      <h2>Detail Information</h2>
      <p>Kode BS: {data.kodeBS}</p>
      <p>Pencacah: {data.pencacah}</p>
      <p>Jumlah Sampel: {data.jumlahSampel}</p>
      <p>Jumlah Terlisting: {data.jumlahListing}</p>

      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default DetailModal;
