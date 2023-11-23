import { Link } from 'react-router-dom';
import './App.scss';
import { useState, useRef } from 'react';
import { API_URL } from '../../constants';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingBar from 'react-top-loading-bar'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import storage from 'local-storage';
import { useEffect } from 'react';


function App() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const[email, setEmail] = useState('');
  const[senha, setSenha] = useState('');
  const[erro,setErro] = useState('');
  const[carregando, setCarregando] = useState(false);

  const toggleSenhaVisivel = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  const navigate = useNavigate();
  const ref = useRef();

  async function Logar() {
    ref.current.continuousStart();
    setCarregando(true);

    try {
      const r = await axios.post(API_URL + '/login', {
        email: email,
        senha: senha
      });
      storage('cliente-logado', r)

      setTimeout(() => {
        navigate('/');
      }, 2000)

    }

    catch (err){
      ref.current.complete();
      setCarregando(false)

      if(err.response.status === 401){
        setErro(err.response.data.erro)
      }
    }
  }

  useEffect(() => {
    if(storage('cliente-logado')) {
      navigate('/')
    }
  }, [])

  return (
    <div className="App">
      <LoadingBar color='#B88B1B' ref={ref} />
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
              <input type="text" placeholder="Digite seu e-mail"value={email} onChange={e => setEmail(e.target.value)}/>

              <h4>SENHA</h4>
                <div className="senha-container">
                  <input
                    type={senhaVisivel ? 'text' : 'password'}
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                  {senhaVisivel ? (
                    <FaEyeSlash className="icon-eye" onClick={toggleSenhaVisivel} />
                  ) : (
                    <FaEye className="icon-eye" onClick={toggleSenhaVisivel} />
                  )}
          

                </div>

              <button onClick={Logar} disabled={carregando} className='bt-log'>LOGIN</button>
              <h4 className='erro' style={{color: '#DE0F0F'}}>{erro}</h4>

             <h4 className='s3-login'>OU</h4>

              <button> <img src='./assets/images/face.png'/> Continue com Facebook</button>
              <button> <img src='./assets/images/google.png'/> Continue com Google </button>

              <Link to='/AlterarSenha'>Esqueci minha senha</Link>
              <Link to='/cadastro'>Ainda não sou cliente</Link>
              <Link to='/adm-login'>Sou Administrador</Link>

            </div>
        </div>
      </section>

    </div>
  );
}

export default App;
