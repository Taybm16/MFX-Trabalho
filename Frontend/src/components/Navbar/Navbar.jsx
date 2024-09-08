import "./Navbar.scss"
import NerdHouse from "../../assets/Images/Nerd-house-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faBook,faTabletScreenButton,faAddressBook,faCircleUser,faCartShopping,faUserTie,faPalette,faReceipt } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"
function Navbar(){

    return(
        <nav id = "navbar">
           <img src={NerdHouse} alt="" />
            <div id = "icones">
                <Link to={"/"}><button  > <FontAwesomeIcon icon={faEnvelope} /> <span>Home</span> </button></Link>
                <Link to={"/Livraria"}><button ><FontAwesomeIcon icon={faBook} /><span>Livraria</span></button></Link>
                <Link to={"/Ebooks"}><button ><FontAwesomeIcon icon={faTabletScreenButton} /> <span>Ebooks</span></button></Link>
                <Link to={"/Portfolios"}><button ><FontAwesomeIcon icon={faAddressBook} /><span>Portfolios</span></button></Link>
                <Link to={"/LoginPage"}><button ><FontAwesomeIcon icon={faCircleUser} /><span>Login</span></button></Link>
                <Link to={"/Carrinho"}><button ><FontAwesomeIcon icon={faCartShopping} /><span>Carrinho</span></button></Link>
                <Link to={"/HomeAdmin"}><button ><FontAwesomeIcon icon={faUserTie} /><span>Home Administrador</span></button></Link>
                
                <Link to={"/MeusPedidos"}><button ><FontAwesomeIcon icon={faReceipt} /><span>Meus pedidos</span></button></Link>

                <Link to={"/HomeCliente"}><button ><FontAwesomeIcon icon={faPalette} /><span>Área do Cliente</span></button></Link>
                
                

                 
            </div>
        </nav>
        
        
    )
}
export default Navbar;
