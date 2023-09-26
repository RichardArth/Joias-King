import './index.scss';

function Index() {
    return(
        <div className='Index'>
            <section>
        <div className='cabecalho-loginadm'>
          <img src='./assets/images/image 26.png'/>
        </div>
        <div className='loginadm'>
          <div className='loginadm-s1'>
          <h2>BEM-VINDO DE VOLTA ADM</h2>
          <img src='./assets/images/image 27.png'/>
          </div>
          <div className='loginadm-s2'>
            <h4>NOME DE  USUÁRIO</h4>
            <input type="text" placeholder="digite seu nome"/>

            <h4>E-MAIL</h4>
            <input type="text" placeholder="Digite seu e-mail"/>

            <h4>SENHA</h4>
            <input type="text" placeholder="digite sua senha"/>

            <button className='bt-confirmar'>CONFIRMAR</button>

            
          </div>
        </div>
      </section>
        </div>
    );
}

export default Index;