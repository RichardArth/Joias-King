import CabecalhoAdm from '../../components/cabecalhoadm/index.js';
import './index.scss';
import { toast } from 'react-toastify';
import { BuscarID, CadastrarProduto, EnviarImagem, BuscarImagem, AlterarProduto } from '../../api/produto';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import storage from 'local-storage';


function CadastroProduto() {
  
  const[id, setID] = useState(0);
  const[nome, setNome] = useState('');
  const[preco, setPreco] = useState('');
  const[tipo, setTipo] = useState('')
  const[detalhes, setDetalhes] = useState('');
  const[estoque, setEstoque] = useState(0);
  const[tamanho, setTamanho] = useState(0)
  const[imagem, setImagem] = useState();
  const[codigo, setCodigo] = useState('');
  
  const { idParam } = useParams();

  useEffect(() => {
    if(idParam){
      CarregarProduto();
    }
  }, [])

  const nav = useNavigate();

  useEffect(() => {
    if(!storage('adm-login')) {
        nav('/adm-login')
    }
}, [])

  async function CarregarProduto() {
    const r = await BuscarID(idParam);
    setNome(r.nome)
    setPreco(r.preco)
    setTipo(r.tipo)
    setDetalhes(r.detalhes)
    setEstoque(r.estoque)
    setTamanho(r.tamanho)
    setImagem(r.imagem)
    setID(r.id)
  }


  function escolherimagem() {
    document.getElementById('img-produto').click();
  }


  function mostrarimg(){
    if(typeof (imagem) == 'object'){
      return URL.createObjectURL(imagem)
    }

    else {
      return BuscarImagem(imagem)
    }
  }


  async function SalvarProduto() {
    try {
      if(!imagem) {
        throw new Error('Escolha a imagem do produto!');
      }

      const usuario = storage('adm-login').id;

      if(id === 0) {
        const novoproduto = await CadastrarProduto(nome, preco, tipo, detalhes, estoque, tamanho, codigo)
        await EnviarImagem(novoproduto, imagem);
        setID(novoproduto.id)

        toast.success('Produto cadastrado com sucesso!')
      }

      else {
        await AlterarProduto(id, nome, preco, tipo, detalhes, estoque, tamanho, codigo,);

        if(typeof (imagem) == 'object')
          await EnviarImagem(id, imagem);
        toast.success('Produto alterado com sucesso!')
      }
    }  catch(err) {
      if(err.response) {
        toast.error(err.response.data.erro)
      }

      else {
        toast.error(err.message)
      }
    }
  }

  function NovoProduto() {
    setID(0);
    setNome('')
    setTipo('')
    setPreco('')
    setCodigo('')
    setDetalhes('')
    setTamanho('')
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
            <input type='text' value={nome} onChange={e => setNome(e.target.value)} required></input>
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
            <h5>TAMANHO</h5>
            <input type='number' value={tamanho} onChange={e => setTamanho(Number(e.target.value))} required /> 
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
        <button onClick={SalvarProduto}>{id === 0 ? 'SALVAR PRODUTO' : 'ALTERAR'}</button> &nbsp; &nbsp;
        <button onClick={NovoProduto}>NOVO</button>
      </div>
    </div>
  );
}

export default CadastroProduto;