import Navbar from "../../components/Navbar/Navbar";
import PedidosComponente from "../../components/PedidosComponente/PedidosComponente";
import "./MeusPedidos.css"


function MeusPedidos(){
    return(
       <div className="MeusPedidosPage">
        <Navbar/>
        <PedidosComponente/>
       </div>
    )
}





export default MeusPedidos;