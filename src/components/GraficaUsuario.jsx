import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend);

const Grafica = ({datos, linea}) => {


      // Datos de ejemplo para la línea diagonal
    // const lineaD = [
    //     { x: 0, y: 0 },
    //     { x: linea, y: linea },
    // ];

    const options = {
        responsive: true,
        plugins: {
            legend: {
            position: 'top',
            },
            title: {
            display: true,
            text: 'Grafica ',
            },
        },
        //  scales: {
        //  x: {
        //      beginAtZero: true,
        //      max: linea, // Ajusta el máximo del eje X según el valor de la línea diagonal
        //      },
        //  y: {
        //      beginAtZero: true,
        //      max: linea, // Ajusta el máximo del eje Y según el valor de la línea diagonal
        //      },
        //  },
    };


    const labels = [0,1,2,3,4,5,6];

    const data = {
        labels,
        datasets: [
            {
                label: 'Puntos',
                data: datos,
                borderColor: 'transparent',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Linea Recta',
                data: linea,
                borderColor: '#3CC0C9',
                backgroundColor: '#3CC0C9',
                borderWidth: 2,
                fill: false,
            },
        ],
    };
    return (  
        <div>
            <Line data={data} options={options}/>
        </div>
    );
};

export default Grafica;