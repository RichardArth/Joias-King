import './index.scss';

function CabecalhoAdm() {

    
    return(
        <header className='cabecalho'>
            <div className='cima'>
                <div className='esquerda'></div>

                <div className='meio'>
                    <img src='./assets/images/logobranca.png'></img>
                </div>

                <div className='direita'>
                    <img src='./assets/images/usuario.png'></img>
                </div>
            </div>

            <hr className='linha'></hr>   
        </header>
    )
}

export default CabecalhoAdm