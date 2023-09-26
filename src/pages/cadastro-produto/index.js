import CabecalhoAdm from '../../components/cabecalhoadm/index.js';
import './index.scss';
import { useState } from 'react';

function CadastroProduto() {

  const[nomeproduto, setNomeProduto] = useState('');
  const[preco, setPreco] = useState('');
  const[materiais, setMateriais] = useState('');
  const[estoque, setEstoque] = useState(0);
  const[imagem, setImagem] = useState('');
  const[categoria, setCategoria] = useState('');
  const[codigo, setCodigo] = useState('');

  return (
    <div className="pagina-cadastro-produto">
      <div className='cabecalho'>
        <CabecalhoAdm />
      </div>

      <div className='titulo'>
        <h1>ADICIONAR PRODUTO</h1>
      </div>

      <main>
        <div className='valores'>
          <div>
            <h5>NOME DO PRODUTO</h5>-
            <input type='text' value={nomeproduto} onChange={e => setNomeProduto(e.target.value)}></input>
          </div>

          <div>
            <h5>CATEGORIA</h5>
            <select>
              <option>Coloque a categoria</option>
              <option>Aliança</option>
              <option>Pet</option>
              <option>Colar</option>
              <option>Anel</option>
              <option>Brinco</option>
            </select>
          </div>

          <div>
            <h5>PRECO (R$)</h5>
            <input type='text' value={preco} onChange={e => setPreco(e.target.value)}></input>
          </div>

          <div>
            <h5>MATERIAIS</h5>
            <input type='text' value={materiais} onChange={e => setMateriais(e.target.value)}></input>
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

        <div className='imagem'>
          <div>
            <h1>+</h1>
          </div>

          <h5>Adicionar Imagens</h5>
          <h6>Até 3 imagens</h6>
        </div>
      </main>

      <div className="salvar-produto">
      <button>SALVAR PRODUTO</button>
      </div>

    </div>
  );
}

export default CadastroProduto;