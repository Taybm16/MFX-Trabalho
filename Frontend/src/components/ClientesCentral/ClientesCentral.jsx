import React, { useState, useEffect, useCallback } from 'react';
import "./ClientesCentral.css";
import Geek from "../../assets/Images/geek.jpg";

function ClientesCentral() {
  const [dados, setDados] = useState([]);

  const PegarAPI = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:3000/users'); // Atualize a URL conforme necessário
      if (!response.ok) {
        throw new Error('Erro ao buscar usuários');
      }
      const dadosAPI = await response.json();
      setDados(dadosAPI);
      console.log(dadosAPI);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }, []);

  useEffect(() => {
    PegarAPI();
  }, [PegarAPI]);

  return (
    <div className='RelatorioCentral'>
      <h2>Relatório de Clientes da Loja</h2>
      {dados.map((dado) => (
        <div className='PedidosClientesCentralPai' key={dado.id}>
          <div className='PedidosClientesCentral'>
            <p>Cliente:</p>
            <div className='produtoClientesCentral'>
              <img src={Geek} alt="" />
              <div>
                <h3>
                  {dado.name && typeof dado.name === 'object'
                    ? `${dado.name.firstname} ${dado.name.lastname}`
                    : dado.name}
                </h3>
                <p>
                  {dado.address ? `${dado.address.street}, ${dado.address.city}` : 'Endereço não disponível'}
                </p>
                <p>{dado.phone || 'Telefone não disponível'}</p>
              </div>
              <span>{dado.username || 'Usuário não disponível'}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ClientesCentral;
