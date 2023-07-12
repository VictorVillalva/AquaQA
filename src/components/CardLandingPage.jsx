import HandPlanting from '../assets/Images/HandPlanting.svg'
import Certificate from '../assets/Images/Certificate.svg'
import ExpensivePrice from '../assets/Images/ExpensivePrice.svg'

import '../assets/Styles/CardLandingPage.css'

export const CardLandingPage = () => {
    return(
        <>
            <div className="all-content">
                <div className="card-container">
                    <div className="certificacion">
                        <img src={Certificate} />
                        <div className="cert">
                            <h2>Certificación</h2>
                            <h4>Lorem ipsum dolor sit amet <br /> consectetur</h4>
                        </div>
                    </div>
                    <div className="costo">
                        <img src={ExpensivePrice} />
                        <div className="cost">
                            <h2>Bajo costo</h2>
                            <h4>Lorem ipsum dolor sit amet <br /> consectetur</h4>
                        </div>
                    </div>
                    <div className="amigable">
                        <img src={HandPlanting} />
                        <div className="amig">
                            <h2>Amigable</h2>
                            <h4>Lorem ipsum dolor sit amet <br /> consectetur</h4>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}