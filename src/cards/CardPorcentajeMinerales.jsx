import ProgressBar from "@ramonak/react-progress-bar";
//CSS
import '../assets/Styles/cardPorcentaje.css';
//Image
import water from '../assets/Images/water.svg'


const CardPorcentajeMinerales = () => {
    return (
        <div className="cardPorcentaje">
            <div className="contextCard">
                <img src={water} className="imgWater"/>
                <span className='textCard'>Porcentaje de Minerales</span>
            </div>
            <div className="contextCardData">
                <span className="porcentajeProgress">70%</span>
                <ProgressBar  
                    completed={70}
                    customLabel=" "
                    height="1.6vh"
                    bgColor="#3CC0C9" />
            </div>
        </div>
    )
}

export default CardPorcentajeMinerales;