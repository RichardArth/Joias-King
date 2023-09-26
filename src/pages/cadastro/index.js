import './index.scss';

function Index(){
return(
    <div className='index'>
        <section className='cadastro01'>
        <div className='cabecalho-cadastro'>
          <img src='./assets/images/logopreta.png'/>
        </div>
        
        <div className='cadastro-0'>
          <div className='cadastro-s1'>
          <h2>FAÇA SEU CADASTRO</h2>
          <img src='./assets/images/usuario.png'/>
          </div>
          <div className='cadastro-s2'>
            <h4>EMAIL</h4>
            <input type="text" placeholder="digite seu e-mail"/>

            <h4>SENHA</h4>
            <input type="text" placeholder="digite sua senha"/>

            <h4>TELEFONE</h4>
            <input type="text" placeholder="digite seu telefone"/>

            <h4>NOME</h4>
            <input type="text" placeholder="Digite seu nome"/>

            <h4>SOBRENOME</h4>
            <input type="text" placeholder="Digite seu sobrenome"/>

            <h4>DATA DE NASCIMENTO</h4>
            <input type="text" placeholder="Digite sua data de nascimento"/>

            <h4>CPF</h4>
            <input type="text" placeholder="Digite seu CPF"/>

           

          </div>
          <button className='jump-button'>ENTRAR</button>
        </div>

            

        </section>
    </div>
);
}

export default Index;