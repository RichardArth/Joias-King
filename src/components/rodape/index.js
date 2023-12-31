import { Link } from 'react-router-dom';
import './index.scss';

function Rodape() {
    return(
        <div className='rodape'>
            <div className='atendimento'>
                <div className='rd-logo'>
                <Link to='/'><img src='./assets/images/logopreta.png'></img></Link>
                </div>

                <div className='contatos'>
                    <h2>ATENDIMENTO</h2>

                    <div className='cntt-telefone'>
                        <img src='./assets/images/telefone.png'></img>
                        <h5>(11) 93342-8095</h5>
                    </div>

                    <div className='cntt-whats'>
                        <img src='./assets/images/whatsapp.png'></img>
                        <h5>(11) 93342-8095</h5>
                    </div>

                    <div className='redes-sociais'>
                        <img src='./assets/images/instagram.png'></img>
                        <img id='tiktok' src='./assets/images/tiktok.png'></img>
                        <img src='./assets/images/facebook.png'></img>
                    </div>
                </div>
            </div>

            <hr></hr>

            <div className='servicos'>
                <h2>SERVIÇOS</h2>

                <nav>
                    <Link to='/central-atendimento'><h5>Central de Atendimento</h5></Link>
                    <Link to='/sobrenos'><h5>Sobre Nós</h5></Link>
                    <Link><h5>Entrega</h5></Link>
                    <Link to='/cadastro'><h5>Cadastro</h5></Link>
                    <Link to='/politica-privacidade'><h5>Política de Privacidade</h5></Link>
                    <Link to='/cuidado-joias'><h5>Cuidado com as suas jóias</h5></Link>
                    <Link to='/trocas-devoluçao'><h5>Trocas e Devoluções</h5></Link>
                </nav>
            </div>

            <hr></hr>

            <div className='minha-conta'>
                <h2>MINHA CONTA</h2>

                <nav>
                    <Link to='/meu-perfil'>Meu Perfil</Link>
                    <Link>Meus Pedidos</Link>
                    <Link>Minha Wishlist</Link>
                </nav>
            </div>
        </div>
    )
}

export default Rodape