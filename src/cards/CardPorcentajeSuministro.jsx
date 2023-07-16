import ProgressBar from "@ramonak/react-progress-bar";
//CSS
import '../assets/Styles/cardPorcentaje.css';
//Image
import water from '../assets/Images/water.svg'
const CardPorcentajeSuministro = () => {
  return (
    <div className="cardPorcentaje">
        <div className="contextCard">
            <img src={water} className="imgWater" />
            <span className='textCard1'>Nivel de sumistro</span>
        </div>
        <div className="contextCardData">
            <span className="porcentajeProgress">50%</span>
            <ProgressBar
                completed={50}
                customLabel=" "
                height="1.6vh"
                bgColor="#3CC0C9" />
        </div>
    </div>
  )
}
export default CardPorcentajeSuministro;