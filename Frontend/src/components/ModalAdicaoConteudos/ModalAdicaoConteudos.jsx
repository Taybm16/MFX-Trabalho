import React, { useState } from 'react';
import "./ModalAdicao.css"; // Certifique-se de que o caminho está correto

function ModalAdicaoConteudos({ isOpen, onClose }) {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [imageUrl, setImageUrl] = useState(''); // URL da imagem
    const [amount, setAmount] = useState('');
    const [quantity, setQuantity] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');

        const productData = {
            name: productName,
            description: productDescription,
            image_url: imageUrl, // URL da imagem
            amount: amount,
            quantity: quantity,
        };

        try {
            const response = await fetch('http://localhost:3000/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            });

            if (!response.ok) {
                const data = await response.json();
                setErrorMessage(data.error || 'Erro ao adicionar produto.');
            } else {
                setSuccessMessage('Produto salvo com sucesso!');
                // Limpar os campos após o sucesso
                setProductName('');
                setProductDescription('');
                setImageUrl('');
                setAmount('');
                setQuantity('');
            }
        } catch (error) {
            console.error('Erro ao enviar o produto:', error);
            setErrorMessage('Erro ao adicionar produto: ' + error.message);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="containerModalAdicao">
            <h1>Cadastro de Produtos</h1>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="URL da Imagem"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Nome do Produto"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Descrição do Produto"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    required
                ></textarea>
                <input
                    type="number"
                    placeholder="Quantidade"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
                <button type="submit" id="BotaoModalAdicao">
                    Salvar
                </button>
            </form>
        </div>
    );
}

export default ModalAdicaoConteudos;
