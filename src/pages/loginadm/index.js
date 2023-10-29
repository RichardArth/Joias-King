import { useState } from 'react';
import './index.scss';

function Index() {

  const[nome, setNome] = useState('');
  const[email, setEmail] = useState('');
  const[senha, setSenha] = useState('');

  function LogarAdm() {
    if(nome == 'Richard' && email == 'richardarthur@gmail.com' && senha == 'senhaforte123'){
      alert('Bem-Vindo Richard!')
    }

    else {
      alert('Senha, nome ou email incorreto(s)!')
    }
  }


    return(
        <div className='Index'>
            <section>
        <div className='cabecalho-loginadm'>
          <img src='./assets/images/logopreta.png'/>
        </div>
        <div className='loginadm'>
          <div className='loginadm-s1'>
          <h2>BEM-VINDO DE VOLTA ADM</h2>
          <img src='./assets/images/usuario.png'/>
          </div>
          <div className='loginadm-s2'>
            <h4>NOME DE  USUÁRIO</h4>
            <input type="text" placeholder="digite seu nome" value={nome} onChange={e => setNome(e.target.value)} required/>

            <h4>E-MAIL</h4>
            <input type="text" placeholder="Digite seu e-mail" value={email} onChange={e => setEmail(e.target.value)} required/>

            <h4>SENHA</h4>
            <input type="password" placeholder="digite sua senha" value={senha} onChange={e => setSenha(e.target.value)} required/>

            <button onClick={LogarAdm} className='bt-confirmar'>CONFIRMAR</button>

            
          </div>
        </div>
      </section>
        </div>
    );
}

export default Index;