import './index.scss';
import CabecalhoAdm from '../../components/cabecalhoadm';
import InforProduto from '../../components/info-produto';
import storage from 'local-storage';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { BuscarID } from '../../api/produto'
import { useState } from 'react';


function DetalhesProduto() {

    const { IdParam } = useParams();
    const[produto, setProduto] = useState({})

    useEffect(() => {
        CarregarProduto()
    }, [])

    const nav = useNavigate();
    
    function SairPagina() {
        storage.remove('adm-login')
        nav('/adm-login')
    }

    useEffect(() => {
        if(!storage('adm-login')) {
            nav('/adm-login')
        }
    }, [])

    async function CarregarProduto() {
        const r = await BuscarID(IdParam);
        setProduto(r)
    }

    return(
        
        <div className='pagina-detalhes'>
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

            <div className='parte-principal'>
                <CabecalhoAdm/>

                <div>
                    <InforProduto produto={produto}/>
                </div>
            </div>
        </div>
    )
}

export default DetalhesProduto