import './index.scss';

function Index() {
    return(
        <div className='categorias'>
            
            <div className='categorias-01'>
            <hr></hr>
            <h1>PROCURE POR CATEGORIAS</h1>
            <hr></hr>
            </div>
            

            <div className='categorias-02'>
               <a>ALIANÇAS</a>

               <a>ANÉIS</a>

               <a>BRINCOS</a>

               <a>CORRENTES</a>

               <a>NAMORADOS</a>

               <a>PET</a>
            </div>

            <div className='categorias-03'>
                <h2>LANÇAMENTO IMPERDÍVEL</h2>

                <img src='./assets/images/image 31.png'/>

                <p>LANÇAMENTO PARA OS MAIS ROMANTICOS,
                   PROMOÇÕES IMPERDÍVEIS!</p>
            </div>

            <div className='categorias-04'>
                <div className='categorias-cima'>
                    <img src='./assets/images/image 32.png'/>

                    <div className='categorias-cima-01'> 
                    <h4>Alianças Louveira + Anel solitário Olimpo
                       Namoro e Compromisso em Prata 0,950</h4>

                    <p>40% OFF!!</p>
                    </div>
                </div>
                <div className='categorias-baixo'>
                <img src='./assets/images/image 33.png'/>

                <div className='categorias-baixo-01'>
                    
                <h4>Colares Casal Controle Gradiente</h4>

                <p>30% OFF!!</p>

                <p>PRODUTO LIMITADO ! !</p>

                </div>
                </div>
            </div>
        </div>
    );
}

export default Index