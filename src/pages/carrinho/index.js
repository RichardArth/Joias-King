import './index.scss'
import Cabecalho from '../../components/cabecalho'; 
import Rodape from '../../components/rodape';




function Carrinho() {
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