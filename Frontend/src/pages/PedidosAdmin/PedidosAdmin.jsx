import React from 'react';
import Navbar from "../../components/Navbar/Navbar"
import PedidosClientes from "../../components/AcompanhamentoPedidos/PedidosClientes"
import "./PedidosAdmin.css"

function PedidosAdmin() {
  return(
    <div className='PedidosAdminPage'>
      <Navbar/>
      <PedidosClientes/>

    </div>
  )
}

export default PedidosAdmin;