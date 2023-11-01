import './index.scss';
import Cabecalho from '../../components/cabecalho';
import SolicitarSolucao from '../../components/solicitacao'


  

function Atendimento() {
    return(
        <div className='pagina-atendimento'>
           <Cabecalho/>

            <hr></hr>

           <div className='atendimento'> 
            

            <h1>CENTRAL DE ATENDIMENTO</h1>

            <div className='atendimento-pesquisa'>
            <input type='text' placeholder='COLOQUE SUA DÚVIDA AQUI'></input>
            </div>

            <div className='atendimento-s1'>

                <div className='atendimento-s1-perfil'>
                    <img src='./assets/images/usuario.png'/>
                    <p>Meu Perfil</p>
                </div>

                <div className='atendimento-s2-perfil'>
                 <img src='./assets/images/carro.png'/>
                  <p>Seus Pedidos</p>
                </div>

            </div>


            
            <div className='atendimento-s1'>

                <div className='atendimento-s1-perfil'>
                    <img src='./assets/images/grana.png'/>
                    <p>Cupons/ Pagamentos e
                        Promoções</p>
                </div>

                <div  className='atendimento-s2-perfil'>
                 <img href='/' src='./assets/images/troca.png'/>
                  <p>Trocas e Devoluções</p>
                </div>

            </div>


            <div className='atendimento-s1'>

                <div className='atendimento-s1-perfil'>
                    <img src='./assets/images/corrente.png'/>
                    <p>Cuidado com as suas Jóias</p>
                </div>

                <div className='atendimento-s2-perfil'>
                <img src='./assets/images/presente.png'/>
                <p>Serviços</p>
                </div>

            </div>

        
            <SolicitarSolucao />

         </div>

        

        </div>
           
       
    )
}

export default Atendimento;