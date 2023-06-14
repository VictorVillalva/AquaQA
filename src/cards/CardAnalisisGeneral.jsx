import React from 'react'
import '../assets/Styles/cardAnalisisGeneral.css';

import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

const CardAnalisisGeneral = () => {
    //Configuracion de grafica barras
    const dataWater={
        labels: ['Niveles PH','Niveles Tubidez','Niveles agua'],
        datasets:[{
            label: 'Datos',
            data: [90, 20, 30],
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


  return (
    <div className="card-analisisgeneral">
        <h5 className='title-analisis'>Analisis General</h5>
        <div className="service-water">
            <div className="services">
                <p className="txt-title-service">Servicio</p>
                <p className="service">Temperatura</p>
                <p className="service">Turbidez</p>
                <p className="service">Niveles de PH</p>
                <p className="service">Niveles de agua</p>
            </div>
            <div className="datos">
                <p className='txt-title-datos'>Dato</p>
                <p className="dato-water">28 C°</p>
                <p className="dato-water">20 %</p>
                <p className="dato-water">70 %</p>
                <p className="dato-water">50 %</p>
            </div>
            <div className="niveles-water">
                <p className='txt-title-nivel'>Nivel</p>
                <p className="nivel">Estable</p>
                <p className="nivel">Estable</p>
                <p className="nivel">Estable</p>
                <p className="nivel">Estable</p>
            </div>
        </div>
        <div className="grafica-bar">
            <Bar data={dataWater} options={opciones}/>
        </div>
    </div>
  )
}

export default CardAnalisisGeneral;