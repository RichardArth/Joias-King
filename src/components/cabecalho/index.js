import './index.scss';


function Cabecalho() {
    return(
        <div className="cabecalho">
                <div className="barra-pesquisa">
                    <div>
                        <input type="text" placeholder="Pesquise sua Jóia"></input>
                        <img src="./assets/images/lupa.png"></img>
                    </div>
                    <hr></hr>
                </div>

                <div className='logo'>
                    <img src="./assets/images/logobranca.png"></img>
                </div>

                <div>
                    <button className='cadastrar'>
                        <img src="./assets/images/usuario.png"></img>
                        <h4>Cadastre-se</h4>
                    </button>

                    <button className='carrinho'><img src="./asstes/images/carrinho.png"></img></button>
                </div>
        </div>
    )
}

export default Cabecalho