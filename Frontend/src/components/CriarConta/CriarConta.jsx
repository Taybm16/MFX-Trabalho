import React, { useState } from 'react';
import NerdHouse from "../../assets/Images/Nerd-house-logo.png";
import "./CriarConta.css";
import { Link, useNavigate } from "react-router-dom"; // Alterar useHistory para useNavigate

function CriarConta() {
    const navigate = useNavigate(); // Usar useNavigate
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [error, setError] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'nome') setNome(value);
        if (name === 'email') setEmail(value);
        if (name === 'senha') setSenha(value);
        if (name === 'confirmarSenha') setConfirmarSenha(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (senha !== confirmarSenha) {
            setError('As senhas não coincidem.');
            return;
        }

        if (!nome || !email || !senha || !confirmarSenha) {
            setError('Por favor, preencha todos os campos.');
            return;
        }

        setError('');

        const createdAt = new Date().toISOString();
        const updatedAt = new Date().toISOString();
        const status = 'Ativo';

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: nome, email: email, password: senha, created_at: createdAt, update_at: updatedAt, status }),
            });

            if (!response.ok) {
                const data = await response.json();
                setError(data.error || 'Erro ao criar conta.');
            } else {
                console.log('Conta criada com sucesso!');
                navigate('/login'); // Usar navigate em vez de history.push
            }
        } catch (error) {
            setError('Erro ao criar conta: ' + error.message);
        }
    };

    return (
        <div className='divCriarContaPai'>
            <div className='divCriarContaFilho1'>
                <Link to={"/"}>
                    <button>
                        <img src={NerdHouse} alt="" height={350} title="HOME" />
                    </button>
                </Link>
            </div>
            <div className='divfilho2'>
                <form onSubmit={handleSubmit}>
                    <h1>Criar Conta</h1>
                    {error && <p className="error-message">{error}</p>}
                    <div className="input-field">
                        <input
                            type='text'
                            name='nome'
                            placeholder='Nome Completo'
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-field">
                        <input
                            type="email"
                            name='email'
                            placeholder='Endereço do E-mail'
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-field">
                        <input
                            type="password"
                            name='senha'
                            placeholder='Senha'
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-field">
                        <input
                            type="password"
                            name='confirmarSenha'
                            placeholder='Confirmar Senha'
                            onChange={handleChange}
                        />
                    </div>

                    <div className='botões'>
                        <button type='submit'>Criar Conta</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CriarConta;
