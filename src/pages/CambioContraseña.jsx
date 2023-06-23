import UserNavBar from "../components/UserNavBar"
import { Contraseña } from "../components/Contraseña"
import '../assets/Styles/Contraseña.css'

export const CambioContraseña = () =>{
    return(
        <div className="container-cambio-contra">
            <div className="container NavBarAdmin"> 
                <UserNavBar></UserNavBar>
            </div>
            <div className="content-cambio">
                <Contraseña></Contraseña>
            </div> 
        </div>
    )
}