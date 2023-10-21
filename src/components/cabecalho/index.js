import { Link } from 'react-router-dom';
import './index.scss';


function Cabecalho() {
    return(
        <div className='cabecalho'>
          
        <div className='cabecalho-esquerda'>
        <input type="text" id="search-input" placeholder="Pesquise sua Joia"/>

        <img src='./assets/images/lupa.png'></img>
        </div>

        <div className='cabecalho-meio'>
        <img src='./assets/images/logobranca.png'/>
        </div>

      <div className='cabecalho-direita'>
        <img className='img-perfil' src='./assets/images/usuario.png'></img>
        <Link to='/cadastro'><button>Cadastre-se</button></Link>

        <img src='./assets/images/carrinho.png'></img>
      </div>     
    </div>
    )
}

export default Cabecalho