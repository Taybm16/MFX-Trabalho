import React from 'react';
import './carrinhoComponente.css';

function CarrinhoComponente({ produtos }) {
    const calcularTotal = () => {
        return produtos.reduce((total, produto) => total + (produto.amount || 0), 0).toFixed(2);
    };

    

    return (
        <div className='carrinhoPai'>
            <h1>Seu Carrinho</h1>
            <div className='carrinhoFilho'>
                <div className='carrinhoNeto1'>
                    <div className='carrinhoDescritivo1'>   
                        <h2>Total (itens): R$ {calcularTotal()}</h2>
                        <h3>Os itens do seu carrinho não estão reservados. Finalize o processo para concluir a compra.</h3>
                    </div>

                    {produtos.length === 0 ? (
                        <div className='carrinhoDescritivo2'>
                            <h4>Seu carrinho está vazio.</h4>
                            <h4>Adicione produtos para ver suas informações aqui.</h4>
                        </div>
                    ) : (
                        produtos.map((produto) => (
                            <div key={produto.id} className='carrinhoDescritivo2'>
                                <img src={produto.image_url} alt={produto.name} width={200} />
                                <h4>{produto.description}</h4>
                                <div className='AreaDeItens'>
                                    <button>+</button>
                                    <h5 className='AreaDeItens'>R$ {produto.amount.toFixed(2)}</h5>
                                    <button>-</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className='carrinhoNeto2'>
                    <h4>Tipo de pagamento: PIX (ADICIONAR SELETOR AQUI)</h4>
                    <button>Finalizar Compra</button>
                </div>
            </div>
        </div>
    );
}

export default CarrinhoComponente;















// import React from 'react';
// import './carrinhoComponente.css';

// function CarrinhoComponente({ produtos }) {
//     const calcularTotal = () => {
//         return produtos.reduce((total, produto) => total + (produto.amount || 0) * produto.price, 0).toFixed(2);
//     };

//     return (
//         <div className='carrinhoPai'>
//             <h1>Seu Carrinho</h1>
//             <div className='carrinhoFilho'>
//                 <div className='carrinhoNeto1'>
//                     <div className='carrinhoDescritivo1'>   
//                         <h2>Total (itens): R$ {calcularTotal()}</h2>
//                         <h3>Os itens do seu carrinho não estão reservados. Finalize o processo para concluir a compra.</h3>
//                     </div>

//                     {produtos.length === 0 ? (
//                         <div className='carrinhoDescritivo2'>
//                             <h4>Seu carrinho está vazio.</h4>
//                             <h4>Adicione produtos para ver suas informações aqui.</h4>
//                         </div>
//                     ) : (
//                         produtos.map((produto) => (
//                             <div key={produto.id} className='carrinhoDescritivo2'>
//                                 <img src={produto.image_url} alt={produto.name} width={200} />
//                                 <h4>{produto.description}</h4>
//                                 <div className='AreaDeItens'>
//                                     <button>+</button>
//                                     <h5 className='AreaDeItens'>R$ {produto.price.toFixed(2)} x {produto.amount}</h5>
//                                     <button>-</button>
//                                 </div>
//                             </div>
//                         ))
//                     )}
//                 </div>
//                 <div className='carrinhoNeto2'>
//                     <h4>Tipo de pagamento: PIX (ADICIONAR SELETOR AQUI)</h4>
//                     <button>Finalizar Compra</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CarrinhoComponente;
