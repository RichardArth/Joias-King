import './index.scss';

function Rodape() {
    return(
        <div className='rodape'>
            <div className='atendimento'>
                <div className='rd-logo'>
                    <img src='./assets/images/logopreta.png'></img>
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
                    <h5>Central de Atendimento</h5>
                    <h5>Sobre Nós</h5>
                    <h5>Entrega</h5>
                    <h5>Cadastro</h5>
                    <h5>Política de Privacidade</h5>
                    <h5>Cuidado com as suas jóias</h5>
                    <h5>Trocas e Devoluções</h5>
                </nav>
            </div>

            <hr></hr>

            <div className='minha-conta'>
                <h2>MINHA CONTA</h2>

                <nav>
                    <h5>Meu Perfil</h5>
                    <h5>Meus Pedidos</h5>
                    <h5>Minha Wishlist</h5>
                </nav>
            </div>
        </div>
    )
}

export default Rodape