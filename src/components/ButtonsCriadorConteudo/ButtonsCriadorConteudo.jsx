import './ButtonsCriadorConteudo.css'
import { Link } from 'react-router-dom';
import NerdHouse from "../../assets/Images/Nerd-house-logo.png"

function ButtonsCriador(){

    return(
        <div className='ButtonsCriadorPai'>
            <div className='ButtonsCriadorFilho1'>
                <img src={NerdHouse} alt="" height={350} />
            </div>

            <div className='ButtonsCriadorFilho2'>
                
            <Link to={"/CentralProdutoresDeConteudo"}><button> Conteúdos postados</button></Link>
            <Link to={"/AddConteudosCriador"}><button> Publicar novo conteúdo</button></Link> 
            <Link to={"/Perfil"}><button> Informações do Perfil</button></Link>
            <Link to={"/"}><button> Home </button></Link> 
            <Link to={""}><button> Excluir Perfil</button></Link>

            </div>

        </div>

            
       
        
        
    )
}
export default ButtonsCriador;