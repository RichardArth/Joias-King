import { Link } from 'react-router-dom';
import './index.scss';

function CabecalhoAdm() {

    
    return(
        <section className='cabecalho-adm'>
            <header>
                <div className='cba-meio'>
                   <Link to='/home-adm'> <img src='./assets/images/logobranca.png'></img> </Link>
                </div>

                

            </header>

            <hr className='cba-linha'></hr>
        </section>
    )
}

export default CabecalhoAdm