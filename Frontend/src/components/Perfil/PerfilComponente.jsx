import React from "react";
import "./PerfilComponente.css";

function PerfilComponente() {
  return (
    <>
      <div className="container1">
        <form className="profile-form">
          <div className="setor">
            <h3>DADOS PESSOAIS</h3>
            <input type="name" placeholder="Nome Completo" />
            <input type="email" placeholder="Endereço de E-mail" />

            <input type="password" placeholder="Senha" />
            <input type="password" placeholder="Confirmar Senha" />
          </div>

          <div className="setor">
            <h3>CONTATO</h3>
            <input type="text" placeholder="Telefone" />
            <input type="text" placeholder="Celular" />
          </div>
          <div className="setor">
            <h3>ENDEREÇO</h3>
            <input type="number" placeholder="CEP" />
            <input type="text" placeholder="Logradouro" />
            <div className="inline-inputs">
              <input type="number" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
            </div>
            <div>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
            </div>

            <div className="inline-inputs">
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

export default PerfilComponente;
