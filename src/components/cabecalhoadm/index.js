import { Link } from 'react-router-dom';
import './index.scss';

function CabecalhoAdm() {

    
    return(
        <header className='cabecalho-adm'>
            <div className='cba-cima'>
                <div className='esquerda'></div>

                <div className='cba-meio'>
                    <Link to='/home-adm'><img src='./assets/images/logobranca.png'></img></Link>
                </div>

                <div className='cba-direita'>
                    <img src='./assets/images/usuario.png'></img>
                </div>
            </div>

            <hr className='cba-linha'></hr>   
        </header>
    )
}

export default CabecalhoAdm