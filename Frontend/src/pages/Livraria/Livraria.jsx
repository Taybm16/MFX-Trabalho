//import React from 'react';
import CardsProdutos from '../../components/CardsProdutos/CardProdutos';
import Navbar from "../../components/Navbar/Navbar"
import "./Livraria.css"

function Livraria() {
  return (
  <div className='PageLivraria'>
    <div>
      <Navbar />
    </div>

    <div>
      <CardsProdutos/>
    </div>
    
   
  </div>
  )
}

export default Livraria;