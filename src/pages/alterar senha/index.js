import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';
import { FaEye, FaEyeSlash } from 'react-icons/fa';



function Index() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [senhaVisivel2, setSenhaVisivel2] = useState(false);


  const[novasenha, setNovaSenha] = useState('');
  const[repetirsenha, setRepetirSenha] = useState('');
  const[mensagem, setMensagem] = useState('');

  const toggleSenhaVisivel = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  const toggleSenhaVisivel2 = () => {
    setSenhaVisivel2(!senhaVisivel2);
  };


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
            <h4>SENHA</h4>
                <div className="senha-container">
                  <input
                    type={senhaVisivel ? 'text' : 'password'}
                    placeholder="Digite sua nova senha"
                    value={novasenha}
                    onChange={(e) => setNovaSenha(e.target.value)}
                  />
                  {senhaVisivel ? (
                    <FaEyeSlash className="icon-eye" onClick={toggleSenhaVisivel} />
                  ) : (
                    <FaEye className="icon-eye" onClick={toggleSenhaVisivel} />
                  )}
          

                </div>

                <h4>SENHA</h4>
                <div className="senha-container">
                  <input
                    type={senhaVisivel2 ? 'text' : 'password'}
                    placeholder="Confirme sua nova senha"
                    value={repetirsenha}
                    onChange={(e) => setRepetirSenha(e.target.value)}
                  />
                  {senhaVisivel2 ? (
                    <FaEyeSlash className="icon-eye" onClick={toggleSenhaVisivel2} />
                  ) : (
                    <FaEye className="icon-eye" onClick={toggleSenhaVisivel2} />
                  )}
          

                </div>

            <button type='submit' onClick={Alterar} className='bt-confirmar'>CONFIRMAR</button>

            <div>{mensagem}</div>
          </div>
        </div>
      </section>
        </div>
    );
}

export default Index;