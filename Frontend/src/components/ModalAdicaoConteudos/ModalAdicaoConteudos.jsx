// src/components/ModalAdicao.jsx
import React, {useState} from 'react';
import "./ModalAdicao.css"

const ModalAdicao = ({ isOpen, onClose, onAddProduct }) => {
    const [productName, setProductName] = useState([]);
    const [productDescription, setProductDescription] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Adiciona o produto
        onAddProduct({ name: productName, description: productDescription });
        // Limpa o formulário
        setProductName(null);
        setProductDescription(null);
        // Fecha o modal
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h1>Adicionar Produto</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="product-name">Nome do Produto:</label>
                    <input
                        type="text"
                        id="product-name"
                        name="product-name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                    
                    <label htmlFor="product-description">Descrição do Produto:</label>
                    <textarea
                        id="product-description"
                        name="product-description"
                        rows="4"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                    />

                    <button type="submit">Salvar Alterações</button>
                </form>
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
};

export default ModalAdicao;
