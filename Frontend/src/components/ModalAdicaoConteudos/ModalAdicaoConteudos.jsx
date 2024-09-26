//import React, { useState } from 'react';
import "./ModalAdicao.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function ModalAdicaoConteudos() {
    return (
        <div className="containerModalAdicao">
            <h1>Cadastro de Produtos</h1>
            <form id="product-form">
                <label id="AdicionarArquivo" type="submit">
                    <div className="IconeBotao">
                        <FontAwesomeIcon icon={faPlus} />
                        <input type="file" />
                    </div>
                    <div>
                        <p>Adicionar Produto</p>
                    </div>
                </label>
                <input type="text" id="product-name" placeholder="Nome do Produto" required />
                <textarea id="product-description" placeholder="Descrição do Produto" required></textarea>
                <button type="submit" className="BotaoModalAdicao">Salvar Alterações</button>
            </form>

        </div>
    );
}

export default ModalAdicaoConteudos;





