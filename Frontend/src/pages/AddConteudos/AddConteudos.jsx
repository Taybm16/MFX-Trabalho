import React, { useState } from 'react';
import ModalAdicaoConteudos from "../../components/ModalAdicaoConteudos/ModalAdicaoConteudos";
import "./AddConteudos.css";
import Navbar from '../../components/Navbar/Navbar';

function AddConteudos() {
    const [isModalOpen, setIsModalOpen] = useState(true); // O modal começa aberto

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="paiAdd">
            <Navbar/>
            <ModalAdicaoConteudos isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
}

export default AddConteudos;
