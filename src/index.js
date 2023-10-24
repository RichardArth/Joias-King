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
       <Route path='/cadastro' element={<Cadastro/>} />
       <Route path='/senha' element={<Alterarsenha/>} />
       <Route path='/adm-login' element={<Loginadm/>} />
       <Route path='/sobrenos' element={<Sobrenos/>} />
       <Route path='/categorias' element={<Categorias/>} />
       <Route path='/cd-produto' element={<CadastroProduto />} />
       <Route path='/cuidado-joias' element={<CuidadoJoias />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


