import './index.scss';
import { Link } from 'react-router-dom';
import CabecalhoAdm from '../../components/cabecalhoadm';


function LandingAdm() {
    return(
        <section className='secao-01-adm'>
            <div className='s1adm-esquerda'>
                <header>
                    <div>
                        <img src='./assets/images/usuario.png'></img>
                        <h4>richardarthur@gmail.com</h4>
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
                    <li><Link to='/produtos'>PRODUTOS</Link></li>
                    <li>MELHORES AVALIAÇÕES</li>
                    <li>OS MAIS COMPRADOS</li>
                    <li>GRÁFICO DE VENDAS</li>
                    <li>PEDIDOS EM ANDAMENTO</li>
                    <li>PEDIDOS ENVIADOS</li>
                </nav>
            </div>
            
            <div className='s1adm-parte-principal'>
                
                <header>
                    <img  src='./assets/images/logobranca.png'></img>
                    <hr></hr>
                </header>

                <div className='s1admp-titulo'>
                    <h1>
                        SEJA BEM-VINDO RICHARD
                    </h1>
                </div>

           
            </div>
        </section>
    )
}

export default LandingAdm
