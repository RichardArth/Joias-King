import './index.scss';

import { useEffect } from 'react';
import { useState } from 'react';

import { RemoverProduto, ConsultarProduto, CarregarProdutos } from '../../api/produto';

import { toast } from 'react-toastify';
import storage from 'local-storage';

import { confirmAlert } from 'react-confirm-alert'
import { Link, useNavigate } from 'react-router-dom';

function LandingAdm() {
    
    const[produtos, setProdutos] = useState([]);
    const[filtro, setFiltro] = useState('');

    const nav = useNavigate()

    async function ListarProdutos() {
        const r = await CarregarProdutos();
        setProdutos(r)
    }

    async function Filtrar() {
        const r = await ConsultarProduto(filtro)
        setProdutos(r)
    }

    

    useEffect(() => {
        ListarProdutos();
        if(!storage('adm-login')) {
            nav('/adm-login')
        }
    }, [])

    function abrirDetalhes(id) {
        nav(`/detalhesproduto/${id}`);
    }

    async function DeletarProduto(id, nome) {
        
    confirmAlert({
        title: 'Deletar Produto',
        message: `Tem certeza que deseja remover: ${nome}?`,
        buttons: [
            {
                label: 'Sim',
                onClick: async () => {
                    const r = await RemoverProduto(id, nome);
                    if(filtro === ''){
                        ListarProdutos();
                    }
                    else {
                        ConsultarProduto(filtro)
                    }
                    toast.info('Produto deletado com sucesso!')
                }
            },
            {
                label: 'Não'
            }
        ]
    })
    }

    function EditarProduto(id) {
        nav(`/alterar/${id}`);
    }

    function SairPagina() {
        storage.remove('adm-login')
        nav('/adm-login')
    }

    useEffect(() => {
        if(!storage('adm-login')) {
            nav('/adm-login')
        }
    }, [])

    return(
        <section className='secao-01-adm'>

            <div className='parte-menu-adm'>
                <header>
                    <div>
                        <span>A</span>
                        <h4>Bem-Vindo ADM!</h4>
                    </div>
                    <hr></hr>
                </header>

                <nav className='s1eadm-projetos'>
                    <h2>PROJETOS</h2>
                    <li><Link to='https://www.figma.com/file/OpQQXeuksFS66F1xjIsB7l/Joias-King?type=design&node-id=0-1&mode=design&t=DsyVs1E4AQED9YNt-0'>APARÊNCIA</Link></li>
                    <li>PÁGINAS</li>
                </nav>

                <nav className='s1eadm-produtos'>
                    <h2>PRODUTOS</h2>
                    <li><Link to='/cd-produto'>ADICIONAR PRODUTO</Link></li>
                    <li><Link to='/home-adm'>PRODUTOS</Link></li>
                    <li>MELHORES AVALIAÇÕES</li>
                    <li>OS MAIS COMPRADOS</li>
                    <li><Link to='/graficos'>GRÁFICO DE VENDAS</Link></li>
                    <li>PEDIDOS EM ANDAMENTO</li>
                    <li>PEDIDOS ENVIADOS</li>
                </nav>

                <button onClick={SairPagina} className='sair-pagina'><img src='./assets/images/sair-pagina.png'></img>Sair</button>
            </div>

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
                    <img onClick={Filtrar} src='./assets/images/lupa.png'></img>
                </div>

                <main className='s1p-produtos'>

                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>PRODUTO</th>
                                    <th>TIPO</th>
                                    <th>PRECO</th>
                                    <th>ESTOQUE</th>
                                </tr>
                            </thead>

                            <tbody>

                                {produtos.map(e =>
                                    <tr key={e.id} onClick={() => abrirDetalhes(e.id)}>
                                        <td>{e.id}</td>
                                        <td>{e.nome.substr(0, 14)}...</td>
                                        <td>{e.tipo}</td>
                                        <td>{e.preco}</td>
                                        <td>{e.estoque}</td>
                                        <td className='funcoes'>
                                            <img onClick={x => { x.stopPropagation();
                                                                 EditarProduto(e.id)} } src='./assets/images/alterar-produto.png'></img>

                                            <img onClick={x => { x.stopPropagation();
                                                                 DeletarProduto(e.id, e.nome)}} src='./assets/images/deletar-produto.png'></img>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>    
                </main> 
            </div>
        </section>
    )
}

export default LandingAdm
