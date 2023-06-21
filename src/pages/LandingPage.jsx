import { Header } from "../components/Header"
import { CardLandingPage } from "../components/CardLandingPage"
import { Nosotros } from "../components/Nosotros"
import { Servicios } from "../components/Servicios"

import img1 from "../assets/Images/Imagen1.png"
import img2 from "../assets/Images/Imagen2.png"
import img3 from "../assets/Images/Imagen3.png"
import iconInicio from "../assets/Images/CircledPlay.svg"
import iconSaber from "../assets/Images/Add.svg"

import '../assets/Styles/LandingPage.css'
import { Footer } from "../components/Footer"
import { Elegirnos } from "../components/Elegirnos"
import { useNavigate } from "react-router-dom"



export const LandingPage = () => {

    const scrollToSection = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
          const sectionPosition = section.getBoundingClientRect().top;
          const offsetPosition = sectionPosition - 110;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      };

      const Login = useNavigate()
      
      const handleNavigateLogin = () =>{
        Login('/login')
      }


    return (
        <>
            <Header></Header>
            <div className="contenedor-contenido">
                <div className="sec-Izquierda">
                    <div className="content">
                        <h2 className="info">Agua limpia,</h2>
                        <h2 className="info2">futuro brillante</h2>
                        <h4 className="info3">Invierte en calidad para un mundo <br /> radiante</h4>
                        <div className="btns">
                            <div className="btn-iniciar">
                                <button className="inic" onClick={handleNavigateLogin}>Iniciar<img className="icon-inic" src={iconInicio} /></button>
                            </div>
                            <div className="btn-saber-mas">
                                <button onClick={() => scrollToSection('#Nosotros')} className="masSaber">Saber más <img className="icon-saber" src={iconSaber} /></button>
                            </div>
                        </div>
                        <div className="info4">
                            <h3 className="inf1">80+<br/><h4>Zonas</h4></h3>
                            <div className="divider1"></div>
                            <h3 className="inf2">2000+<br/><h4>Personas</h4></h3>
                            <div className="divider2"></div>
                            <h3 className="inf3">10+<br/><h4>Estados</h4></h3>
                        </div>
                    </div>
                </div>
                <div className="sec-Derecha">
                    <div className="imagenes">
                        <div className="image1">
                            <img className="img1" src={img1} />
                        </div>
                        <div className="image2">
                            <img className="img2" src={img2} />
                        </div>
                        <div className="image3">
                            <img className="img3" src={img3} />
                        </div>
                        <div className="circulo"></div>
                    </div>
                </div>
            </div>
            <CardLandingPage></CardLandingPage>
            <Nosotros></Nosotros>
            <Servicios></Servicios>
            <Elegirnos></Elegirnos>
            <Footer></Footer>
        </>
    )
}