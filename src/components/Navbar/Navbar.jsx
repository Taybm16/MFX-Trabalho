import "./Navbar.scss"
import NerdHouse from "../../assets/Images/Nerd-house-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faBook,faHeartCirclePlus,faTabletScreenButton,faAddressBook,faCircleUser,faCartShopping } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"
function Navbar(){

    return(
        <nav id = "navbar">
           <img src={NerdHouse} alt="" />
            <div id = "icones">
                <Link to={"/"}><button  > <FontAwesomeIcon icon={faEnvelope} /> <span>Home</span> </button></Link>
                
                <Link to={"/Livraria"}><button ><FontAwesomeIcon icon={faBook} /><span>Livraria</span></button></Link>
                <Link to={"/Favoritos"}><button ><FontAwesomeIcon icon={faHeartCirclePlus} /><span>Favoritos</span></button></Link>
                <Link to={"/Ebooks"}><button ><FontAwesomeIcon icon={faTabletScreenButton} /> <span>Ebooks</span></button></Link>
                <Link to={"/Portfolios"}><button ><FontAwesomeIcon icon={faAddressBook} /><span>Portfolios</span></button></Link>
                <Link to={"/LoginPage"}><button ><FontAwesomeIcon icon={faCircleUser} /><span>Login</span></button></Link>
                <Link to={"/Carrinho"}><button ><FontAwesomeIcon icon={faCartShopping} /><span>Carrinho</span></button></Link>
                

                 
            </div>
        </nav>
        
        
    )
}
export default Navbar;
