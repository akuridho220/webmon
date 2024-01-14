'use client'
import React, { createContext, useContext, useState} from 'react';

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <ModalContext.Provider value={{ showModal, setShowModal, handleCloseModal}}>
            {children}
        </ModalContext.Provider>
    );
};

const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};

export {ModalProvider, useModal};