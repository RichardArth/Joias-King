import { BuscarImagem } from '../../api/produto';
import './index.scss';


function CompraProduto(props) {



    return(
               <main>
                    <div className='dp-esquerda'>
                        <img src={BuscarImagem(props.produto.nome)}></img>

                        <div>
                            <h3>Descrição do Produto:</h3>

                            <li>{props.produto.detalhes}</li>
                        </div>
                    </div>

                    <div className='dp-direita'>
                        <h3>{props.produto.nome}</h3>

                        <h2>R${props.produto.preco}</h2>

                        <div className='quantidade'>
                            <h4>Quantidade: <input></input></h4>
                        </div>

                        <button className='comprar'>Finalizar Compra</button>
                        <button className='adicionar-carrinho'><img src='./assets/images/adicionar-carrinho.png'></img><h5>Adicionar ao Carrinho</h5></button>
                    </div>
                </main>
    )
}

export default CompraProduto