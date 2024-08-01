import React from "react";
// Quero instalar icones FaUser e Falock para local de emai e senha
import { useState } from "react";
import "./Login.css";

const Login = () =>{

    const[username,setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
  //      console.log("Envio"); Queria fazer o envio dessa informação para o backend e encriptografar 
    }
    return(
        <div className="container"> 
            <form onSubmit={handleSubmit}>
                <h1>Acesse o sistema</h1>
                <div>
                    <input type="email" placeholder="E-mail"
                    onChange={(e) => setUsername(e.target.value)}
                    />  
                </div>
                <div>
                    <input type="senha" placeholder="Senha"/>
                    onChange={(e) => setPassword(e.target.value)}
                </div>
                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>
                <button>Entrar</button>
                <div className="signup-link">
                    <p>Não tem uma conta?  <a href="#">Registrar</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login;