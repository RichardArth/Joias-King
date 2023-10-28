import './index.scss';
import CabecalhoAdm from '../../components/cabecalhoadm';
import Rodape from '../../components/rodape';
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
  

function Produtos() {
    return(
        <div className='pagina-produtos'>
           <CabecalhoAdm/>

            <div className='produtos-s1'>
                    <div className='ficha-produtos'>
                        <img src='./assets/images/ct-pet.png'></img>
                        <h5>Anel dois aros pave Ouro amarelo com Diamantes</h5>
                        <h5>Por R$ 6.760,00  ou</h5>
                        <h4>10x de R$ 676,00</h4>
                    </div>
                    </div>
           
            <Rodape />
        </div>
    )
}

export default Produtos;