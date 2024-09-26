import React from 'react';
import "./PedidosClientes.css"
import Geek from "../../assets/Images/geek.jpg"
function PedidosClientes() {

  const [dados, mudardados] = useState([]);

  const PegarAPI = useCallback(async function PegarAPI() {
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

    <div className='PedidosClientesPai'>
    {dados.map((dado) => (
      <h2>Relatório de Pedidos </h2>
      <p>Cliente:</p>
      <div className='produtoClientes'>
        <img src={Geek} alt="" />
        <div>
          <h3>{dados.name} </h3>
          <p>{dado.address}</p>
          <p>{dado.phone}</p>
       
        </div>
        <span>Status do Pedido: Entregue</span>

      </div>
      <p className='statusClientes'>Pagamento realizado via Pix</p>
    
    ))
  }
  </div>
)
}

export default PedidosClientes;