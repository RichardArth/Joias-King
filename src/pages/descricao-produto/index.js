import './index.scss';
import Cabecalho from '../../components/cabecalho';
import { Link } from 'react-router-dom';
import Rodape from '../../components/rodape';




function DescricaoProduto() {
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
                        <button className='adicionar-carrinho'><img src='./assets/images/adicionar-carrinho.png'></img><h5>Adicionar ao Carrinho</h5></button>
                    </div>
                </main>

                <Rodape />
        </div>
    )
}

export default DescricaoProduto