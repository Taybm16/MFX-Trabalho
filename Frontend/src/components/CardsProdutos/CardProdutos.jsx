import React, { useState, useEffect, useCallback} from 'react';
import "./CardProdutos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function CardsProdutos() {
    const [dados, mudardados] = useState([]);

    const PegarAPI = useCallback(async function PegarAPI() {
        const dadosAPI = await fetch('https://fakestoreapi.com/products')
            .then(resposta => resposta.json())
            .then(info => info);

        mudardados(dadosAPI);
        console.log(dadosAPI);
    }, []);

    useEffect(() => {
        PegarAPI();
    }, [PegarAPI]);

    return (
        <div className='DivPaidoPai'>
            {dados.map((dado) => (
                <div className='CardDivPai'>

                    <div className='configCard' key={dado.id}>
                        <img className='configimgCard' src={dado.image} alt="" width={250} />

                        <div className='CardDescricao'>
                            <h3 CardProdutosText>{dado.title}</h3>
                            <p CardProdutosText>R$ {dado.price}</p>
                            <p className='CardProdutosText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae inventore ab error magni quae debitis, optio aut ipsam velit dignissimos ullam non odit in illum aspernatur omnis. Temporibus, et sapiente!</p>

                            <div className='BotoesCardProduct'>

                                {/* <button type="button" onClick={PegarAPI}>Chamar API</button>
            */}
                                <button>Comprar</button>
                                <button><FontAwesomeIcon icon={faCartShopping} /></button>
                            </div>

                        </div>
                    </div>


                </div>
            ))}
        </div>
    );
}

export default CardsProdutos;
