import React, { useState, useEffect, useCallback } from 'react';
import "./PedidosComponente.css";

function PedidosComponente() {
  const [dados, mudardados] = useState([]);

  const PegarAPI = useCallback(async () => {
    const dadosAPI = await fetch('https://fakestoreapi.com/products')
      .then(resposta => resposta.json())
      .then(info => info);

    mudardados(dadosAPI);
    console.log(dadosAPI);
  }, []);

  useEffect(() => {
    PegarAPI();
  }, [PegarAPI]);

  return (
    <div id='PedidosComponenteContainer'>
      <h2>Meus Pedidos</h2>
      {dados.map((dado) => (
        <div className='PedidosCardComponentePai' key={dado.id}>
          <div className='PedidosComponenteFilho'>
            <p>Pedido:</p>
            <h3>10 de março de 2024</h3>
            <div className='produto'>
              <img src={dado.image} alt="" />
              <div>
                <h3>{dado.title}</h3>
                <p>{dado.description}</p>
              </div>
              <span>1 un - R$ {dado.price}</span>
            </div>
            <p className='status'>Aguardando empresa</p>
          </div>
        </div>
      ))} 
    </div>
  );
}

export default PedidosComponente;
