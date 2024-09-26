import React, { useState, useEffect, useCallback } from 'react';
import "./ClientesCentral.css";
import Geek from "../../assets/Images/geek.jpg";

function ClientesCentral() {
  const [dados, mudardados] = useState([]);

  const PegarAPI = useCallback(async () => {
    const dadosAPI = await fetch('https://fakestoreapi.com/users')
      .then(resposta => resposta.json())
      .then(info => info);

    mudardados(dadosAPI);
    console.log(dadosAPI);
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
