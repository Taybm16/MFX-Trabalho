import React from 'react';
import "./CardProdutos.css"

function CardsProdutos() {

   const [dados, mudardados] = useState([])
     const PegarAPI = useCallback (
         async function PegarAPI() {
             var dadosAPI = await fetch ('https://fakestoreapi.com/products')
             .then (resposta => resposta.json())
             .then(info => { return info})
    
             mudardados (dadosAPI)
             console.log(dadosAPI)
         }
         ,[]
     )
    

     useEffect(() => {
         PegarAPI()
     }, [PegarAPI])


  return (
     <>
       {dados.map((dado) => (
       <div id='configcard'> 
          <img id='configimg' src={dado.image} alt=""/>
            <div>
              <h3>{dado.title}</h3>
              <p>{dado.price}</p>
            </div>
        </div>
       ))}

       { <button type="button" onClick={PegarAPI}>Chamar API</button> }
       </>
  )
}

export default CardsProdutos;