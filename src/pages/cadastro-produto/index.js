import CabecalhoAdm from '../../components/cabecalhoadm/index.js';
import './index.scss';
import { useState } from 'react';
import { API_URL } from '../../constants.js';
import axios from 'axios';
import storage from 'local-storage';
import storage from 'local-storage';
import { toast } from 'react-toastify';
import storage from 'local-storage';


function CadastroProduto() {
  
  const[id, setID] = useState(0);
  const[nomeproduto, setNomeProduto] = useState('');
  const[preco, setPreco] = useState('');
  const[tipo, setTipo] = useState('')
  const[detalhes, setDetalhes] = useState('');
  const[estoque, setEstoque] = useState(0);
  const[imagem, setImagem] = useState();
  const[codigo, setCodigo] = useState('');
  const[erro, setErro] = useState('');


  function escolherimagem() {
    document.getElementById('img-produto').click();
  }


  function mostrarimg(){
    return URL.createObjectURL(imagem)
  }


  async function CadastrarProduto() {
    try {
      const usuario = storage('usuario-logado').id;

      if(id === 0){
      const produto = await axios.post(API_URL + '/produto', {
        nome: nomeproduto,
        tipo:tipo,
        detalhes:detalhes,
        estoque:estoque,
        codigo:codigo
      })
      
      const r = await EnviarImagem(produto.id, imagem);
      toast.success('👍 Produto cadastrado com sucesso!')
      setID(produto.id);
    }
    
    else {
      const produto = await axios.put(API_URL + `/produto/${id}`, {
        id: id,
        nome: nomeproduto,
        tipo:tipo,
        detalhes:detalhes,
        estoque:estoque,
        codigo:codigo
      })

      const r = await EnviarImagem(id, imagem);
      toast.success('👍 Produto Cadastrado com sucesso!')
      return r.data
    }

    }

    catch (err) {
      if(err.response.status === 400){
        setErro(err.response.data.erro)
      }
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

  async function EditarProduto() {
    try {
      const usuario = storage('usuario-logado').id;

      const produto = await axios.put(API_URL + `/produto/${id}`, {
        id: id,
        nome: nomeproduto,
        tipo:tipo,
        detalhes:detalhes,
        estoque:estoque,
        codigo:codigo
      })

      const r = await EnviarImagem(produto.id, imagem);

      toast.success('👍 Produto alterado com sucesso!')
      return r.data
    }
    catch(err) {
        toast.error(setErro(err.response.data.erro))
    }
  }

  function NovoProduto() {
    setID(0);
    setNomeProduto('')
    setTipo('')
    setPreco('')
    setCodigo('')
    setDetalhes('')
    setImagem()
    setEstoque('')
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
            <input type='text' value={nomeproduto} onChange={e => setNomeProduto(e.target.value)} required></input>
          </div>

          <div>
            <h5>CATEGORIA</h5>
            <select value={tipo} onChange={e => setTipo(e.target.value)} required >
              <option value=''>Coloque a categoria</option>
              <option value='1'>Aliança</option>
              <option value='2'>Pet</option>
              <option value='3'>Colar/Corrente</option>
              <option value='4'>Anel</option>
              <option value='5'>Brinco</option>
              <option value='6'>Namorados</option>
            </select>
          </div>

          <div>
            <h5>PRECO (R$)</h5>
            <input type='text' value={preco} onChange={e => setPreco(e.target.value)} required></input>
          </div>

          <div>
            <h5>DETALHES</h5>
            <textarea type='text' value={detalhes} onChange={e => setDetalhes(e.target.value)} required></textarea>
          </div>

          <div>
            <h5>ESTOQUE (QTD)</h5>
            <input type='number' value={estoque} onChange={e => setEstoque(Number(e.target.value))}required></input>
          </div>

          <div>
            <h5>CÓDIGO DO PRODUTO</h5>
            <input type='text' value={codigo} onChange={e => setCodigo(e.target.value)} required></input>
          </div>
        </div>
          
          <div className='pc-colocar-imagem'>
            <div className='escolher-imagem' onClick={escolherimagem} >

              {!imagem && 
                  <img style={{width: 80}} src='./assets/images/upload.png'></img>}
              
              {imagem && 
                <img className='imagem-selecionada' src={mostrarimg()} alt=''/>}

                <input type='file' id='img-produto' onChange={e => setImagem(e.target.files[0])} required />
            </div>

            <h5>Adicionar Imagem</h5>
            <h6>Apenas 1 imagem</h6>
          </div>
      </main>

      <div className="pc-salvar-produto">
        <button onClick={CadastrarProduto}>{id === 0 ? 'SALVAR PRODUTO' : 'ALTERAR'}</button> &nbsp; &nbsp;
        <button onClick={NovoProduto}>NOVO</button>
      </div>
    </div>
  );
}

export default CadastroProduto;