import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';


import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './pages/login/App';
import Cadastro from './pages/cadastro/index';
import Alterarsenha from './pages/alterar senha/index';
import Loginadm from './pages/loginadm/index'; 
import Sobrenos from './pages/sobrenos/index';
import Categorias from './pages/categorias/index';
import CadastroProduto from './pages/cadastro-produto';
import CuidadoJoias from './pages/cuidado com as joias';
import LandingPage from './pages/landind page';
import LandingAdm from './pages/home-adm';
import Carrinho from './pages/carrinho';
import Avaliacoes from './pages/central-avaliacoes';
import Aliancas from './pages/aliancas';
import Aneis from './pages/aneis';
import Brincos from './pages/brincos';
import Correntes from './pages/correntes';
import Namorados from './pages/namorados';
import Pet from './pages/pet';
import Produtos from './pages/produtos';
import Privacidade from './pages/privacidade';
import Centralatendimento from './pages/central-atendimento';
import Trocas from './pages/trocas-devoluçoes';
import Grafico from './pages/graficos';

import { register } from 'swiper/element/bundle'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

register();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<LandingPage />} />
       <Route path='/login' element={<App />}  />
       <Route path='/cadastro' element={<Cadastro />} />
       <Route path='/AlterarSenha' element={<Alterarsenha />} />
       <Route path='/adm-login' element={<Loginadm />} />
       <Route path='/sobrenos' element={<Sobrenos />} />
       <Route path='/categorias' element={<Categorias />} />
       <Route path='/cd-produto' element={<CadastroProduto />} />
       <Route path='/cuidado-joias' element={<CuidadoJoias />} />
       <Route path='/home-adm'element={<LandingAdm />} />
       <Route path='/carrinho' element={<Carrinho />} />
       <Route path='/central-avaliaçoes' element={<Avaliacoes />} />
       <Route path='/aliancas' element={<Aliancas />}/>
       <Route path='/aneis' element={<Aneis />}/>
       <Route path='/brincos' element={<Brincos />}/>
       <Route path='/correntes' element={<Correntes />}/>
       <Route path='/namorados' element={<Namorados />}/>
       <Route path='/pet' element={<Pet />}/>
       <Route path='/produtos' element={<Produtos />}/>
       <Route path='/politica-privacidade' element={<Privacidade />} />
       <Route path='/central-atendimento' element={<Centralatendimento />} />
       <Route path='/trocas-devoluçao' element={<Trocas />} />
       <Route path='/graficos' element={<Grafico />} />
       </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


