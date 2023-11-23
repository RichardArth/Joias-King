import './index.scss';
import Rodape from '../../components/rodape';
import { useEffect, useState } from 'react';
import { CarregarProdutos } from '../../api/produto';
import Cabecalho from '../../components/cabecalho';
  

function Produtos() {

    const[produtos, setProdutos] = useState([]);
    const[imagem, setImagem] = useState('');

    async function ListarTodos() {
        const r = await CarregarProdutos();
        setProdutos(r)
    }

    useEffect(() => {
        ListarTodos()
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
        <div className='pagina-produtos'>
           <Cabecalho/>

           <div className='produtos-todos'>
            {produtos.map(e =>
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

export default Produtos;