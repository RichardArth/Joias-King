import './index.scss';

function CabecalhoAdm() {

    
    return(
        <section className='cabecalho-adm'>
            <header>

                <div className='cba-esquerda'>

                </div>

                <div className='cba-meio'>
                    <img src='./assets/images/logobranca.png'></img>
                </div>

                <div className='cba-direita'>
                    <img src='./assets/images/usuario.png'></img>
                </div>

            </header>

            <hr className='cba-linha'></hr>
        </section>
    )
}

export default CabecalhoAdm