
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home'
import "./main.css"
import AddConteudos from './pages/AddConteudos'
import AddConteudos from './pages/AddDeConteudosCriador'
import Carrinho from './pages/Carrinho'
import Clientes from './pages/Clientes'
import ConteudosPostados from './pages/ConteudosPostados'
import ConteudosPostadosCriador from './pages/ConteudosPostadosCriador'
import EsqueceMinhaSenha from './pages/EsqueciMinhaSenha'
import HomeAdmin from './pages/HomeAdmin'
import HomeCriadorDeConteudo from './pages/HomeCriadorDeConteudo'
import Login from './pages/Login'
import MeusPedidos from './pages/MeusPedidos'
import Pedidos from './pages/Pedidos'
import Perfil from './pages/Perfil'
import PerfilAdm from './pages/PerfilAdm'
import ProdutoresDeConteudoRelatorio from './pages/ProdutoresDeConteudoRelatorio'
import Registro from './pages/Registro'




ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/" element={<AddConteudos/>}/>
        <Route path="/" element={<AddConteudosCriador/>}/>
        <Route path="/" element={<Carrinho/>}/>
        <Route path="/" element={<Clientes/>}/>
        <Route path="/" element={<ConteudosPostados/>}/>
        <Route path="/" element={<ConteudosPostadosCriador/>}/>
        <Route path="/" element={<EsqueceMinhaSenha/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<HomeAdmin/>}/>
        <Route path="/" element={<HomeCriadorDeConteudo/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/" element={<MeusPedidos/>}/>
        <Route path="/" element={<Pedidos/>}/>
        <Route path="/" element={<Perfil/>}/>
        <Route path="/" element={<PerfilAdm/>}/>
        <Route path="/" element={<ProdutoresDeConteudoRelatorio/>}/>
        <Route path="/" element={<Registro/>}/>

        
      </Routes>
    </BrowserRouter>
  </>
)

