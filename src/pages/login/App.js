import { Link } from 'react-router-dom';
import './App.scss';
import { useState } from 'react';
import { API_URL } from '../../constants';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function App() {

  const[email, setEmail] = useState('');
  const[senha, setSenha] = useState('');
  const[erro,setErro] = useState('');

  let navigate = useNavigate();

  async function Logar() {
    try {
      let r = await axios.post(API_URL + '/login', {
        email: email,
        senha: senha
      })
      
      navigate('/home-adm')

    }
    
    catch (err){
      if(err.reponse.status === 401){
        setErro(err.response.data.erro)
      }
    }
  }

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
            {erro}

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
