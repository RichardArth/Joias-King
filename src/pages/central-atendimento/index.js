import './index.scss';
import Cabecalho from '../../components/cabecalho';


  

function Atendimento() {
    return(
        <div className='pagina-atendimento'>
           <Cabecalho/>

            <hr></hr>

           <div className='atendimento'> 
            

            <h1>CENTRAL DE ATENDIMENTO</h1>

            <div className='atendimento-pesquisa'>
            <input type='text'></input>
            <img src='./assets/images/lupa.png'/>
            </div>

           </div>
           
        
        </div>
    )
}

export default Atendimento;