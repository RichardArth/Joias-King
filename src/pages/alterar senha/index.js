import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';


function Index() {

  const[novasenha, setNovaSenha] = useState('');
  const[repetirsenha, setRepetirSenha] = useState('');
  const[mensagem, setMensagem] = useState('');

  async function Alterar(e) {
    e.preventDefault();

    if (novasenha !== repetirsenha) {
        setMensagem('As senhas não coincidem. Tente novamente.');
        return;
    }

    try {

      let url = API_URL + '/alterar';

        let response = await axios.post(url, {
            novasenha,
            repetirsenha,
        });

        setMensagem(response.data.mensagem);
    } catch (error) {
        setMensagem('Erro ao alterar a senha. Verifique as informações fornecidas.');
    }
};

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
            <input type="password" placeholder="digite sua senha" value={novasenha} onChange={e => setNovaSenha(e.target.value)} required/>

            <h4>REPETIR SENHA</h4>
            <input type="password" placeholder="digite sua nova senha" value={repetirsenha} onChange={e => setRepetirSenha(e.target.value)} required/>

            <button type='submit' onClick={Alterar} className='bt-confirmar'>CONFIRMAR</button>

            <div>{mensagem}</div>
          </div>
        </div>
      </section>
        </div>
    );
}

export default Index;