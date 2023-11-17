import { Link } from 'react-router-dom';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function MenuAdm() {

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


    return(
        <div className='menu-adm'>
                <header>
                    <div>
                        <span>R</span>
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
                    <li><Link to='/home-adm'>PRODUTOS</Link></li>
                    <li>MELHORES AVALIAÇÕES</li>
                    <li>OS MAIS COMPRADOS</li>
                    <li><Link to='/graficos'>GRÁFICO DE VENDAS</Link></li>
                    <li>PEDIDOS EM ANDAMENTO</li>
                    <li>PEDIDOS ENVIADOS</li>
                </nav>

                <button onClick={SairPagina} className='sair-pagina'><img src='./assets/images/sair-pagina.png'></img>Sair</button>
            </div>
    )
}

export default MenuAdm