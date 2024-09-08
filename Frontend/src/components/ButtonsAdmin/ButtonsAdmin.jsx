
import NerdHouse from "../../assets/Images/Nerd-house-logo.png"
import { Link } from 'react-router-dom';
import './ButtonsAdmin.css'

function ButtonsAdmin(){

    return(
        <div className='ButtonsAdminPai'>
        
            <div className='ButtonsAdminImage'>
            <img src={NerdHouse} alt="" height={350} />
            </div>
            
            <div className = "ButtonsFilhos">
                
                    <Link to={"/"}><button> Home </button></Link>
                    <Link to={"/AcompanhamentoPedidos"}><button> Acompanhamento de Pedidos</button></Link>
                    <Link to={"/AddConteudos"}><button> Cadastro de Produto</button></Link>
                    <Link to={"/Clientes"}><button> Central de Clientes</button></Link>
                    <Link to={"/PerfilAdm"}><button> Informação da Loja</button></Link>
                    
                
            </div>
        
        </div>
        
    )
}
export default ButtonsAdmin;
