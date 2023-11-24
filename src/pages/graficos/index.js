import './index.scss';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import storage from 'local-storage';



function LandingAdm() {

    const [data, setData] =  useState([
        {brand: 'Aliança', porcentagem: 80},
        {brand: 'Pet', porcentagem: 40},
        {brand: 'Colar/Corrente', porcentagem: 50},
        {brand: 'Anel', porcentagem: 90},
        {brand: 'Brinco', porcentagem: 30},
        {brand: 'Namorados', porcentagem: 60},
    ]);

    const nav = useNavigate();


    const handleCompra = () => {
        const newData = data.map(item => ({
          ...item,
          porcentagem: item.porcentagem + Math.floor(Math.random() * 10)
        }));
        setData(newData);
      };

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

                    <div className='graficos2'>
                    <ResponsiveContainer width="100%" height={500}>
                    <BarChart data={data} margin={{ top: 100, right: 30, left: 20, bottom: 0}}>
                    <CartesianGrid stroke="transparent"/>
                    <XAxis dataKey="brand" tick={{ fontSize: 18 }}/>
                    <YAxis tick={{ fontSize: 18 }}/>
                    <Bar dataKey="porcentagem" fill="#7BC442" label={{ position: 'top', value: 'porcentagem', fontSize: 15, }} />
                    </BarChart>
                    </ResponsiveContainer>

                    
                    </div>

                    <button className='simulacao-compra' onClick={handleCompra}>Simular Compra</button>
                </div>

           
            </div>
        </section>
    )
}

export default LandingAdm
