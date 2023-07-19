import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend);

const GraficaUsuario = ({ datos, diagonalValue }) => {
    // Calcular los puntos de la diagonal
    const calculateDiagonalPoints = () => {
      const startPoint = { x: 0, y: 0 };
      const endPoint = { x: diagonalValue, y: diagonalValue };
      const slope = (endPoint.y - startPoint.y) / (endPoint.x - startPoint.x);
  
      const diagonalPoints = [];
  
      for (let i = startPoint.x; i <= endPoint.x; i++) {
        const yValue = startPoint.y + slope * (i - startPoint.x);
        diagonalPoints.push({ x: i, y: yValue });
      }
  
      return diagonalPoints;
    };
  
    // Datos para la gráfica
    const data = {
      datasets: [
        {
          label: 'Puntos',
          data: datos,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'transparent',
          pointRadius: 6,
        },
        {
          label: 'Diagonal',
          data: calculateDiagonalPoints(),
          borderColor: 'rgba(255,0,0,1)',
          borderWidth: 2,
        },
      ],
    };
  
    // Opciones para la gráfica
    const options = {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
        },
        y: {
          type: 'linear',
          position: 'left',
        },
      },
    };
  
    return (
      <div>
        <Line data={data} options={options} />
      </div>
    );
  };
  
  export default GraficaUsuario;