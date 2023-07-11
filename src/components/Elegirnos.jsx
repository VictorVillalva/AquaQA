import ImgElegirnos from '../assets/Images/ImagenElegirnos.png'
import '../assets/Styles/Elegirnos.css'

export const Elegirnos = () => {
    return(
        <>
            <div className="elegirnos-container">
                <div className="sec-izq-eleg">
                    <h3>¿Por qué elegirnos?</h3>
                    <h2>Resultados confiables, <br /> vidas saludables</h2>
                    <p>Nuestra misión es garantizar que todos tengan acceso a agua de <br /> 
                       calidad, protegiendo la salud y promoviendo un entorno sostenible. <br /> <br />
                       Nos distinguimos por nuestra experiencia y trayectoria en el campo <br /> 
                       de la calidad del agua. Contamos con años de experiencia en la <br /> 
                       industria y hemos trabajado con una amplia gama de clientes, <br /> 
                       incluyendo hogares, empresas, instituciones educativas y entidades <br /> 
                       gubernamentales. Nuestro compromiso con la excelencia nos ha <br /> 
                       convertido en líderes confiables en el sector.</p>
                       <div className="sub-sec-izq">
                            <div className="sub-izq">
                                <h1>2000+</h1>
                                <h3 className='client-eleg'>Clientes <br /> satisfechos</h3>
                            </div>
                            <div className="sub-der">
                                <h1>10+</h1>
                                <h3 className='client-eleg'>Estados en <br /> todo México</h3>
                            </div>
                       </div>
                       <div className="sec-izq-bottom">
                            <div className="sub-center">
                                <h1>80+</h1>
                                <h3 className='client-eleg'>Zonas <br /> Siembra</h3>
                            </div>
                       </div>
                </div>
                <div className="sec-der-eleg">
                    <div className="caja-elegirnos"></div>
                    <img src={ImgElegirnos}/>
                </div>
            </div>
        </>
    )
}