
import { Link } from 'react-router-dom';
import './App.scss';
import AlterarSenha from '../alterar senha'
import Cadastro from '../cadastro';

function App() {
  return (
    <div className="App">

      <section className='login01'>
        <div className='cabecalho-login'>
       <Link to='/'><img src='./assets/images/logopreta.png'/></Link>
        </div>
        <div className='login'>
          <div className='login-s1'>
          <h2>FAÇA SEU LOGIN</h2>
          <img src='./assets/images/usuario.png'/>
          </div>
          <div className='login-s2'>
            <h4>EMAIL</h4>
            <input type="text" placeholder="digite seu e-mail"/>

            <h4>SENHA</h4>
            <input type="password" placeholder="digite sua senha"/>

            <button className='bt-log'>LOGIN</button>

            <h4 className='s3-login'>OU</h4>

          <button> <img src='./assets/images/face.png'/> Continue com Facebook</button>
          <button> <img src='./assets/images/google.png'/> Continue com Google </button>

            <Link to='/AlterarSenha'>Esqueci minha senha</Link>
            <Link to='/cadastro'>Ainda não sou cliente</Link>

          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
