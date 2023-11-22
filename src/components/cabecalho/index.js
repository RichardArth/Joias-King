import { Link, useNavigate } from 'react-router-dom';
import storage from 'local-storage';
import './index.scss';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';



function Cabecalho() {

  const[filtro, setFiltro] = useState('')

  const nav = useNavigate();
  const usuario = storage('cliente-logado');


  function SairPagina() {
    storage.remove('cliente-logado')
    nav('/login')
  }

  async function ConsultarProduto(filtro) {
        
    const r = await axios.get(API_URL + `/produtos/busca?nome=${filtro}`)
    setFiltro(r)
    nav('/produtos')
}

    return(
        <div className='cabecalho'>
          
        <div className='cabecalho-esquerda'>
        <input value={filtro} onChange={e => setFiltro(e.target.value)} type="text" id="search-input" placeholder="Pesquise sua Joia"></input>

        <img onClick={ConsultarProduto} src='./assets/images/lupa.png'></img>
        </div>

        <div className='cabecalho-meio'>
        <Link to='/'><img src='./assets/images/logobranca.png'/></Link>
        </div>

      <div className='cabecalho-direita'>
        <img className='img-perfil' src='./assets/images/usuario.png'></img>
        {usuario.id === 0 ? <Link to='/cadastro'>Cadastro</Link> : <Link to='/meu-perfil'>Meu Perfil</Link>}

        <img onClick={SairPagina} src='./assets/images/sair-pagina.png'></img>

      <Link to='/carrinho'><img src='./assets/images/carrinho.png'></img></Link>
      </div>     
    </div>
    )
}

export default Cabecalho