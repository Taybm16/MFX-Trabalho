import React from 'react';
import "./PedidosClientes.css"
import Geek from "../../assets/Images/geek.jpg"
function PedidosClientes() {
  return (
   <>
    <div className='PedidosClientesPai'>
      <h2>Relatório de Pedidos </h2>
      <p>Cliente:</p>

      <div className='produtoClientes'>
        <img src={Geek} alt="" />
        <div>
          <h3>Lilian Alves Rodrigues </h3>
          <p>Endereço: Rua Santa Marcelina 785 - Vila Carmosina</p>
          <p>Telefone: xxxxx-xxxxx</p>
       
        </div>
        <span>Status do Pedido: Entregue</span>

      </div>
      <p className='statusClientes'>Pagamento realizado via Pix</p>
    </div>
   </> 
  )
}

export default PedidosClientes;