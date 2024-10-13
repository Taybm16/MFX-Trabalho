import "./Navbar.scss"
import NerdHouse from "../../assets/Images/Nerd-house-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faBook,faTabletScreenButton,faCircleUser,faCartShopping,faUserTie,faPalette } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"
function Navbar(){

    return(
        <nav id = "navbar">
           <img src={NerdHouse} alt="" width={250}/>
           
            <div id = "icones">
                <Link to={"/"}><button> <div className="IconeDiv">  <div><FontAwesomeIcon icon={faEnvelope} /></div> <div><span>Home</span></div> </div> </button></Link>
                <Link to={"/Livraria"}><button ><FontAwesomeIcon icon={faBook} /><span>Livraria</span></button></Link>
                <Link to={"/Ebooks"}><button ><FontAwesomeIcon icon={faTabletScreenButton} /> <span>Ebooks</span></button></Link>
                
                <Link to={"/LoginPage"}><button ><FontAwesomeIcon icon={faCircleUser} /><span>Login</span></button></Link>
                <Link to={"/Carrinho"}><button ><FontAwesomeIcon icon={faCartShopping} /><span>Carrinho</span></button></Link>
                <Link to={"/HomeAdmin"}><button ><FontAwesomeIcon icon={faUserTie} /><span>Home Administrador</span></button></Link>
                
                

                <Link to={"/HomeCliente"}><button ><FontAwesomeIcon icon={faPalette} /><span>Área do Cliente</span></button></Link>
                
                

                 
            </div>
        </nav>
        
        
    )
}
export default Navbar;
