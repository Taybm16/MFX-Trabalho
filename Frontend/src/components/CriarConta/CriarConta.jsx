import React, { useState } from 'react';
import NerdHouse from "../../assets/Images/Nerd-house-logo.png";
import "./CriarConta.css";
import { Link } from "react-router-dom";

function CriarConta() {
    // Estado para armazenar os valores dos campos
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [tipoConta, setTipoConta] = useState('');

    // Manipulador para alterações nos campos
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'nome') setNome(value);
        if (name === 'email') setEmail(value);
        if (name === 'senha') setSenha(value);
        if (name === 'confirmarSenha') setConfirmarSenha(value);
    };

    // Manipulador para o envio do formulário
    const handleSubmit = async(event) => {
        event.preventDefault();

        if (senha !== confirmarSenha) {
            setError('As senhas não coincidem.');
            return;
        }
    
        // Reseta o erro ao tentar criar a conta
        setError('');
    
        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: nome, email:email, password: senha, tipoConta }),
            });
    
            if (!response.ok) {
                const data = await response.json();
                setError(data.error || 'Erro ao criar conta.');
            } else {
                // Conta criada com sucesso, redirecionar ou mostrar uma mensagem
                console.log('Conta criada com sucesso!');
            }
        } catch (error) {
            setError('Erro ao criar conta: ' + error.message);
        }

        // Adicionar a lógica para enviar os dados para o servidor
    };

     // Verifica se as senhas coincidem
 
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
                {/* Colocar o formulario de cadastro  */}
                <form onSubmit={handleSubmit}>
                    <h1>Criar Conta</h1>
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
                        <button type='submit' onClick={() => setTipoConta('cliente')}>Criar Conta Cliente</button>
                    </div>
                </form>
            </div>
        </div>
    );


export default CriarConta;
