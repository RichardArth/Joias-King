import './index.scss';
import { BuscarImagem } from '../../api/produto';
import { API_URL } from '../../constants';


export default function InforProduto(props) {

        function exibir(imagem){
                if(!imagem){
                        return `https://cdn-icons-png.flaticon.com/512/2652/2652218.png`
                }
                else {
                        return `${API_URL}/${imagem}`
                }
        }

    return(
        <div className='informacoes-produto'>
                <div className='info-imagem'>
                    <img src={exibir(props.produto.imagem)}></img>
                </div>

                <div className='info-descricao'>
                        <div>
                                <h2>PRODUTO:</h2>
                                <h4>{props.produto.nome}</h4>
                        </div>

                        <div>
                                <h2>TAMANHO:</h2>
                                <h4>{props.produto.tamanho}</h4>
                        </div>

                        <div>
                                <h2>PREÇO:</h2>
                                <h4>{props.produto.preco}</h4>
                        </div>

                        <div>
                                <h2>DETALHES:</h2>
                                <h4>{props.produto.detalhes}</h4>
                        </div>

                        <div>
                                <h2>ESTOQUE:</h2>
                                <h4>{props.produto.estoque}</h4>
                        </div>
            </div>

            <div className='divComEfeito'></div>
        </div>
    )
}