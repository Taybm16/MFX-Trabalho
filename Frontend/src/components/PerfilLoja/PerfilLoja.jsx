import React from "react";
import "./PerfilLoja.css";

function PerfilLoja() {
  return (
    <>
      <div className="PerfilLojaPai">
        
        <form className="PerfilLojaForm">
          
          <div className="PerfilLoja1">
            <h3>PERFIL ADMINISTRADOR</h3>
            <input type="name" placeholder="Nome da Loja" /><br></br>
            <input type="email" placeholder="Endereço de E-mail" /><br></br>
            <input type="number" placeholder="CNPJ da Loja"/><br></br>

            <input type="password" placeholder="Senha" /><br></br>
            <input type="password" placeholder="Confirmar Senha" />
          </div>

          <div className="PerfilLoja1">
            <h3>CONTATO</h3>
            <input type="text" placeholder="Telefone" />
            <input type="text" placeholder="Celular" />
          </div>
          
          <div className="PerfilLoja1">
            <h3>ENDEREÇO</h3>
            <input type="number" placeholder="CEP" />
            <input type="text" placeholder="Logradouro" />
            
            <div className="PerfilLojaInputs">
              <input type="number" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
            </div>
           
            <div>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
            </div>

            <div className="PerfilLojaInputs">
              <input type="text" placeholder="Estado" />
              <input type="text" placeholder="País" />
            </div>
          </div>

          <button type="submit">Salvar Alterações</button>

        </form>
      </div>
    </>
  );
}

export default PerfilLoja;
