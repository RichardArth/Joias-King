import './index.scss';
import { useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants.js';
import { useState } from 'react';
import MenuAdm from '../../components/menu-adm/index.js';

function LandingAdm() {
    
    const[produtos, setProdutos] = useState([]);

    async function ListarProdutos() {
        
        const r = await axios.get(API_URL + '/produtos')
        setProdutos(r.data)
    }

    async function ConsultarProduto(nome) {
        
        const r = await axios.get(API_URL + `/busca?nome=${nome}`)
        return r.data
    }

    useEffect(() => {
        ListarProdutos();
    })

    return(
        <section className='secao-01-adm'>
            <MenuAdm />
            
            <div className='s1adm-parte-principal'>
                <header>
                    <img src='./assets/images/logobranca.png'></img>
                    <hr></hr>
                </header>

                <div className='s1admp-titulo'>
                    <h1>
                        SEJA BEM-VINDO
                    </h1>
                </div>

                <main className='s1p-produtos'>
                        {produtos.map(e =>                    
                            <div className='ficha-produto'>
                                <div className='imagem-produto'>
                                    {e.imagem}
                                </div>

                                <div className='descricao-produto'>
                                    <h4>{e.nome}</h4>
                                    <h5 style={{color: '#B88B1B'}}>R${e.preco}</h5>
                                </div>

                                <div className='personalizar-produto'>
                                    <img src='./assets/images/deletar-produto.png'></img>
                                    <img src='./assets/images/alterar-produto.png'></img>
                                </div>
                            </div>   
                     )}
                </main> 
            </div>
        </section>
    )
}

export default LandingAdm
