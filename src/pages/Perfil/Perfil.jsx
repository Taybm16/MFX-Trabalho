//Perfil cliente / produtor de conteudo
import PerfilComponente from "../../components/Perfil/PerfilComponente";
import "./Perfil.css"
import Navbar from "../../components/Navbar/Navbar";
function Perfil(){
    
    return(
       <div className="perfilPage">
       <Navbar/>
       <PerfilComponente/>
       </div> 
    )
}



export default Perfil;