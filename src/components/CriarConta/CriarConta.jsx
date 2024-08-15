import React from 'react';
import { useState } from 'react';
import NerdHouse from "../../assets/Images/Nerd-house-logo.png"
import "./CriarConta.css"

function CriarConta() {
  return (
    
    <div className='divpai'>
      <div>
        {/* Colocar a logo  */}
        <img src={NerdHouse} alt="" height={350} />
      </div>
      <div className='divfilho2'> 
        {/* Colocar o formulario de cadastro  */}
        <form >
          <h1>Criar Conta</h1>
            <div className="input-field">
              <input type='name' placeholder='Nome Completo'></input>
            </div>

            <div className="input-field">
              <input type="email" placeholder='Endereço do E-mail'/>
            </div>

            <div className="input-field">
              <input type="password" placeholder='Senha'/>
            </div>

            <div className="input-field">
              <input type="password" placeholder='Confirmar Senha'/>
            </div>

            <div className='botões'>
                <button>Criar Conta Cliente</button>

                <button>Criar Conta Produtor de Conteúdo</button>
            </div>
          
        </form>
      </div>
    </div>

  )
}

export default CriarConta;