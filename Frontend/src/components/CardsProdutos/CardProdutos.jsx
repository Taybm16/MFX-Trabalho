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
                <div className='CardDivPai' key={dado.id}>

                    <div className='configCard'>
                        <img className='configimgCard' src={dado.image} alt="" width={200} />

                        <div className='CardDescricao'>
                            <h3 className='CardProdutosText'>{dado.title}</h3>
                            <p className='CardProdutosText'> R$ {dado.price}</p>
                            <p className='CardProdutosText'> {dado.description} </p>

                            <div className='BotoesCardProduct'>
                                <div><button>Comprar</button></div>
                                <div><button><FontAwesomeIcon icon={faCartShopping} /></button></div>
                            </div>

                        </div>
                    </div>


                </div>
            ))}
        </div>
    );
}

export default CardsProdutos;
