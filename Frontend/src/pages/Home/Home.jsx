import Navbar from "../../components/Navbar/Navbar";
import QuemSomos from "../../components/QuemSomos/QuemSomos"
import  "./Home.css"

function Home(){
    
    return(
        <>
            
            <div className="homecomponentes">
                <Navbar/>
                <QuemSomos/> 
            </div>
            
        </>
        
        
    )
}

export default Home;

