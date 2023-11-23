import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import { useState } from 'react';

import {  CarregarAneis } from '../../api/categoria';
import { useEffect } from 'react';
import { BuscarImagem } from '../../api/produto';
  

function Aliancas() {

    const[aneis, setAneis] = useState([]);
    const[imagem, setImagem] = useState('');

    async function ListarAneis() {
        const r = await CarregarAneis();
        setAneis(r)
    }

    useEffect(() => {
        ListarAneis()
    }, [])

    function mostrarimg(){
        if(typeof (imagem) == 'object'){
          return URL.createObjectURL(imagem)
        }
    
        else {
          return BuscarImagem(imagem)
        }
      }

    return(
        <div className='pagina-aneis'>
            <Cabecalho />

            <div className='produtos-aneis'>
            {aneis.map(e =>
                <div className='produto-ficha-s1'>
                    <div className='produto-s2'>
                        <img src={mostrarimg()}></img>
                        <h5>{e.nome}</h5>
                        <h4 style={{color: '#B88B1B'}}>R${e.preco}</h4>
                        <h6>Estoque:{e.estoque}</h6>
                    </div>
                </div>
            )}
            </div>
            <Rodape />
        </div>
    )
}
export default Aliancas;