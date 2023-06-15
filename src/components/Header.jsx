import Logo from '../assets/Images/Logo.svg'

import '../assets/Styles/Header.css'

export const Header = () => {

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

      const handleClickNosotros = (event) => {
        event.preventDefault();
        scrollToSection('#Nosotros');
      };

      const handleClick = (event) => {
        event.preventDefault();
      };

    return(
        <>
            <header className="header">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="secciones">
                    <h2 className='seccion'><a href="" onClick={handleClick}>Inicio</a></h2>
                    <h2 className='seccion'><a href="" onClick={handleClick}>Secciones</a></h2>
                    <h2 className='seccion'><a href="" onClick={handleClickNosotros}>Nosotros</a></h2>
                </div>
                <div className="btn-comenzar">
                    <button>Comenzar</button>
                </div>
            </header>
        </>
    )
}