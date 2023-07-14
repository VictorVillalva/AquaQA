import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
//CSS
import '../assets/Styles/cardPorcentaje.css';
//Image
import water from '../assets/Images/Water.svg'
const CardPorcentajeSuminstro = () => {
  return (
    <div className="card">
        <div className="contextCard">
            <img src={water} alt="" />
            <span className='textCard'>Nivel de sumistro</span>
        </div>
        <div className="contextCardData">
            <span className="porcentaje">50%</span>
            <ProgressBar
                completed={50}
                customLabel=" "
                bgColor="#3CC0C9" />
        </div>
    </div>
  )
}
export default CardPorcentajeSuminstro;
