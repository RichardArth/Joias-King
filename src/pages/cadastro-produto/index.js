import CabecalhoAdm from '../../components/cabecalhoadm/index.js';
import './index.scss';
import { useState } from 'react';
import { API_URL } from '../../constants.js';
import axios from 'axios';

function escolherimagem() {
  document.getElementById('img-produto').click();
}

function mostrarimg(){

}

function CadastroProduto() {

  const[nomeproduto, setNomeProduto] = useState('');
  
  const tipos = [
    {
      id: '1',
      produto: 'Aliança'
    },

    {
      id: '2',
      produto: 'Anel'
    },

    {
      id: 3,
      produto: 'Colar/Corrente'
    },

    {
      id: '4',
      produto: 'Pet'
    },

    {
      id: '5',
      produto: 'Namorados'
    },

    {
      id: '6',
      produto: 'Brinco'
    }
  ];

  const[preco, setPreco] = useState('');
  const[detalhes, setDetalhes] = useState('');
  const[estoque, setEstoque] = useState(0);
  const[imagem, setImagem] = useState('');
  const[codigo, setCodigo] = useState('');

  async function CadastrarProduto() {
    const produto = {
      nome: nomeproduto,
      tipo: tipos.id,
      preco: preco,
      detalhes: detalhes,
      estoque: estoque,
      codigo: codigo
    }

    let url = API_URL + '/produto'
    let r = await axios.post(url, produto)
  }

  return (
    <div className="pagina-cadastro-produto">
      <div className='pc-cabecalho'>
        <CabecalhoAdm />
      </div>

      <div className='pc-titulo'>
        <h1>ADICIONAR PRODUTO</h1>
      </div>

      <main>
        <div className='pc-valores'>
          <div>
            <h5>NOME DO PRODUTO</h5>
            <input type='text' value={nomeproduto} onChange={e => setNomeProduto(e.target.value)}></input>
          </div>

          <div>
            <h5>CATEGORIA</h5>
            <select>
              <option>Coloque a categoria</option>
              <option id='1'>Aliança</option>
              <option id='4'>Pet</option>
              <option id='3'>Colar/Corrente</option>
              <option id='2'>Anel</option>
              <option id='6'>Brinco</option>
              <option id='5'>Namorados</option>
            </select>
          </div>

          <div>
            <h5>PRECO (R$)</h5>
            <input type='text' value={preco} onChange={e => setPreco(e.target.value)}></input>
          </div>

          <div>
            <h5>DETALHES</h5>
            <input type='text' value={detalhes} onChange={e => setDetalhes(e.target.value)}></input>
          </div>

          <div>
            <h5>ESTOQUE (QTD)</h5>
            <input type='number' value={estoque} onChange={e => setEstoque(Number(e.target.value))}></input>
          </div>

          <div>
            <h5>CÓDIGO DO PRODUTO</h5>
            <input type='text' value={codigo} onChange={e => setCodigo(e.target.value)}></input>
          </div>
        </div>

        <div className='pc-imagem'>
          <div className='img-produto-adm' onClick={escolherimagem}>
            <h1>+</h1>
            <img src={mostrarimg()} alt='' />
            <input type='file' id='img-produto' value={imagem} onChange={e => setImagem(e.target.files[3])}/>
          </div>

          <h5>Adicionar Imagens</h5>
          <h6>Até 3 imagens</h6>
        </div>
      </main>

      <div className="pc-salvar-produto">
      <button onClick={CadastrarProduto}>SALVAR PRODUTO</button>
      </div>
    </div>
  );
}

export default CadastroProduto;