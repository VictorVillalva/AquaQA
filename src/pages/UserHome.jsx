//Components
import UserNavBar from "../components/UserNavBar.jsx";
//CSS
import "../assets/Styles/userHome.css";
//Cards
import CardPorcentajaMinerales from "../cards/CardPorcentajeMinerales.jsx";
import CardPorcentajeSuminstro from "../cards/CardPorcentajeSuminstro.jsx";
import CardUser from "../cards/CardUser.jsx";
import CardAnalisisGeneral from "../cards/CardAnalisisGeneral.jsx";
//Images

const UserHome = () => {
    return (
        <>
        <div className="HomeUserPrincipal">
            <div className="row">
                <div className="col-1 nav">
                    <UserNavBar />
                </div>
                <div className="col-1"></div>
                <div className="col-4 principalData">
                    <span className="welcomeUser">
                        Bienvenido <span className="nameUser">Victor Villalva</span>
                    </span>
                    <div className="cardUsuarioData">
                        <CardUser />
                    </div>
                </div>
                <div className="col-5">
                    <div className="cardsPorcentajes">
                        <CardPorcentajaMinerales />
                        <CardPorcentajeSuminstro />
                    </div>
                    <div className="dataGeneral">
                        <CardAnalisisGeneral />
                    </div>
                </div>

            </div>
        </div>
        </>

    )
}

export default UserHome;