//Importação
import ButtonsAdmin from "../../components/ButtonsAdmin/ButtonsAdmin"
import NerdHouse from "../../assets/Images/Nerd-house-logo.png"



//Função
function HomeAdmin () {
    
        return (
            <>
                       
            <div>
                <img src={NerdHouse} alt="" />
            </div>
            <div>
                <ButtonsAdmin/>
            </div>
            </>

        )
}

// exportação

export default HomeAdmin