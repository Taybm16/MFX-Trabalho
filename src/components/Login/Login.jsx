import React from "react";
// Quero instalar icones FaUser e Falock para local de email e senha
import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import NerdHouse from "../../assets/Images/Nerd-house-logo.png"
const Login = () =>{

    const[username,setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        // event.preventDefault previne o formulario seja enviado, logo a pagina nao recarrega e agr consigo monitorar os dados que estão sendo passado
  //      console.log("Envio"); Queria fazer o envio dessa informação para o backend e encriptografar 
    }
    return(
        <div className="containerpai">
        <div className="containerfilho1">
        <img src={NerdHouse} alt="" height={350} />
        </div>
        <div className="containerfilho2"> 
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-field">
                    <input type="email" placeholder="E-mail"
                    onChange={(e) => setUsername(e.target.value)}
                    //Usamos o evento onchange ao criarmos uma função que ira pegar o evento e extrair o valor do input . 
                    // e(evento).target(alvo).value(valordigitado) - assim captamos o valor do formulario com o react 
                    // Agora vc poderia fazer o envio desses dados com um recurso axios(chamadas asincromas)/fetch/ (backend)
                    />  
                </div>
                <div className="input-field">
                    <input type="senha" placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="recall-forget">
                  <label>
                    <input type="checkbox"/>
                    Lembre de mim!  
                  </label>
                  <a href="{/EsqueciMinhaSenha}">Esqueceu a senha?</a>         
                </div>
                <button>Entrar</button>
                
                <div className="signup-link">
                    <p>Não tem uma conta?  <Link to={"/Registro"}>Registrar</Link></p>
                </div>

            </form>
        </div>
        </div>
    )
}

export default Login;