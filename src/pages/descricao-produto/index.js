import './index.scss';
import Cabecalho from '../../components/cabecalho';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import storage from 'local-storage';
import Rodape from '../../components/rodape';
import { BuscarID } from '../../api/produto';
import CompraProduto from '../../components/compraproduto';



function DescricaoProduto() {

    const { IdParam } = useParams();
    const[produto, setProduto] = useState({})
    const[id, setID] = useState(0);

    useEffect(() => {
        CarregarProduto()
    }, [])

    async function CarregarProduto() {
        const r = await BuscarID(IdParam);
        setProduto(r)
    }

    function adicionarCarrinho() {
        let carrinho = [];
        if(storage('carrinho'))  {
            carrinho = storage('carrinho');
        }      

        if(!carrinho.find(item => item.id === id)) {
            carrinho.push({
                id: id,
                qtd: 1
            })

            storage('carrinho', carrinho);
        }
    }

    return(
        <div className='pagina-descricao-produto'>
            <Cabecalho />
                <div className='pdp-categorias'>
                    <hr></hr>
                    <div>
                        <Link to='/aliancas'>ALIANÇAS</Link>
                        <Link to='/aneis'>ANÉIS</Link>
                        <Link to='/brincos'>BRINCOS</Link>
                        <Link to='/colares'>CORRENTES</Link>
                        <Link to='/namorados'>NAMORADOS</Link>
                        <Link to='/pet'>PET</Link>
                    </div>
                </div>

                <CompraProduto produto={produto}/>
                <main>
                    <div className='dp-esquerda'>
                        <img src='./assets/images/colarcontrole.png'></img>

                        <div>
                            <h3>Descrição do Produto:</h3>

                            <li>Metal On-Chain</li>
                        </div>
                    </div>

                    <div className='dp-direita'>
                        <h3>Colar Casal Controle Gradiente</h3>

                        <h2>R$79.90</h2>

                        <div className='quantidade'>
                            <h4>Quantidade: <input></input></h4>
                        </div>

                        <button className='comprar'>Finalizar Compra</button>
                        <button onClick={adicionarCarrinho} className='adicionar-carrinho'><img src='./assets/images/adicionar-carrinho.png'></img><h5>Adicionar ao Carrinho</h5></button>
                    </div>
                </main>
                <Rodape />
        </div>
    )
}

export default DescricaoProduto