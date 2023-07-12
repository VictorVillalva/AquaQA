
import '../assets/Styles/cardUser.css'
import Foto from '../assets/Images/FotoUsuario.png'; 
import Forward from '../assets/Images/Forward.svg';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Chart as chartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';

chartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

const CardUser = () => {
    //Configuracion de grafica barras
    const dataWater={
        labels: ['Lun','Mar','Mie','Jue','Vie','Sab','Dom'],
        datasets:[{
            label: 'Sumistro de agua',
            data: [50, 20, 30, 20, 60, 20, 90],
            backgroundColor: '#3CC0C9',
            borderColor: '#',
            borderWidth: 0,
            borderRadius: 5,
            hoverBackgroundColor: '#A8E3E7',
            hoverBorderColor: '#FF0000'
        }]
    };
    const opciones={
        maintainAspectRatio: false,
        responsive: true
    }

    const porcentaje = 70;
    
  return (
    <div className='cardUser'>
        <div className="user">
            <div className="info">
                <h4 className='name'>Victor Villalva</h4>
                <div className='separador'/>
                <p className='card-email'>correoelectronico@ejemplo.com</p>
            </div>
            <div className="photo">
                <img src={Foto} alt="" className='fotoPerfil'/>
            </div>
        </div>
        <div className="water">
            <p className="dataWater">Agua Total: 200lts</p>
            <p className="dataWater2">Agua Consumida: 50lts</p>
        </div>
        <div className="graph-analyst">
            <p className='txt-graph'>Grafica analistica</p>
            <div className="graph">
                <div className="graph-txt-data">
                    <p className='txt-data-water'>Nivel de sumistro de agua</p>
                    <img src={Forward} className='forward' />
                </div>
                <div className="bar-graph">
                    <div className="bar-graph-data">
                        <Bar data={dataWater} options={opciones}/>
                    </div>
                </div>
            </div>
            <div className="circular-progress-bar">
                <p className='txt-minerales'>Porcentaje de minerales</p>
                <div className="bar-circular">
                    <div className="circular">
                        <CircularProgressbar
                            value={porcentaje}
                            text={`${porcentaje}%`}
                            strokeWidth={12}
                            styles={buildStyles({
                                textColor: '#A8E3E7',
                                textSize: '26px',
                                pathColor: '#3CC0C9',
                                trailColor: '#F2F2F2'
                            })}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardUser