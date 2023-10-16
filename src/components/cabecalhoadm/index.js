import './index.scss';

function CabecalhoAdm() {

    
    return(
        <header className='cabecalho-adm'>
            <div className='cba-cima'>
                <div className='esquerda'></div>

                <div className='cba-meio'>
                    <img src='./assets/images/logobranca.png'></img>
                </div>

                <div className='cba-direita'>
                    <img src='./assets/images/usuario.png'></img>
                </div>
            </div>

            <hr className='cba-linha'></hr>   
        </header>
    )
}

export default CabecalhoAdm