import './index.scss';
import Cabecalho from '../../components/cabecalho';
import { Link, useParams } from 'react-router-dom';
import Rodape from '../../components/rodape';
import { BuscarID } from '../../api/produto';
import { useState } from 'react';
import { useEffect } from 'react';
import CompraProduto from '../../components/compraproduto';




function DescricaoProduto() {

    const { IdParam } = useParams();
    const[produto, setProduto] = useState({})

    useEffect(() => {
        CarregarProduto()
    }, [])

    async function CarregarProduto() {
        const r = await BuscarID(IdParam);
        setProduto(r)
    }

    return(
        <div className='pagina-descricao-produto'>
            <Cabecalho />
                <div className='pdp-categorias'>
                    <hr></hr>
                    <div>
                        <Link to='/aliancas'>ALIANÇAS</Link>
                        <Link to='/aneis'>ANÉIS</Link>
                        <Link to='/brincos'>BRINCOS</Link>
                        <Link to='/colares'>CORRENTES</Link>
                        <Link to='/namorados'>NAMORADOS</Link>
                        <Link to='/pet'>PET</Link>
                    </div>
                </div>

                <CompraProduto produto={produto}/>

                <Rodape />
        </div>
    )
}

export default DescricaoProduto