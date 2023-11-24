import './index.scss';
import Rodape from '../../components/rodape';
import { useEffect, useState } from 'react';
import { BuscarImagem, CarregarProdutos } from '../../api/produto';
import Cabecalho from '../../components/cabecalho';

function Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const produtosData = await CarregarProdutos();
            const produtosComImagens = await Promise.all(
                produtosData.map(async (produto) => ({
                    ...produto,
                    imagem: await BuscarImagem(produto.imagem),
                }))
            );
            setProdutos(produtosComImagens);
            console.log(produtosComImagens)
        }

        fetchData();
    }, []);

    return (
        <div className='pagina-produtos'>
            <Cabecalho />

            <div className='produtos-todos'>
                {produtos.map((produto) => (
                    <div key={produto.id} className='produto-ficha-s1'>
                        <div className='produto-s2'>
                            <img src={produto.imagem} alt={produto.nome} />
                            <h5>{produto.nome}</h5>
                            <h4 style={{ color: '#B88B1B' }}>R${produto.preco}</h4>
                            <h6>Estoque: {produto.estoque}</h6>
                        </div>
                    </div>
                ))}
            </div>

            <Rodape />
        </div>
    );
}

export default Produtos;