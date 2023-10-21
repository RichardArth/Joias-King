import { useState } from 'react';
import './index.scss';
import axios from 'axios';

function Index(){

  const[email, setEmail] = useState('');
  const[senha, setSenha] = useState('');
  const[telefone, setTelefone] = useState('');
  const[nome, setNome] = useState('');
  const[sobrenome, setSobrenome] = useState('');
  const[nascimento, setNascimento] = useState('');
  const[cpf, setCpf] = useState('');

  async function Cadastrar() {
    let cliente = {
      email: email,
      senha: senha,
      telefone: telefone,
      nome: nome,
      sobrenome: sobrenome,
      nascimento: nascimento,
      cpf: cpf
    }

    let url = 'http://localhost:5000/cadastrar';
    let r = await axios.post(url, cliente);
  }


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
            <input type="text" placeholder="digite seu e-mail" value={email} onChange={e => setEmail(e.target.value)}/>

            <h4>SENHA</h4>
            <input type="text" placeholder="digite sua senha" value={senha} onChange={e => setSenha(e.target.value)}/>

            <h4>TELEFONE</h4>
            <input type="text" placeholder="digite seu telefone" value={telefone} onChange={e => setTelefone(e.target.value)}/>

            <h4>NOME</h4>
            <input type="text" placeholder="Digite seu nome" value={nome} onChange={e => setNome(e.target.value)}/>

            <h4>SOBRENOME</h4>
            <input type="text" placeholder="Digite seu sobrenome" value={sobrenome} onChange={e => setSobrenome(e.target.value)}/>

            <h4>DATA DE NASCIMENTO</h4>
            <input type="date" placeholder="Digite sua data de nascimento" value={nascimento} onChange={e => setNascimento(e.target.value)}/>

            <h4>CPF</h4>
            <input type="text" placeholder="Digite seu CPF" value={cpf} onChange={e => setCpf(e.target.value)}/>

           

          </div>
          <button onClick={Cadastrar} className='jump-button'>ENTRAR</button>
        </div>

            

        </section>
    </div>
);
}

export default Index;