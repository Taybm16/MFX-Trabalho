import ModalAdicaoConteudos from "../../components/ModalAdicaoConteudos/ModalAdicaoConteudos"
import Navbar from "../../components/Navbar/Navbar";
import "./AddConteudos.css"

function AddConteudos(){
    return(
       
        <div className="paiAdd">
            
                <Navbar/>
                <ModalAdicaoConteudos/>
            
        </div>
       
    )
}

export default AddConteudos;