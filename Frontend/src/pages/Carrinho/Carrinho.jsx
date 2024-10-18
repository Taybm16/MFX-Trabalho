import React, { useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import CarrinhoComponente from "../../components/carrinho/carrinhoComponente";
import "./Carrinho.css";

function Carrinho() {
    // Estado para armazenar os produtos do carrinho
    const [produtosCarrinho, setProdutosCarrinho] = useState([]);

    // Função para adicionar produtos ao carrinho
    const adicionarAoCarrinho = (produto) => {
        setProdutosCarrinho((prev) => [...prev, produto]);
        console.log('Produto adicionado ao carrinho:', produto);
    };

    return (
        <div className="CarrinhoPage">
            <Navbar />
            <CarrinhoComponente produtos={produtosCarrinho} /> {/* Passa os produtos para o carrinho */}
        </div>
    );
}

export default Carrinho;
