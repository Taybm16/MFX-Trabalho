import React, { useState, useEffect, useCallback } from 'react';
import "./PedidosClientes.css";
import Geek from "../../assets/Images/geek.jpg";

function PedidosClientes() {
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
    <div>
      <h2>Relatório de Pedidos</h2>
      {dados.map((dado) => (
        <div className='PedidosClientesPai' key={dado.id}>
      
          <div>
            <p>Cliente:</p>
            <div className='ProdutoClientesCard'>
              <img src={Geek} alt="" width={200} />
              <div>
                <h3 >
                  {/* Verifica se name é um objeto e concatena primeiro e último nome */}
                  {dado.name && typeof dado.name === 'object'
                    ? `${dado.name.firstname} ${dado.name.lastname}`
                    : dado.name}
                </h3>
                <p >
                  {dado.address ? `${dado.address.street}, ${dado.address.city}` : 'Endereço não disponível'}
                </p>
                <p>{dado.phone || 'Telefone não disponível'}</p>
              </div>
              {/* Certifique-se de que 'status' é uma propriedade válida */}
              <span>Status do Pedido: {dado.status || 'Status não disponível'}</span>
            </div>
            <p className='statusClientes'>Pagamento realizado via Pix</p>
          
        </div>
      
    </div>
))}
    </div>
  );
}

export default PedidosClientes;




















// import React, { useState, useEffect, useCallback } from 'react';
// import "./PedidosClientes.css";
// import Geek from "../../assets/Images/geek.jpg";

// function PedidosClientes() {
//   const [dados, mudardados] = useState([]);

//   const PegarAPI = useCallback(async function PegarAPI() {
//     const dadosAPI = await fetch('https://fakestoreapi.com/users')
//       .then(resposta => resposta.json())
//       .then(info => info);

//     mudardados(dadosAPI);
//     console.log(dadosAPI);
//   }, []);

//   useEffect(() => {
//     PegarAPI();
//   }, [PegarAPI]);

//   return (
//     <div className='PedidosClientesPai'>
//       {dados.map((dado) => (
//         <div key={dado.id}> 

//         <div className='CardRelatorioPedidos'>
//         <h2>Relatório de Pedidos</h2>
//           <p>Cliente:</p>
//           <div className='ProdutoClientesCard'>
//             <img src={Geek} alt="" width={200} />
//             <div className='CardRelatorioDescricao'>
//               <h3 className='CardRelatoriosText'>{dado.name}</h3>
//               <p className='CardRelatoriosText'>{dado.address}</p>
//               <p className='CardRelatoriosText'>{dado.phone}</p>
//             </div>
//             <span>Status do Pedido: {dado.status}</span>
//           </div>
//           <p className='statusClientes'>Pagamento realizado via Pix</p>
//         </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PedidosClientes;





