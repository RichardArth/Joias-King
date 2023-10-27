import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
  

function Aliancas() {
    return(
        <div className='pagina-alianca'>
            <Cabecalho />

            <div className='produto-ficha-s1'>
                    <div className='ficha-produto'>
                        <img src='./assets/images/nv-anel.png'></img>
                        <h5>Anel dois aros pave Ouro amarelo com Diamantes</h5>
                        <h5>Por R$ 6.760,00  ou</h5>
                        <h4>10x de R$ 676,00</h4>
                    </div>
                    </div>
           
            <Rodape />
        </div>
    )
}

export default Aliancas;