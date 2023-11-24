import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import { useEffect, useState } from 'react';
import { CarregarPets } from '../../api/categoria';
import { BuscarImagem } from '../../api/produto';


function Pets(){
  

    const[imagem, setImagem] = useState('');
    const[pets, setPets] = useState([]);

    async function ListarPets() {
        const r = await CarregarPets();
        setPets(r)
    }

    useEffect(() => {
        ListarPets()
    }, [])

    function mostrarimg(){
        if(imagem instanceof File){
          return URL.createObjectURL(imagem)
        }
    
        else {
          return BuscarImagem(imagem)
        }
      }

    return(
        <div className='pagina-alianca'>
            <Cabecalho />

            <div className='produtos-pets'>
                {pets.map(e =>
                    <div key={e.id} className='produto-ficha-s1'>
                        <div className='produto-s2'>
                            <img src={mostrarimg()} />
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

export default Pets;