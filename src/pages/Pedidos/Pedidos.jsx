import Navbar from "../../components/Navbar/Navbar";
import PedidosComponente from "../../components/PedidosComponente/PedidosComponente";
import "./Pedidos.css"

function Pedidos(){
    return(
       <div className="PedidosPage">
        <Navbar/>
        <PedidosComponente/>
       </div>
    )
}







export default Pedidos;