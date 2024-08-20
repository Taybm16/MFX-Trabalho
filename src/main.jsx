
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home'
import "./main.css"
import AddConteudos from './pages/AddConteudos/AddConteudos'
import AddConteudosCriador from './pages/AddConteudosCriador/AddConteudosCriador'
import Carrinho from './pages/Carrinho/Carrinho'
import Clientes from './pages/Clientes/Clientes'
import ConteudosPostados from './pages/ConteudosPostados/ConteudosPostados'
import ConteudosPostadosCriador from './pages/ConteudosPostadosCriador/ConteudosPostadosCriador'
import EsqueceMinhaSenha from './pages/EsqueciMinhaSenha/EsqueciMinhaSenha'
import HomeAdmin from './pages/HomeAdmin/HomeAdmin'
import HomeCriadorDeConteudo from './pages/HomeCriadorDeConteudos/HomeCriadorDeConteudos'
import LoginPage from './pages/LoginPage/LoginPage'
import MeusPedidos from './pages/MeusPedidos/MeusPedidos'
import Pedidos from './pages/Pedidos/Pedidos'
import Perfil from './pages/Perfil/Perfil'
import PerfilAdm from './pages/PerfilAdm/PerfilAdm'
import ProdutoresDeConteudoRelatorio from './pages/ProdutoresDeConteudoRelatorio/ProdutoresDeConteudoRelatorio'
import Registro from './pages/Registro/Registro'
import{BrowserRouter, Route, Routes} from "react-router-dom"
import Livraria from './pages/Livraria/Livraria'
import Favoritos from './pages/Favoritos/Favoritos'
import Ebooks from './pages/Ebooks/Ebooks'
import Portfolios from './pages/Portfolios/Portfolios'
import PedidosAdmin from './pages/PedidosAdmin/PedidosAdmin'
import CentralProdutoresDeConteudo from './pages/CentralProdutoresDeConteudo/CentralProdutoresDeConteudo'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/AddConteudos" element={<AddConteudos/>}/>
        <Route path="/AddConteudosCriador" element={<AddConteudosCriador/>}/>
        <Route path="/Carrinho" element={<Carrinho/>}/>
        <Route path="/Clientes" element={<Clientes/>}/>
        <Route path="/ConteudosPostados" element={<ConteudosPostados/>}/>
        <Route path="/ConteudosPostadosCriador" element={<ConteudosPostadosCriador/>}/>
        <Route path="/EsqueceMinhaSenha" element={<EsqueceMinhaSenha/>}/>
        <Route path="/HomeAdmin" element={<HomeAdmin/>}/>
        <Route path="/HomeCriadorDeConteudo" element={<HomeCriadorDeConteudo/>}/>
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="/MeusPedidos" element={<MeusPedidos/>}/>
        <Route path="/Pedidos" element={<Pedidos/>}/>
        <Route path="/Perfil" element={<Perfil/>}/>
        <Route path="/PerfilAdm" element={<PerfilAdm/>}/>
        <Route path="/ProdutoresDeConteudoRelatorio" element={<ProdutoresDeConteudoRelatorio/>}/>
        <Route path="/Registro" element={<Registro/>}/>
        <Route path="/Livraria" element={<Livraria/>}/>
        <Route path="/Favoritos" element={<Favoritos/>}/>
        <Route path="/Ebooks" element={<Ebooks/>}/>
        <Route path="/Portfolios" element={<Portfolios/>}/>
        <Route path='/AcompanhamentoPedidos' element={<PedidosAdmin/>}/>
        <Route path='/CentralProdutoresDeConteudo' element={<CentralProdutoresDeConteudo/>}/>
        
      </Routes>
    </BrowserRouter>
  </>
)

