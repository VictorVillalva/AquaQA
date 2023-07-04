import UserNavBar from "../components/UserNavBar"
import '../assets/Styles/HomeUser.css'

export const HomeUser = () =>{


    return(
        <div className="container-home-user">
            <div className="container navbarUser">
                <UserNavBar></UserNavBar>
            </div>
            <div className="content-userhome">
                <h2 className="userBienvenida">Bienvenido<h2 className="nameUser"></h2></h2>
            </div>
        </div>
    )
}