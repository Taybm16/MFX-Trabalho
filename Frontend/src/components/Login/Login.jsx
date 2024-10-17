import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom"; // Importar useNavigate
import NerdHouse from "../../assets/Images/Nerd-house-logo.png";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Hook para redirecionamento

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/login/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: username,
                    password: password,
                }),
            });

            if (!response.ok) {
                throw new Error('Erro ao fazer login');
            }

            const data = await response.json();
            console.log(data); // Aqui você pode lidar com a resposta do servidor

            // Redirecionar após login bem-sucedido
            navigate('/'); // Redireciona para a página inicial

        } catch (error) {
            console.error('Erro ao fazer login:', error);
            // Aqui você pode adicionar um feedback para o usuário, como uma mensagem de erro
        }
    };

    return (
        <div className="containerpai">
            <div className="containerfilho1">
                <Link to={"/"}>
                    <button>
                        <img src={NerdHouse} alt="" height={350} title="HOME" />
                    </button>
                </Link>
            </div>
            <div className="containerfilho2">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="input-field">
                        <FaUser className="input-icon" />
                        <input
                            type="email"
                            placeholder="E-mail"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-field">
                        <FaLock className="input-icon" />
                        <input
                            type="password"
                            placeholder="Senha"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="recall-forget">
                        <label>
                            <input type="checkbox" />
                            Lembre de mim!
                        </label>
                        <a href={"/EsqueciMinhaSenha"}>Esqueceu a senha?</a>
                    </div>
                    <button className="LoginBotão">Entrar</button>
                    <div className="signup-link">
                        <p>Não tem uma conta? <Link to={"/Registro"}>Registrar</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
