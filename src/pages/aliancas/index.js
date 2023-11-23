import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import { useEffect, useState } from 'react';
import { CarregarAliancas } from '../../api/categoria';
import { BuscarImagem } from '../../api/produto';
  

function Aliancas() {

    const[aliancas, setAliancas] = useState('');
    const[imagem, setImagem] = useState('');

    async function ListarAliancas() {
        const r = await CarregarAliancas();
        setAliancas(r)
    }

    useEffect(() => {
        ListarAliancas()
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
            <div className='produtos-aliancas'>
            {aliancas.map(e =>
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