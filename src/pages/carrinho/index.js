import './index.scss'
import Cabecalho from '../../components/cabecalho'; 
import Rodape from '../../components/rodape';
import { useEffect } from 'react';
import Storage from 'local-storage';
import { useState } from 'react';
import { buscarProdutoPorId } from '../../api/produto';




function Carrinho() {
        const [itens,setItens] = useState([]);

 async function carregarCarrinho(){
        let carrinho = Storage('carrinho');
        if (carrinho) {
            for (let produto of carrinho){
            let p = await buscarProdutoPorId(produto.id);
            setItens(...itens, {
                    produto: p,
                    qtd: produto.qtd
                })
            }
        }
        console.log(itens)
    }

    useEffect(() =>  {
            carregarCarrinho();
 }, [] )


    return(
        <div className="pagina-carrino">
            <header>
                <Cabecalho />
            </header>

            <hr></hr>

                <div className='meio-carrinho'>
                <div className='ph-s1-categorias'>
                    <a>ALIANÇAS</a>
                    <a>ANÉIS</a>    
                    <a>BRINCOS</a>
                    <a>CORRENTES</a>
                    <a>NAMORADOS</a>
                    <a>PET</a>
                </div>

                <h1>Meu Carrinho:</h1>

                <hr></hr>

                <div className='carrinho-pg'>
                    
                    <div className='carrinho-s1'>
                    <img src='./assets/images/anelprata.png'/>
                    </div>

                    <div className='carrinho-s2'>
                    <h5>Alianças Louveira + Anel solitário Olimpo
                       Namoro e Compromisso em Prata 0,950</h5>

                    <div className='carrinho-s2-qtd'>
                    <input type='Number'></input>
                    <p>Em estoque</p>

                    </div>
                    <div className='carrinho-s2-excluir'>
                        
                    <h3>Excluir   |    Adicionar à wishlist</h3>
                    </div>
                    
                    </div>

                    <p>R$299,90</p>

                </div> 

                 <hr></hr>               

                </div>

            
            <Rodape />
            
        </div>
    )
}

export default Carrinho;