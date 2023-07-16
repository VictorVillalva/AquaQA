import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Image2 from '../assets/Images/Imagen-2.png'
import Checkmark from '../assets/Images/Checkmark.svg'

import '../assets/Styles/Nosotros.css'
import 'react-circular-progressbar/dist/styles.css';

export const Nosotros = () => {
    const satisfaccion = 90;
    return(
        <>
            <div className="nosotros-container" id='Nosotros'>
                <div className="seccion-izq-nosotros">
                    <div className="caja-sec-izq"></div>
                    <img src={Image2}/>
                </div>
                <div className="seccion-der-nosotros">
                    <h3>Sobre nosotros</h3>
                    <h2>Somos empresa dedicada a la <br /> revisión y garantía de la calidad <br /> del agua</h2>
                    <p>Utilizamos tecnología de vanguardia y métodos científicos <br /> rigurosos para llevar a 
                    cabo pruebas y análisis exhaustivos en <br /> muestras de agua.</p>
                    <div className="sub-sec-nosotros">
                        <div className="sub-sec-izq-nosotros">
                            <div className="subsecciones">
                                <img src={Checkmark}/>
                                <h4 className='inf-nosotros'>Instalación de dispositivos</h4>
                            </div>
                            <div className="subsecciones">
                                <img src={Checkmark}/>
                                <h4 className='inf-nosotros'>Materiales de calidad</h4>
                            </div>
                            <div className="subsecciones">
                                <img src={Checkmark}/>
                                <h4 className='inf-nosotros'>Garantía de servicio</h4>
                            </div>
                            <div className="subsecciones">
                                <img src={Checkmark}/>
                                <h4 className='inf-nosotros'>Garantía de materiales</h4>
                            </div>
                        </div>
                        <div className="sub-sec-der-nosotros">
                            <CircularProgressbar 
                                value={satisfaccion} 
                                text={`${satisfaccion}%`} 
                                strokeWidth={12}
                                styles={buildStyles({
                                    textColor: '#A8E3E7',
                                    textSize: '26px',
                                    pathColor: '#3CC0C9',
                                    trailColor: '#F2F2F2'
                                })}
                            />
                            <p className='txt-clientes-satisfechos'>Clientes satisfechos</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}