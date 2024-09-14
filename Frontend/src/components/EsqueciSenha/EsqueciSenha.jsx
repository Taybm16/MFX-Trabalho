import React from "react";
// Quero instalar icones FaUser e Falock para local de email e senha
import { useState } from "react";
import "./EsqueciSenha.css";
import { Link } from "react-router-dom";
import NerdHouse from "../../assets/Images/Nerd-house-logo.png"
const EsqueciSenha = () =>{

    const[username,setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        // event.preventDefault previne o formulario seja enviado, logo a pagina nao recarrega e agr consigo monitorar os dados que estão sendo passado
  //      console.log("Envio"); Queria fazer o envio dessa informação para o backend e encriptografar 
    }
    return(
        <div className="containerEsqueciSenhaPai">
        <div className="containerEsqueciSenhafilho1">
        <img src={NerdHouse} alt="" height={350} />
        </div>
        <div className="containerEsqueciSenhafilho2"> 
            <form className="formulario" onSubmit={handleSubmit}>
                <h1>Criar nova senha</h1>
                <div className="inputEsqueciSenha-field">
                    <input type="email" placeholder="E-mail"
                    onChange={(e) => setUsername(e.target.value)}
                    //Usamos o evento onchange ao criarmos uma função que ira pegar o evento e extrair o valor do input . 
                    // e(evento).target(alvo).value(valordigitado) - assim captamos o valor do formulario com o react 
                    // Agora vc poderia fazer o envio desses dados com um recurso axios(chamadas asincromas)/fetch/ (backend)
                    />  
                </div>
                <div className="inputEsqueciSenha-field">
                    <input type="senha" placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="inputEsqueciSenha-field">
                    <input type="senha" placeholder="Confirmação de Senha"
                    
                    />
                </div>
                
                <button className="EsqueciSenhaBotão">Entrar</button>
            
            </form>
        </div>
        </div>
    )
}

export default EsqueciSenha;