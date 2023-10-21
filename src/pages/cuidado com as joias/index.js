import './index.scss'
import CabecalhoAdm from '../../components/cabecalhoadm';
import SolicitarSolucao from '../../components/solicitacao';
import Rodape from '../../components/rodape';




function CuidadoJoias() {
    return(
        <div className="pagina-cuidado-joias">
            <header>
                <CabecalhoAdm />
            </header>

            <div className='cd-joias-titulo'>
                <h1>CUIDADO COM AS SUAS JÓIAS</h1>
                <hr></hr>
            </div>

            <main>
                <h2 style={{color: '#DE0F0F'}}>Dicas Essenciais para Cuidar das Suas Joias King com Carinho</h2>

                <h4> Suas Joias King são verdadeiras obras de arte que acrescentam brilho e estilo à sua vida. Para garantir que essas peças preciosas mantenham seu esplendor ao longo do tempo, aqui estão algumas dicas simples, mas eficazes, de cuidados:</h4>

                <h5><b style={{color: '#DE0F0F'}}>1</b>.Limpeza Delicada: Limpe suas joias com um pano macio e levemente umedecido para remover sujeira e manter o brilho. Evite produtos químicos agressivos.</h5>

                <h5><b style={{color: '#DE0F0F'}}>2</b>. Armazenamento Adequado: Guarde suas joias individualmente em saquinhos macios ou estojos para evitar riscos e emaranhados. Proteja-as da luz direta do sol e da umidade.</h5>

                <h5><b style={{color: '#DE0F0F'}}>3</b>. Evite Produtos Químicos: Mantenha suas joias longe de produtos químicos como perfumes, loções e produtos de limpeza, pois eles podem danificar os materiais.</h5>

                <h5><b style={{color: '#DE0F0F'}}>4</b>. Manutenção Profissional: De tempos em tempos, considere uma avaliação e limpeza profissional para garantir a durabilidade e a beleza das suas peças.</h5>

                <h5><b style={{color: '#DE0F0F'}}>5</b>. Rotatividade Sábia: Se você tem várias joias, alterne o uso para evitar o desgaste excessivo de uma peça específica.</h5>

                <h4>  Cuidar das suas joias é preservar a história e o valor delas. Com essas dicas, suas Joias King vão continuar a brilhar tanto quanto no dia em que você as recebeu. Seja o guardião do seu próprio tesouro de elegância e sofisticação.</h4>
            </main>

            <div className='tamanho-joia'>
                <div id='tj-titulo'>
                    <h2 style={{color: '#DE0F0F'}}>TAMANHO DA SUA JÓIA</h2>
                </div>

                <div className='tj-introducao'>
                    <h4>Encontrar o tamanho ideal para suas joias
                        é fundamentalpara garantir um ajuste
                        confortável e elegante. Seja um anel
                        deslumbrante, um colar cativante ou
                        uma pulseira encantadora, saber como
                        medir o tamanho correto é essencial.
                        Aqui estão algumas dicas práticas para
                        ajudá-lo a encontrar o tamanho perfeito
                        para suas preciosas joias:
                    </h4>

                    <img src='./assets/images/tamanho-joia.png'></img>
                </div>

                <div className='tj-tutorial'>
                    <div>
                        <img src='./assets/images/tj-barbante.png'></img>
                        <h4>1</h4>
                        <h5>Dê uma volta na articulação do seu dedo com um barbante ou linha;</h5>
                    </div>

                    <div>
                        <img className='tjt-mao' src='./assets/images/tj-mao.png'></img>
                        <h4>2</h4>
                        <h5>Marque a medida exata da circunferência de seu dedo; </h5>
                    </div>

                    <div>
                        <img className='tjt-regua' src='./assets/images/tj-regua.png'></img>
                        <h4>3</h4>
                        <h5>Estenda o fio sobre uma régua e leia o comprimento marcado.</h5>
                    </div>

                </div>

                <div className='tabela-tamanhos'>
                    <h3><b>Compare a medida de seu dedo com a tabela abaixo:</b></h3>

                    <main className='tabela'>
                        <div className='cl-cinza-claro'>
                            <div>
                                <h5>Aro 10 <h5>5 cm</h5></h5>
                            </div>

                            <div>
                                <h5>Aro 16 <h5>5,6 cm</h5></h5>
                            </div>

                            <div>
                                <h5>Aro 22 <h5>6,2 cm</h5></h5>
                            </div>

                            <div>
                                <h5>Aro 28 <h5>6,8 cm</h5></h5>
                            </div>
                        </div>

                        <div className='cl-cinza-escuro'>
                            <div>
                                <h5>Aro 11 <h5>5,1 cm</h5></h5>
                            </div>
                        
                            <div>
                                <h5>Aro 17 <h5>5,7 cm</h5></h5>
                            </div>

                            <div>
                                <h5>Aro 23 <h5>6,3 cm</h5></h5>
                            </div>

                            <div>
                                <h5>Aro 29 <h5>6,9 cm</h5></h5>
                            </div>
                        </div>

                        <div className='cl-cinza-claro'>
                            <div>
                                <h5>Aro 12 <h5>5,2 cm</h5></h5>
                            </div>

                            <div>
                                <h5>Aro 18 <h5>5,8 cm</h5></h5>
                            </div>

                            <div>
                                <h5>Aro 24 <h5>6,4 cm</h5></h5>
                            </div>

                            <div>
                                <h5>Aro 30 <h5>7 cm</h5></h5>
                            </div>
                        </div>

                        <div className='cl-cinza-escuro'>
                            <div>
                                <h5>Aro 13 <h5>5,3 cm</h5></h5>
                            </div>
                        
                            <div>
                                <h5>Aro 19 <h5>5,9 cm</h5></h5>
                            </div>

                            <div>
                                <h5>Aro 25 <h5>6,5 cm</h5></h5>
                            </div>

                            <div>
                                <h5>Aro 31 <h5>7,1 cm</h5></h5>
                            </div>
                        </div>

                        <div className='cl-cinza-claro'>
                            <div>
                                <h5>Aro 14 <h5>5,4 cm</h5></h5>
                            </div>

                            <div>
                                <h5>Aro 20 <h5>6 cm</h5></h5>
                            </div>

                            <div>
                                <h5>Aro 26 <h5>6 cm</h5></h5>
                            </div>

                            <div>
                                <h5>Aro 32 <h5>7,2 cm</h5></h5>
                            </div>
                        </div>

                        <div className='cl-cinza-escuro'>
                            <div>
                                <h5>Aro 15 <h5>5,5 cm</h5></h5>
                            </div>
                        
                            <div>
                                <h5>Aro 21 <h5>6,1 cm</h5></h5>
                            </div>

                            <div>
                                <h5>Aro 27 <h5>6,7 cm</h5></h5>
                            </div>

                            <div>
                                <h5>Aro 33 <h5>7,3 cm</h5></h5>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <SolicitarSolucao />
            <Rodape />
            
        </div>
    )
}

export default CuidadoJoias;