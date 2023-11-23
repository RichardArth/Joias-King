import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import { useEffect, useState } from 'react';
import { CarregarBrincos } from '../../api/categoria';
import { BuscarImagem } from '../../api/produto';
  

function Brincos() {

    const[imagem, setImagem] = useState('');
    const[brincos, setBrincos] = useState([]);

    async function ListarBrincos() {
        const r = await CarregarBrincos();
        setBrincos(r)
    }

    useEffect(() => {
        ListarBrincos()
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
        <div className='pagina-alianca'>
            <Cabecalho />

            <div className='produtos-brinco'>
            {brincos.map(e =>
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

export default Brincos;