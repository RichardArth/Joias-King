import './index.scss';
import MenuAdm from '../../components/menu-adm';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';



function LandingAdm() {

    const data = [
        {brand: 'Aliança', porcentagem: 80},
        {brand: 'Pet', porcentagem: 40},
        {brand: 'Colar/Corrente', porcentagem: 50},
        {brand: 'Anel', porcentagem: 90},
        {brand: 'Brinco', porcentagem: 30},
        {brand: 'Namorados', porcentagem: 60},
    ];


    return(
        <section className='secao-01-adm'>
            <MenuAdm />
            
            <div className='s1adm-parte-principal'>
                
                <header>
                    <img  src='./assets/images/logobranca.png'></img>
                    <hr></hr>
                </header>

                <div className='s1admp-titulo'>
                    <h1>
                        SEJA BEM-VINDO
                    </h1>

                    <div className='graficos2'>
                    <ResponsiveContainer width="100%" height={500}>
                    <BarChart data={data} margin={{ top: 60, right: 30, left: 20, bottom: 20}}>
                    <CartesianGrid stroke="transparent"/>
                    <XAxis dataKey="brand" tick={{ fontSize: 18 }}/>
                    <YAxis tick={{ fontSize: 18 }}/>
                    <Bar dataKey="porcentagem" fill="#7BC442" label={{ position: 'top', value: 'porcentagem', fontSize: 15, }} />
                    </BarChart>
                    </ResponsiveContainer>
                    </div>
                </div>

           
            </div>
        </section>
    )
}

export default LandingAdm
