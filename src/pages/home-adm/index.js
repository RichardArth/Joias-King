import './index.scss';

import { useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants.js';
import { useState } from 'react';

import MenuAdm from '../../components/menu-adm/index.js';
import { RemoverProduto } from '../../api/produto';

import { toast } from 'react-toastify';

import { confirmAlert } from 'react-confirm-alert'
import { useNavigate } from 'react-router-dom';

function LandingAdm() {
    
    const[produtos, setProdutos] = useState([]);
    const[filtro, setFiltro] = useState('');

    const nav = useNavigate()

    async function ListarProdutos() {
        
        const r = await axios.get(API_URL + '/produtos')
        setProdutos(r.data)
    }

    async function ConsultarProduto(filtro) {
        
        const r = await axios.get(API_URL + `/produtos/busca?nome=${filtro}`)
        setFiltro(r)
    }

    useEffect(() => {
        ListarProdutos();
    })

    async function DeletarProduto(id, nome) {
        
    confirmAlert({
        title: 'Deletar Produto',
        message: `Tem certeza que quer remover o produto?`,
        buttons: [
            {
                label: 'Sim',
                onClick: async() => {
                    const r = await RemoverProduto(id, nome);
                    if(filtro === '')
                        ListarProdutos();
                    else
                        ConsultarProduto()
                    toast.success('Produto deletado com sucesso!')
                }
            },
            {
                label: 'Não'
            }
        ]
    })
    }

    function EditarProduto(id) {
        nav(`admin/alterar/${id}`)
    }

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

                <div className='barra-pesquisa'>
                    <input value={filtro} onChange={e => setFiltro(e.target.value)} placeholder='Buscar produto' type='text'></input>
                    <img onClick={ConsultarProduto} src='./assets/images/lupa.png'></img>
                </div>

                <main className='s1p-produtos'>


                        {produtos.map(e =>                    
                            <div key={e.id} className='ficha-produto'>
                                <div className='imagem-produto'>
                                    {e.imagem}
                                </div>

                                <div className='descricao-produto'>
                                    <h4>{e.nome}</h4>
                                    <h5 style={{color: '#B88B1B'}}>R${e.preco}</h5>
                                </div>

                                <div className='personalizar-produto'>
                                    <img src='./assets/images/deletar-produto.png' onClick={() => DeletarProduto(e.id, e.nome)}></img>
                                    <img src='./assets/images/alterar-produto.png' onClick={() => EditarProduto(e.id)}></img>
                                </div>
                            </div>   
                     )}
                </main> 
            </div>
        </section>
    )
}

export default LandingAdm
