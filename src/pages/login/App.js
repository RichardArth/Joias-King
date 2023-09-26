
import './App.scss';

function App() {
  return (
    <div className="App">

      <section className='login01'>
        <div className='cabecalho-login'>
          <img src='./assets/images/image 26.png'/>
        </div>
        <div className='login'>
          <div className='login-s1'>
          <h2>FAÇA SEU LOGIN</h2>
          <img src='./assets/images/image 27.png'/>
          </div>
          <div className='login-s2'>
            <h4>EMAIL</h4>
            <input type="text" placeholder="digite seu e-mail"/>

            <h4>SENHA</h4>
            <input type="text" placeholder="digite sua senha"/>

            <button className='bt-log'>LOGIN</button>

            <h4 className='s3-login'>OU</h4>

          <button> <img src='./assets/images/face.png'/> Continue com Facebook</button>
          <button> <img src='./assets/images/image 39.png'/> Continue com Google </button>

            <a href='/senha'>Esqueci minha senha</a>
            <a href='/cadastro'>Ainda não sou cliente</a>

          </div>
        </div>
      </section>

    </div>
  );
}

export default App;