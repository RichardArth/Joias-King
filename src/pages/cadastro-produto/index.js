import CabecalhoAdm from '../../components/cabecalhoadm/index.js';
import './index.scss';
import { useState } from 'react';
import { API_URL } from '../../constants.js';
import axios from 'axios';
import { Form } from 'react-router-dom';
import storage from 'local-storage';

import { toast } from 'react-toastify';


function escolherimagem() {
  document.getElementById('img-produto').click();
}

function mostrarimg(){

}

function CadastroProduto() {

  const[nomeproduto, setNomeProduto] = useState('');
  const[preco, setPreco] = useState('');
  const[tipo, setTipo] = useState('')
  const[detalhes, setDetalhes] = useState('');
  const[estoque, setEstoque] = useState(0);
  const[imagem, setImagem] = useState('');
  const[codigo, setCodigo] = useState('');
  const[disponivel, setDisponivel] = useState(false)

  async function CadastrarProduto() {
    try {
      const usuario = storage('usuario-logado').id;

      const r = await axios.post(API_URL + '/produto', {
        nome: nomeproduto,
        tipo:tipo,
        detalhes:detalhes,
        estoque:estoque,
        codigo:codigo
      })
      toast.dark('👍 Produto Cadastrado com sucesso!')
      return r.data
    }

    catch(err) {
      toast.error(err.response.data.erro)
    }
  }

  async function EnviarImagem(id, imagem) {

    const formData = new FormData();
    formData.append('imagem', imagem);


    const r = await axios.put(API_URL + `/produto/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
    })

    return r.status;
  }

  return (
    <div className="pagina-cadastro-produto">
      <ToastContainer />

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
              <option>Aliança</option>
              <option>Pet</option>
              <option>Colar/Corrente</option>
              <option>Anel</option>
              <option>Brinco</option>
              <option>Namorados</option>
            </select>
          </div>

          <div>
            <h5>PRECO (R$)</h5>
            <input type='text' value={preco} onChange={e => setPreco(e.target.value)}></input>
          </div>

          <div>
            <h5>DETALHES</h5>
            <textarea type='text' value={detalhes} onChange={e => setDetalhes(e.target.value)}></textarea>
          </div>

          <div>
            <h5>ESTOQUE (QTD)</h5>
            <input type='number' value={estoque} onChange={e => setEstoque(Number(e.target.value))}></input>
          </div>

          <div>
            <h5>CÓDIGO DO PRODUTO</h5>
            <input type='text' value={codigo} onChange={e => setCodigo(e.target.value)}></input>
            <h6>DISPONÍVEL</h6>
            <input type='checkbox' checked={disponivel} onChange={e => setDisponivel(e.target.checked)}></input>
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