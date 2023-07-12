import Email from '../assets/Images/Email.svg'
import Volume from '../assets/Images/Volume.svg'
import Place from '../assets/Images/Place.svg'
import Logo from '../assets/Images/Logo.svg'
import '../assets/Styles/Footer.css'

export const Footer = () => {
    return(
        <>
            <footer className="container-footer">
                <div className="footer-top">
                    <div className="content-footer-top">
                        <div className="tit-footer">
                            <h2 className='second-sub-footer'>AQUA<h2 className='sub-tit-footer'>QA</h2></h2>
                        </div>
                        <img className='icon-email' src={Email}/>
                        <div className="correo-footer">
                            <h4>Envianos un correo</h4>
                            <p>aquaQA@gmail.com</p>
                        </div>
                        <img className='icon-tel' src={Volume}/>
                        <div className="tel-footer">
                            <h4>LLamanos</h4>
                            <p>(+55) 888-223-1234</p>
                        </div>
                        <img className='icon-ubi' src={Place}/>
                        <div className="ubi-footer">
                            <h4>Ubicación</h4>
                            <p>Suchiapa,CH,MEX 29150</p>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="content-footer-bottom">
                        <div className="logo-footer">
                            <img className='footer-logo' src={Logo}/>
                            <h2>VJI Corporation</h2>
                        </div>
                        <div className="copyright-footer">
                            <h4>Copyright © 2023, AquaQA Todos los derechos reservados</h4>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}