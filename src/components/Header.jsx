import {NavLink, useNavigate} from 'react-router-dom'
import Logo from '../assets/Images/Logo.svg'

import '../assets/Styles/Header.css'

export const Header = () => {

    const navigate = useNavigate();

    const handleNavigateHome = () =>{
      navigate('/')
    }

    const scrollToSectionNosotros = (sectionId) => {
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

      const scrollToSectionServicios = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
          const sectionPosition = section.getBoundingClientRect().top;
          const offsetPosition = sectionPosition;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      };

      const handleClickNosotros = (event) => {
        event.preventDefault();
        scrollToSectionNosotros('#Nosotros');
      };

      const handleClickServicios = (event) => {
        event.preventDefault();
        scrollToSectionServicios('#Servicios');
      };

      const handleClick = (event) => {
        event.preventDefault();
      };

    return(
        <>
            <header className="header">
                <div className="logo-header">
                    <button onClick={handleNavigateHome}><img src={Logo}/></button>
                </div>
                <div className="secciones">
                    <h2 className='seccion'><a href="" onClick={handleClick}>Inicio</a></h2>
                    <h2 className='seccion'><a href="" onClick={handleClickServicios}>Servicios</a></h2>
                    <h2 className='seccion'><a href="" onClick={handleClickNosotros}>Nosotros</a></h2>
                </div>
                <div className="btn-comenzar">
                    <NavLink className='btn-comen' to='/login'>Comenzar</NavLink>
                </div>
            </header>
        </>
    )
}