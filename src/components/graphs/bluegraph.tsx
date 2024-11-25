import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const BluePieChart = () => {
  const data = {
    labels: ['Bueno'],
    datasets: [
      {
        label: 'Asistencia',
        data: [7, 3], 
        backgroundColor: [
          'rgb(30, 58, 138)',  
          'rgba(173, 216, 230, 0.6)'  
        ],
        borderColor: [
          'rgba(0, 123, 255, 1)',  
          'rgba(173, 216, 230, 1)'  
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex justify-center mt-2">
      <div style={{ width: '100%', maxWidth: '260px' }}>
        <h2 className="text-center mb-1 dark:text-white">7/10 Comportamiento</h2>
        <Pie data={data} />
      </div>
    </div>
  );
};

export default BluePieChart;
