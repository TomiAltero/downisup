import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Utilidad para convertir un número de día en el nombre del día
const getNombreDia = (numeroDia) => {
  const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  return dias[numeroDia];
};

const HorariosComponent = () => {
  const [especialistas, setEspecialistas] = useState([]);
  const [especialistaSeleccionado, setEspecialistaSeleccionado] = useState(null);
  const [horarios, setHorarios] = useState([]);

  useEffect(() => {
    // Fetch especialistas desde la API
    const fetchEspecialistas = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/especialistas');
        setEspecialistas(response.data.especialistas);
      } catch (error) {
        console.error("Error al cargar especialistas:", error);
      }
    };
    fetchEspecialistas();
  }, []);

  const handleEspecialistaChange = (event) => {
    const nombreEspecialista = event.target.value;
    const especialista = especialistas.find(e => e.nombre === nombreEspecialista);
    setEspecialistaSeleccionado(especialista);

    if (especialista) {
      const horariosDisponibles = especialista.diasDisponibles.map(dia => ({
        dia: getNombreDia(dia),
        horario: `${especialista.horarios.inicio} - ${especialista.horarios.fin}`
      }));
      setHorarios(horariosDisponibles);
    } else {
      setHorarios([]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-lg p-6">
        <h2 className="text-center border-2 border-custom-blue bg-custom-blue dark:bg-blue-900 text-white rounded-lg text-2xl font-semibold mb-4">
          Horarios Disponibles
        </h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Seleccione un especialista:</label>
          <select 
            className="block w-full p-2 border text-base rounded-md dark:bg-gray-800 dark:text-white"
            onChange={handleEspecialistaChange}
            defaultValue=""
          >
            <option value="" disabled>Seleccione un especialista</option>
            {especialistas.map((especialista, index) => (
              <option key={index} value={especialista.nombre}>{especialista.nombre}</option>
            ))}
          </select>
        </div>

        <div className="overflow-x-auto text-base">
          {especialistaSeleccionado ? (
            <table className="min-w-full bg-white dark:bg-gray-900">
              <thead className="text-left">
                <tr>
                  <th className="border-b-2 border-gray-200 dark:border-gray-600">Día</th>
                  <th className="border-b-2 border-gray-200 dark:border-gray-600">Horario</th>
                </tr>
              </thead>
              <tbody className=''>
                {horarios.map((horario, index) => (
                  <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="border-b border-gray-200 dark:border-gray-600">{horario.dia}</td>
                    <td className="border-b border-gray-200 dark:border-gray-600">{horario.horario}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-600 dark:text-gray-400">Seleccione un especialista para ver los horarios.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HorariosComponent;
