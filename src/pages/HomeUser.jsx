import UserNavBar from "../components/UserNavBar"
import '../assets/Styles/HomeUser.css'

export const HomeUser = () =>{
    return(
        <>
            <div className="container-home-user">
                <UserNavBar></UserNavBar>
                <div className="content-userhome">
                    <h2 className="userBienvenida">Bienvenido<h2 className="nameUser">Victor Villalva</h2> </h2>
                </div>
            </div>
        </>
    )
}