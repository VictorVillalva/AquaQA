import TempImage from '../assets/Images/imageTemp.png'
import '../assets/Styles/Servicios.css'

export const Servicios = () => {
    return(
        <>
            <div className="servicios-contenedor" id='Servicios'>
                <div className="servicios">
                    <div className="seccion-top">
                        <h3>Nuestros Servicios</h3>
                        <h2>Cuida tu agua, Inicia con nosotros</h2>
                        <h4>Nos comprometemos a ofrecer resultados confiables y a<br />
                            proporcionar un servicio excepcional a nuestros clientes</h4>
                    </div>
                    <div className="seccion-center">
                        <div className="container-cards">
                            <div className="card">
                                <img src={TempImage} />
                                <h3>Temperatura</h3>
                                <h4>Monitoreo de temperatura de los <br /> suministros de agua</h4>
                            </div>
                            <div className="card">
                                <img src={TempImage} />
                                <h3>Carbohidratos</h3>
                                <h4>Monitoreo de temperatura de los <br /> suministros de agua</h4>
                            </div>
                            <div className="card">
                                <img src={TempImage} />
                                <h3>Conductividad</h3>
                                <h4>Monitoreo de temperatura de los <br /> suministros de agua</h4>
                            </div>
                        </div>
                    </div>
                    <div className="seccion-bottom">
                        <div className="container-cards2">
                            <div className="contenedor-card1">
                                <div className="card1">
                                    <img src={TempImage} />
                                    <h3>Nivel de agua</h3>
                                    <h4>Monitoreo de temperatura de los <br /> suministros de agua</h4>
                                </div>
                            </div>
                            <div className="contenedor-card2">
                                <div className="card2">
                                    <img src={TempImage} />
                                    <h3>Turbidez</h3>
                                    <h4>Monitoreo de temperatura de los <br /> suministros de agua</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}