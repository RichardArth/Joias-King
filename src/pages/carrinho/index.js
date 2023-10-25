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

                <div className='carrinho-'>

                </div>                

                </div>

            
            <Rodape />
            
        </div>
    )
}

export default Carrinho;