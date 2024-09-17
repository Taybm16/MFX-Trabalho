// src/components/Carrinho.jsx
import React from 'react';
// import './Carrinho.css';

const CarrinhoComponente = ({ produtos, RemoverProduto }) => {
    // Função para calcular o total do carrinho
    const calcularTotal = () => {
        return produtos.reduce((total, produto) => {
            // Supondo que o preço esteja na descrição do produto no formato "Price: $X"
            const match = produto.description.match(/Price: \$(\d+(\.\d+)?)/);
            return total + (match ? parseFloat(match[1]) : 0);
        }, 0).toFixed(2);
    };

    // Verifica se a lista de produtos está vazia
    if (produtos.length === 0) {
        // Se estiver vazia, mostra uma mensagem simples
        return <p>Seu carrinho está vazio.</p>;
    }

    // Se não estiver vazia, mostra a lista de produtos e o total
    return (
        <div className="carrinho">
            <h1>Carrinho de Compras</h1>
            <ul>
                {produtos.map((produto, index) => (
                    <li key={index} className="carrinho-item">
                        <h2>{produto.name}</h2>
                        <p>{produto.description}</p>
                        <button onClick={() => RemoverProduto(index)}>
                            Remover
                        </button>
                    </li>
                ))}
            </ul>
            <h2>Total: ${calcularTotal()}</h2>
        </div>
    );
};

export default CarrinhoComponente;
