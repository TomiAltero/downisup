import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import PopUpPsychologycalSession from '@/components/PopUpsMedicalData/popUpPsychologycalSession'; 
import { getChildrenAndUser } from '@/lib/utils';  // Import the API function

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = () => {
  const [showInfoMedical, setShowInfoMedical] = useState(false);
  const [hijoId, setHijoId] = useState(1); 
  const [tipoUsuarioId, setTipoUsuarioId] = useState<number | null>(null);
  const [chartTitle, setChartTitle] = useState('Asistencia Pacientes');
  const [data, setData] = useState({
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
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const allChildren = await getChildrenAndUser({ token });
        const userTipo = allChildren.usuario.tipoUsuarioId;
        setTipoUsuarioId(userTipo);
        
        // Update chart title and data based on tipoUsuarioId
        if (userTipo === 1) {
          setChartTitle('Asistencia Hijos');
          // Optionally, update data here if needed
        } else if (userTipo === 2) {
          setChartTitle('Asistencia Pacientes');
          // Optionally, update data here if needed
        }
      }
    };

    fetchUserData();
  }, []);

  const handleClick = (event: React.MouseEvent) => {
    setShowInfoMedical(true);
  };

  const handleClose = () => {
    setShowInfoMedical(false);
  };

  return (
    <div className="relative flex justify-center">
      <div style={{ width: '100%', maxWidth: '260px' }}>
        <h2 className="text-center">{chartTitle} 7/10</h2>
        <Pie
          data={data}
          onClick={handleClick}
          options={{
            onClick: (event) => handleClick(event)
          }}
        />
      </div>
      {showInfoMedical && <PopUpPsychologycalSession onClose={handleClose} hijoId={hijoId} />}
    </div>
  );
};

export default PieChart;

