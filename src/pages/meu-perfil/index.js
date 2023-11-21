import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';
import './index.scss'


function MeuPerfil() {

    const[imagem, setImagem] = useState('');

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

      function escolherimagem() {
        document.getElementById('img-produto').click();
      }
    
    
      function mostrarimg(){
        return URL.createObjectURL(imagem)
      }


    return(
        <div className='pagina-meu-perfil'>
            <div className='mp-cabecalho'>
                <Cabecalho />
                <hr className='barra01'></hr>
            </div>

            <div className='mp-links'>
                <div className='mp-links-usuario'>
                    <h1 style={{color: '#464646'}}>Olá,</h1>
                    <h1 style={{color: '#000'}}>CLIENTE</h1>
                </div>

                <div id='pedidos-promocoes'>
                    <div>
                        <Link>Seus Pedidos</Link>
                        <Link>Produtos</Link>
                    </div>

                <div id='pedidos-promocoes'>
                   <div>
                        <Link to='/carrinho'>Carrinho</Link>
                        <Link>Sua Wishlist</Link>
                   </div>
                </div>

                </div>
            </div>

            <hr className='barra02' style={{backgroundColor: '#D9D9D9'}}></hr>

            <main>
                <h3>Informações da Conta</h3>

                <div className='informacoes-perfil'>
                    <div className='ic-esquerda'>
                        <div>
                            <h6>NOME</h6>
                            <input></input>
                        </div>

                        <div>
                            <h6>SOBRENOME</h6>
                            <input></input>
                        </div>

                        <div>
                            <h6>EMAIL</h6>
                            <input></input>
                        </div>

                        <div>
                            <input type='text' placeholder='CONFIRME SEU EMAIL'></input>
                        </div>

                        <input type='checked'></input> &nbsp; Receber Notificações

                        <button onClick={EnviarImagem}>Salvar</button>
                    </div>

                    <hr></hr>

                    <div className='ic-direita'>
                        <div onClick={escolherimagem} className='mp-inserir-imagem'>
                            <div className='mp-colocar-imagem'>
                                {!imagem && 
                                    <img src='./assets/images/imagem-perfil.png'></img>}
                                
                                {imagem && 
                                    <img className='imagem-selecionada' src={mostrarimg()} alt=''/>}

                                <input id='img-produto' type='file' placeholder='Selecionar Imagem' onChange={e => setImagem(e.target.files[0])}></input>
                            </div>
                            
                            <h3>Selecionar Imagem</h3>
                            <h5>Tamanho do arquivo: no máximo 1 MB Extensão de arquivo: .JPEG, .PNG</h5>
                        </div>
                    </div>
                </div>
            </main>

            <hr style={{backgroundColor: '#D9D9D9'}}></hr>

            
            <Rodape />
        </div>
    )
}


export default MeuPerfil