//import React from 'react';
import Navbar from "../../components/Navbar/Navbar"
import CardsProdutos from '../../components/CardsProdutos/CardProdutos';
import "./Ebooks.css"


function Ebooks() {
  return (
  <div className="EbooksPage">
    <Navbar/>
    <CardsProdutos/>
  </div>
  )
}

export default Ebooks;