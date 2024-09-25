import React from 'react';
import "./ClientesCentral.css"
import Geek from "../../assets/Images/geek.jpg"


function ClientesCentral() {
  return (
   <>
    <div className='PedidosClientesCentral'>
      <h2>Relatório de Clientes da Loja</h2>
      <p>Cliente:</p>

      <div className='produtoClientesCentral'>
        <img src={Geek} alt="" />
        <div>
          <h3>Lilian Alves Rodrigues </h3>
          <p>Endereço: Rua Santa Marcelina 785 - Vila Carmosina</p>
          <p>Telefone: xxxxx-xxxxx</p>
       
        </div>
        <span>Nome do Usuário : @Lilian </span>

      </div>
     
    </div>
   </> 
  )
}

export default ClientesCentral;