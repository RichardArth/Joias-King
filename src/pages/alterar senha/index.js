import { Link } from 'react-router-dom';
import './index.scss';

function Index() {
    return(
        <div className='Index'>
            <section className='alterarsenha'>
        <div className='cabecalho-alterar'>
        <Link to='/'><img src='./assets/images/logopreta.png'/></Link>
        </div>
        <div className='alterar'>
          <div className='alterar-s1'>
          <h2>ALTERAR SENHA</h2>
          <img src='./assets/images/usuario.png'/>
          </div>
          <div className='alterar-s2'>
            <h4>SENHA NOVA</h4>
            <input type="password" placeholder="digite seu senha"/>

            <h4>REPETIR SENHA</h4>
            <input type="password" placeholder="digite sua nova senha"/>

            <button className='bt-confirmar'>CONFIRMAR</button>

            
          </div>
        </div>
      </section>
        </div>
    );
}

export default Index;