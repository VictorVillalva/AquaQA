import UserNavBar from "../components/UserNavBar"
import '../assets/Styles/HomeUser.css'
import CardUser from "../cards/CardUser"
import CardPorcentajeMinerales from "../cards/CardPorcentajeMinerales"
import CardPorcentajeSuministro from "../cards/CardPorcentajeSuministro"
import CardAnalisisGeneral from "../cards/CardAnalisisGeneral"

export const HomeUser = () =>{


    return(
        <div className="container-home-user">
            <div className="container navbarUser">
                <UserNavBar></UserNavBar>
            </div>
            <div className="content-userhome">
                <h2 className="userBienvenida">Bienvenido</h2>
                <div className="cards">
                    <div className="cardUser">
                        <CardUser/>
                    </div>
                    <div className="cards-analisis">
                        <div className="porcentaje-suministro">
                            <div className="porcentaje">
                                <CardPorcentajeMinerales/>
                            </div>
                            <div className="suministro">
                                <CardPorcentajeSuministro/>
                            </div>
                        </div>
                        <div className="analisis">
                                <CardAnalisisGeneral/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}