import { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const PuntosGrafica = ({ datos, valorDiagonal }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Crear un nuevo gráfico de puntos
    const chart = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Puntos',
            data: datos,
            pointBackgroundColor: 'blue',
          },
          {
            type: 'line',
            label: 'Línea Diagonal',
            data: [
              { x: 0, y: 0 },
              { x: valorDiagonal, y: valorDiagonal },
            ],
            borderColor: 'red',
            borderWidth: 1,
          },
        ],
      },
      options: {
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
      },
    });

    // Limpiar el gráfico al desmontar el componente
    return () => {
      chart.destroy();
    };
  }, [datos, valorDiagonal]);

  return <canvas ref={chartRef} />;
};

export default PuntosGrafica;

