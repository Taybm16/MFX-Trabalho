//import React, { useState } from 'react';
import "./ModalAdicao.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function ModalAdicaoConteudos() {
    return (
        <div className="containerModalAdicao">
            <h1>Cadastro de Produtos</h1>
            <form id="product-form">
                <button type="submit">
                    <div>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <div>
                        <p>Adicionar Produto</p>
                    </div>
                </button>
                <input type="text" id="product-name" placeholder="Nome do Produto" required />
                <textarea id="product-description" placeholder="Descrição do Produto" required></textarea>
                <button type="submit" className="BotaoModalAdicao">Salvar Alterações</button>
            </form>

        </div>
    );
}

export default ModalAdicaoConteudos;




{/* // const ModalAdicao = ({ isOpen, onClose, onAddProduct }) => { */}


{/* //     const [productName, setProductName] = useState([]);
//     const [productDescription, setProductDescription] = useState([]);

//     const handleSubmit = (event) => { */}
{/* //         event.preventDefault();
//         // Adiciona o produto
//         onAddProduct({ name: productName, description: productDescription });
//         // Limpa o formulário
//         setProductName(null);
//         setProductDescription(null);
//         // Fecha o modal
//         onClose();
//     };

//     if (!isOpen) return null;

//     return (
//         <div className="modal">
//             <div className="modal-content">
//                 <h1>Adicionar Produto</h1>
//                 <form onSubmit={handleSubmit}>
//                     <label htmlFor="product-name">Nome do Produto:</label>
//                     <input
//                         type="text"
//                         id="product-name"
//                         name="product-name"
//                         value={productName}
//                         onChange={(e) => setProductName(e.target.value)}
//                         required
//                     />
                    
//                     <label htmlFor="product-description">Descrição do Produto:</label>
//                     <textarea
//                         id="product-description"
//                         name="product-description"
//                         rows="4"
//                         value={productDescription}
//                         onChange={(e) => setProductDescription(e.target.value)}
//                     />

//                     <button type="submit">Salvar Alterações</button>
//                 </form>
//                 <button onClick={onClose}>Fechar</button>
//             </div>
//         </div>
//     );
// };

// export default ModalAdicao; */}
