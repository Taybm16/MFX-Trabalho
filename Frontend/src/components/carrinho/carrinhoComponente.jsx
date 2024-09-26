import React from 'react';
import './carrinhoComponente.css';


function carrinho() {

    
  return (
    <div className='carrinhoPai'>
        <h1>Seu Carrinho</h1>
        <div className='carrinhoFilho'>
            <div className='carrinhoNeto1'>
                <div className='carrinhoDescritivo1'>   
                    <h2>Total (itens ) R$ (Valor Somado)</h2>
                    <h3>Os itens do seu carrinho não estão reservados. Finalize o processo para concluir a compra</h3>

                </div>

                <div className='carrinhoDescritivo2'>
                    <img src="https://s5.static.brasilescola.uol.com.br/be/2023/09/capa-do-livro-o-pequeno-principe-de-antoine-de-saint-exupery-publicado-pela-faro-editorial.jpg" alt=""  width={200}/>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
                        Dolor laborum porro magni fuga eligendi, minima, earum odio <br></br>necessitatibus qui non placeat 
                        quibusdam saepe praesentium deserunt explicabo expedita dignissimos debitis mollitia.</h4>
                    
                    <div className='AreaDeItens'>
                    <button>+</button>
                    </div>
                    <h5  className='AreaDeItens'>R$ 100</h5>
                    <div  className='AreaDeItens'>
                    <button>-</button>
                    </div>
                </div>
            </div>
            <div className='carrinhoNeto2'>
                <h4>Tipo de pagamento PIX (ADICIONAR SELETOR AQUI )</h4>
                <button>Finalizar Compra</button>
                
            </div>
        </div>
    </div>
  )
};

export default carrinho;

















// const CarrinhoComponente = ({ produtos, RemoverProduto }) => {
//     // Função para calcular o total do carrinho
//     const calcularTotal = () => {
//         return produtos.reduce((total, dado) => {
//             // Supondo que o preço esteja na descrição do produto no formato "Price: $X"
//             const match = dado.description.match(/Price: \$(\d+(\.\d+)?)/);
//             return total + (match ? parseFloat(match[1]) : 0);
//         }, 0).toFixed(2);
//     };

//     // Verifica se a lista de produtos está vazia
//     if (produtos.length === 0) {
//         // Se estiver vazia, mostra uma mensagem simples
//         return <p>Seu carrinho está vazio.</p>;
//     }else
//     return (
//         <div className="carrinho">
//             <h1>Carrinho de Compras</h1>
            
//             <ul>
//                 {produtos.map((dado, index) => (
//                     <li key={index} className="carrinho-item">
//                         <h2>{dado.name}</h2>
//                         <p>{dado.description}</p>
//                         <button onClick={() => RemoverProduto(index)}>
//                             Remover
//                         </button>
//                     </li>
//                 ))}
//             </ul>
            
//             <h2>Total: ${calcularTotal()}</h2>
//         </div>
//     );
// };


// export default CarrinhoComponente;
