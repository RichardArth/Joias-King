import './index.scss';
import CabecalhoAdm from '../../components/cabecalhoadm';
import MenuAdm from '../../components/menu-adm';
import InforProduto from '../../components/info-produto';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { BuscarID } from '../../api/produto'
import { useState } from 'react';


function DetalhesProduto() {
    const[produto, setProduto]= useState({});

    const { IDParam } = useParams();

    useEffect(() => {
        GetProduto();
    }, [])

    async function GetProduto() {
        const r = await BuscarID(IDParam)
        setProduto(r)
    }

    return(
        
        <div className='pagina-detalhes'>
            <MenuAdm />

            <div className='parte-principal'>
                <CabecalhoAdm/>

                <div>
                    <InforProduto produto={produto}/>
                </div>
            </div>
        </div>
    )
}

export default DetalhesProduto