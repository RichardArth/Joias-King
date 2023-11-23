import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import storage from 'local-storage';
  

function LandingPage() {
    const[slidePerview] = useState(2);
    const nav = useNavigate();
    
    const reviews = [
        {
          id: '1',
          imageLeft: './assets/images/aspas-esquerda.png',
          text: 'Parabenizo a toda a equipe e garanto a honestidade na prestação de serviços. Satisfação garantida!',
          imageRight: './assets/images/aspas-direita.png',
          author: 'Richard Arthur', 
        },
        {
          id: '2',
          imageLeft: './assets/images/aspas-esquerda.png',
          text: 'Muito satisfeito com o produto.',
          imageRight: './assets/images/aspas-direita.png', 
          author: 'Kelson O. Damasceno',
        },
        {
            id: '3',
            imageLeft: './assets/images/aspas-esquerda.png',
            text: 'Sou cliente N1 dessa magnífica loja. Simplesmente a melhor!!',
            imageRight: './assets/images/aspas-direita.png', 
            author: 'Pedro Carvalho',
          },


      ];
    
    const data = [
        { id: '1', image: './assets/images/mulhercolar.jpg'},
        { id: '2', image: './assets/images/joiasmulher.jpg'},
        { id: '3', image: './assets/images/joiareparação.jpg'},
        { id: '4', image: './assets/images/joiapet2.jpg'},
        
    ]

    useEffect(() => {
        if(!storage('cliente-logado')) {
            nav('/')
        }
    }, [])
    

    return(
        <div className='pagina-home'>
            <Cabecalho />

            <div className='ph-secao-01'>
                <div className='ph-s1-categorias'>
                    <Link to='/aliancas'>ALIANÇAS</Link>
                    <Link to='/aneis'>ANÉIS</Link>   
                    <Link to='/brincos'>BRINCOS</Link>
                    <Link to='/correntes'>CORRENTES</Link>
                    <Link to='/namorados'>NAMORADOS</Link>
                    <Link to='/pet'>PET</Link>
                </div>
                
                <Swiper
                    slidesPerView={slidePerview}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        disabledClass: 'swiper-button-disabled',
                        prevElStyle: { color: 'green' }, 
                        nextElStyle: { color: 'green' }, 
                      }}
                    autoplay= {{
                        delay:2500
                    }}
                   
                   
                >
                    {data.map( (item) =>(
                        <SwiperSlide key={item.id}>
                            <img
                                src={item.image}
                                alt="Slider"
                                className="slide-item"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className='s1-categorias2'>
                    <div>
                        <hr className='categorias2-linha'></hr>
                        <h2>CATEGORIAS</h2>
                        <hr className='categorias2-linha'></hr>
                    </div>

                    <div className='ct2-produtos'>
                        <div>
                            <img src='./assets/images/ct-colar.png'></img>
                            <Link to='./correntes'><h5>COLARES</h5></Link>
                        </div>

                        <div className='ct2p'>
                            <img src='./assets/images/ct-brinco.png'></img>
                            <Link to='./brincos'><h5>BRINCOS</h5></Link>
                        </div>

                        <div>
                            <img src='./assets/images/ct-pet.png'></img>
                            <Link to='./pet'><h5>PET</h5></Link>
                        </div>

                        <div className='ct2p'>
                            <img src='./assets/images/ct-casamento.png'></img>
                            <Link to='/aliancas'><h5>CASAMENTO</h5></Link>
                        </div>

                    </div>
                </div>

                <hr className='linha-s2'></hr>
            </div>

            <div className='ph-secao-02'>
                <h1><b>NOVIDADES </b>PARA VOCÊ</h1>

                <div className='nv-s2-produtos'>
                    <div>
                        <img src='./assets/images/nv-vagalume.png'></img>
                        <h5>Colar Vagalume Evangeline Prata</h5>
                        <h5>de R$ 259,00</h5>
                        <h4>Por R$130,00</h4>
                        <h5>À vista, ou 12x de R$ 14,09</h5>
                    </div>

                    <div>
                        <img src='./assets/images/nv-gargantilha.png'></img>
                        <h5>Gargantilha Infinito prata</h5>
                        <h5>De R$ 880,00</h5>
                        <h4>Por R$710,00</h4>
                        <h5>À vista</h5>
                    </div>

                    <div>
                        <img src='./assets/images/nv-anel.png'></img>
                        <h5>Anel dois aros pave Ouro amarelo com Diamantes</h5>
                        <h5>Por R$ 6.760,00  ou</h5>
                        <h4>10x de R$ 676,00</h4>
                    </div>
                </div>

                <div className='ph-s2-qualidades'>
                    <div>
                        <img src='./assets/images/qualidade-joia.png'></img>
                        <h4>Joalheria artesanal e tecnológica. Confecções personalizadas.</h4>
                    </div>

                    <div>
                        <img src='./assets/images/qualidade-diamante.png'></img>
                        <h4>Produtos rigorosamente selecionados por especialistas.</h4>
                    </div>

                    <div>
                        <div className='frete-gratis'>
                            <img src='./assets/images/qualidade-frete.png'></img>
                            <h2>FRETE GRÁTIS</h2>
                        </div>
                        <h4>Em compras a partir de R$400 ou com o código do vendedor*</h4>
                    </div>
                </div>
            </div>

            <div className='ph-secao-03'>
                <h2>E quem comprou o que achou?</h2>

                <div className='s3-central-avaliacoes'>
                    <div className='s3ca-titulo'>
                        <hr></hr>
                    </div>

                    <div className='container'>
                            <Swiper
                                className='carrossel' 
                                spaceBetween={10}
                                slidesPerView={1}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                autoplay= {{
                                    delay: 3000
                                }}

                                >
                                {reviews.map((review) => (
                                    <SwiperSlide className='slide-carrossel' key={review.id}>
                                        <div className='ca-avaliacoes'>
                                            <div>
                                                <img src={review.imageLeft} alt="Aspas esquerda"></img>
                                                <h4>{review.text}</h4>
                                                <img src={review.imageRight} alt="Aspas direita"></img>
                                            </div>

                                            <div><h3>{review.author}</h3></div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <hr></hr>
                    </div>   
                </div>
            </div>

            <Rodape />
        </div>
    )
}

export default LandingPage