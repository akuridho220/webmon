'use client';
import React, { useState } from 'react';

const stateDetail = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModalBS, setShowModalBS] = useState(false);


    const handleClosedModal = () => {
    setShowModalBS(false); // Mengubah nilai state untuk menutup modal
    };

    const handleCloseModal = () => {
    setShowModal(false);
    };

    const returnValue = {
        showModal,
        setShowModal,
        showModalBS,
        setShowModalBS,
        handleClosedModal,
        handleCloseModal,
      };
    
      return returnValue;
    };
    
    export default stateDetail;