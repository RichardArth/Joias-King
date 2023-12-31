import { useState, useRef } from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../constants';
import axios from 'axios';
import LoadingBar from 'react-top-loading-bar';
import storage from 'local-storage';
import { useEffect } from 'react';

function Index() {

  const[email, setEmail] = useState('');
  const[senha, setSenha] = useState('');
  const[erro, setErro] = useState('');
  const[carregando, setCarregando] = useState(false);

  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    if(storage('adm-login')) {
      navigate('/home-adm')
    }
  }, [])

  async function Logar() {
    ref.current.continuousStart();
    setCarregando(true);

    try {
      const r = await axios.post(API_URL + '/loginadm', {
        email: email,
        senha: senha
      });
      storage('adm-login', r);

      setTimeout(() => {
        navigate('/home-adm');
      }, 3000)

    }

    catch (err){
      ref.current.complete();
      setCarregando(false)

      if(err.response.status === 401){
        setErro(err.response.data.erro)
      }
    }
  }

    return(
        <div className='Index'>
      <section>
        <LoadingBar color='#B88B1B' ref={ref} />
        <div className='cabecalho-loginadm'>
          <img src='./assets/images/logopreta.png'/>
        </div>

        <div className='loginadm'>
          <div className='loginadm-s1'>
          <h2>BEM-VINDO DE VOLTA ADM</h2>
          <img src='./assets/images/usuario.png'/>
        </div>

          <div className='loginadm-s2'>

            <h4>E-MAIL</h4>
            <input type="text" placeholder="Digite seu e-mail" value={email} onChange={e => setEmail(e.target.value)} required/>

            <h4>SENHA</h4>
            <input type="password" placeholder="digite sua senha" value={senha} onChange={e => setSenha(e.target.value)} required/>

            <button onClick={Logar} disabled={carregando} className='bt-confirmar'>CONFIRMAR</button>
            <h5 style={{color: '#DE0F0F'}}>{erro}</h5>
          </div>
        </div>
      </section>
        </div>
    );
}

export default Index;
