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
        <Link to='/'><img src='./assets/images/logobranca.png'/></Link>
        </div>

      <div className='cabecalho-direita'>
        <img className='img-perfil' src='./assets/images/usuario.png'></img>
        <Link to='/cadastro'><button>Cadastre-se</button></Link>

      <Link to='/carrinho'><img src='./assets/images/carrinho.png'></img></Link>
      </div>     
    </div>
    )
}

export default Cabecalho