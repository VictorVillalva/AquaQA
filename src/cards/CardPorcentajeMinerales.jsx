import ProgressBar from "@ramonak/react-progress-bar";
//CSS
import '../assets/Styles/cardPorcentaje.css';
//Image
import water from '../assets/Images/Water.svg'


const CardPorcentajeMinerales = () => {
    return (
        <div className="card">
            <div className="contextCard">
                <img src={water} alt="" />
                <span className='textCard'>Porcentaje de Minerales</span>
            </div>
            <div className="contextCardData">
                <span className="porcentaje">70%</span>
                <ProgressBar
                    completed={70}
                    customLabel=" "
                    bgColor="#3CC0C9" />
            </div>
        </div>
    )
}

export default CardPorcentajeMinerales;