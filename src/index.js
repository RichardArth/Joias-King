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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<App />}  />
       <Route path='/cadastro' element={<Cadastro/>} />
       <Route path='/senha' element={<Alterarsenha/>} />
       <Route path='adm' element={<Loginadm/>} />
       <Route path='sobrenos' element={<Sobrenos/>} />
       <Route path='categorias' element={<Categorias/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


