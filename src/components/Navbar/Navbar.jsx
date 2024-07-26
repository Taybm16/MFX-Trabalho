import "./Navbar.scss"
import NerdHouse from "../../assets/Images/Nerd-house-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faBook,faHeartCirclePlus,faTabletScreenButton,faAddressBook,faCircleUser,faCartShopping } from '@fortawesome/free-solid-svg-icons'

function Navbar(){

    return(
        <nav id = "navbar">
           <img src={NerdHouse} alt="" />
            <div id = "icones">
                
                <button  > <FontAwesomeIcon icon={faEnvelope} /> <span>Home</span> </button>
                <button ><FontAwesomeIcon icon={faBook} /><span>Livraria</span></button>
                <button ><FontAwesomeIcon icon={faHeartCirclePlus} /><span>Favoritos</span></button>
                <button ><FontAwesomeIcon icon={faTabletScreenButton} /> <span>Ebooks</span></button>
                <button ><FontAwesomeIcon icon={faAddressBook} /><span>Portfolios</span></button>
                <button ><FontAwesomeIcon icon={faCircleUser} /><span>Login</span></button>
                <button ><FontAwesomeIcon icon={faCartShopping} /><span>Carrinho</span></button>
                

                 
            </div>
        </nav>
        
        
    )
}
export default Navbar;
