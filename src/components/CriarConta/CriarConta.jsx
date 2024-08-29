import React from 'react';
import { useState } from 'react';
import NerdHouse from "../../assets/Images/Nerd-house-logo.png"
import "./CriarConta.css"

function CriarConta() {
    function CriarConta() {
        // Estado para armazenar os valores dos campos
        const [nome, setNome] = useState('');
        const [email, setEmail] = useState('');
        const [senha, setSenha] = useState('');
        const [confirmarSenha, setConfirmarSenha] = useState('');
        const [tipoConta, setTipoConta] = useState('');
      
        // Adicionar a lógica para enviar os dados para o servidor:
    }
    // Manipulador para alterações nos campos
    const handleChange = (event) => {
      const { name, value } = event.target;
      if (name === 'nome') setNome(value);
      if (name === 'email') setEmail(value);
      if (name === 'senha') setSenha(value);
      if (name === 'confirmarSenha') setConfirmarSenha(value);
    };
  
    // Manipulador para o envio do formulário
    const handleSubmit = (event) => {
      event.preventDefault();
    }
  
  return (
    
    <div className='divpai'>
      <div>
        {/* Colocar a logo  */}
        <img src={NerdHouse} alt="" height={350} />
      </div>
      <div className='divfilho2'> 
        {/* Colocar o formulario de cadastro  */}
        <form onSubmit={handleSubmit}>
          <h1>Criar Conta</h1>
            <div className="input-field">
              <input type='name' placeholder='Nome Completo'  onChange={handleChange}></input>
            </div>

            <div className="input-field">
              <input type="email" placeholder='Endereço do E-mail'    onChange={handleChange}/>
            </div>

            <div className="input-field">
              <input type="password" placeholder='Senha'  onChange={handleChange}/>
            </div>

            <div className="input-field">
              <input type="password" placeholder='Confirmar Senha'  onChange={handleChange}/>
            </div>

            <div className='botões'>
                <button  type='submit' onClick={() => setTipoConta('cliente')}>Criar Conta Cliente</button>

                <button type='submit' onClick={() => setTipoConta('produtor')}>Criar Conta Produtor de Conteúdo</button>
            </div>
          
        </form>
      </div>
    </div>

  )
}

export default CriarConta;
