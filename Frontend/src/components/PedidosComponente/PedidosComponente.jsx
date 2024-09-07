import React from 'react';
import "./PedidosComponente.css"
// import { Container } from './styles';

function PedidosComponente() {
  return (
   <>
    <div className='PedidosComponentePai'>
      <h2>10 de março de 2024</h2>
      <p>pedido 1</p>

      <div className='produto'>
        <img src="https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788537814666/o-pequeno-principe-edicao-bolso-de-luxo.jpg" alt="" />
        <div>
          <h3>nome de produto</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam non vero dolores nam d</p>
        </div>
        <span>1 un - R$ 100</span>

      </div>
      <div className='produto'>
        <img src="https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788537814666/o-pequeno-principe-edicao-bolso-de-luxo.jpg" alt="" />
        <div>
          <h3>nome de produto</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam non vero dolores nam d</p>
        </div>
        <span>1 un - R$ 100</span>

      </div>
      <div className='produto'>
        <img src="https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788537814666/o-pequeno-principe-edicao-bolso-de-luxo.jpg" alt="" />
        <div>
          <h3>nome de produto</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam non vero dolores nam d</p>
        </div>
        <span>1 un - R$ 100</span>

      </div>
      <p className='status'>Aguardando empresa</p>
    </div>
   </> 
  )
}

export default PedidosComponente;