import "./Navbar.scss"
import NerdHouse from "../../assets/Images/Nerd-house-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons'

function Navbar(){

    return(
        <nav id = "navbar">
           <img src={NerdHouse} alt="" />
            <div id = "icones">
                
                <button  > <FontAwesomeIcon icon={faEnvelope} /> <span>Home</span> </button>
                <button ><FontAwesomeIcon icon={faHeartCirclePlus} /> <span>Livraria</span></button>
                <button ><span>Favoritos</span></button>
                <button ><span>Ebooks</span></button>
                <button ><span>Portfolios</span></button>
                <button ><span>Login</span></button>
                <button ><span>Carrinho</span></button>
                
                
                
            </div>
        </nav>
        
        
    )
}
export default Navbar;
