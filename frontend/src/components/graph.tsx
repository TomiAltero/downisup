import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import PopUpPsychologycalSession from '@/components/PopUpsMedicalData/popUpPsychologycalSession'; 

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = () => {
  const [showInfoMedical, setShowInfoMedical] = useState(false);
  const [hijoId, setHijoId] = useState(1); 

  const handleClick = (event: React.MouseEvent) => {
    setShowInfoMedical(true);
  };

  const handleClose = () => {
    setShowInfoMedical(false);
  };

  const data = {
    labels: ['Presencia', 'Ausencia'],
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
    <div className="relative flex justify-center">
      <div style={{ width: '100%', maxWidth: '260px' }}>
        <h2 className="text-center mb-1">7/10 Asistencia</h2>
        <Pie
          data={data}
          onClick={handleClick}
          options={{
            onClick: (event) => handleClick(event)
          }}
        />
      </div>
      {showInfoMedical && <PopUpPsychologycalSession  onClose={handleClose} hijoId={hijoId} />}
    </div>
  );
};

export default PieChart;

