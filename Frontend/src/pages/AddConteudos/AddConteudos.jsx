import ModalAdicao from "../../components/ModalAdicaoConteudos/ModalAdicaoConteudos"
import Navbar from "../../components/Navbar/Navbar";
import "./AddConteudos.css"

function AddConteudos(){
    return(
       
        <div id="paiAdd">
            <div>
                <Navbar/>
            </div>
            <div>
                <ModalAdicao/>
            </div>
        </div>
       
    )
}

export default AddConteudos;