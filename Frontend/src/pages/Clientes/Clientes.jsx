import ClientesCentral from "../../components/ClientesCentral/ClientesCentral"
import Navbar from "../../components/Navbar/Navbar"
import "./Clientes.css"
function Clientes(){
    return(
       <div className="ClientesPage">
            <Navbar/>
            <ClientesCentral/>
            
       </div>
    )
}






export default Clientes;