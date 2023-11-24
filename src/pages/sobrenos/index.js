import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import { Link } from 'react-router-dom';

function Index() {
    return(
        <div className='sobrenos'>
            <Cabecalho />
                    
                    <div className='sobrenos-meio'>
                        
                        <hr></hr>

                        <h1>A NOSSA MARCA</h1>

                        <div className='meio-01'>
                            <div className='cima-01'>
                            <p>Na Joias King, nossa paixão pela venda de joias é o que nos impulsiona. Somos uma marca dedicada a oferecer aos nossos clientes peças de joalheria de qualidade incomparável, que refletem estilo, influência e personalidade.</p>
                            </div>
                            <div className='cima-02'>
                                <img src='./assets/images/image 40.png'/>
                            </div>
                            </div>


                        <hr></hr>  
                        <h1>QUALIDADE GARANTIDA!</h1>


                        <div className='meio-02'>
                                <div className='baixo-01'> 
                                <p>Desde a nossa fundação, a busca pela excelência
                                        tem sido a base de tudo o que fazemos. Cada joia
                                        em nosso catálogo é fruto de um processo
                                        meticuloso, no qual combinamos a maestria da
                                        ourivesaria tradicional com a criatividade e a
                                        inovação contemporânea. Buscamos apenas
                                        materiais preciosos e pedras preciosas
                                        selecionadas, garantindo assim a herança e o
                                        brilho de cada peça.</p>
                                </div>
                                <div className='baixo-02'>
                                

                                    <img src='./assets/images/image 41.png'/>    
                                </div>
                        </div>
                            <hr></hr>

                            
                            <div className='cadastrar'>
                                <Link to='/cadastro'>Cadastre-se Agora!</Link>
                            </div>
                        
                    </div>
                        
                    <Rodape />
                  
                    
                
        </div>
    );
}

export default Index;