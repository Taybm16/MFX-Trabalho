
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home'
import "./main.css"
import AddConteudos from './pages/AddConteudos/AddConteudos'

import Carrinho from './pages/Carrinho/Carrinho'
import Clientes from './pages/Clientes/Clientes'
import ConteudosPostados from './pages/ConteudosPostados/ConteudosPostados'

import EsqueciMinhaSenha from './pages/EsqueciMinhaSenha/EsqueciMinhaSenha'
import HomeAdmin from './pages/HomeAdmin/HomeAdmin'
import HomeCliente from './pages/HomeCliente/HomeCliente'
import LoginPage from './pages/LoginPage/LoginPage'
import MeusPedidos from './pages/MeusPedidos/MeusPedidos'

import Perfil from './pages/Perfil/Perfil'
import PerfilAdm from './pages/PerfilAdm/PerfilAdm'

import Registro from './pages/Registro/Registro'
import{BrowserRouter, Route, Routes} from "react-router-dom"
import Livraria from './pages/Livraria/Livraria'

import Ebooks from './pages/Ebooks/Ebooks'
import PedidosAdmin from './pages/PedidosAdmin/PedidosAdmin'



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/AddConteudos" element={<AddConteudos/>}/>
        
        <Route path="/Carrinho" element={<Carrinho/>}/>
        <Route path="/Clientes" element={<Clientes/>}/>
        <Route path="/ConteudosPostados" element={<ConteudosPostados/>}/>
        
        <Route path="/EsqueciMinhaSenha" element={<EsqueciMinhaSenha/>}/>
        <Route path="/HomeAdmin" element={<HomeAdmin/>}/>
        <Route path="/HomeCliente" element={<HomeCliente/>}/>
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="/MeusPedidos" element={<MeusPedidos/>}/>
        
        <Route path="/Perfil" element={<Perfil/>}/>
        <Route path="/PerfilAdm" element={<PerfilAdm/>}/>
        
        <Route path="/Registro" element={<Registro/>}/>
        <Route path="/Livraria" element={<Livraria/>}/>
        
        <Route path="/Ebooks" element={<Ebooks/>}/>
        
        <Route path='/AcompanhamentoPedidos' element={<PedidosAdmin/>}/>
        
        
      </Routes>
    </BrowserRouter>
  </>
)

