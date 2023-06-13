import Logo from '../assets/Images/Logo.svg'

import '../assets/Styles/Header.css'

export const Header = () => {
    return(
        <>
            <header className="header">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="secciones">
                    <h2 className='seccion'><a href="">Inicio</a></h2>
                    <h2 className='seccion'><a href="">Secciones</a></h2>
                    <h2 className='seccion'><a href="">Nosotros</a></h2>
                </div>
                <div className="btn-comenzar">
                    <button>Comenzar</button>
                </div>
            </header>
        </>
    )
}