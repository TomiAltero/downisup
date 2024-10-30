import React, { useState, useEffect } from 'react';

// Ejemplo del archivo JSON cargado externamente
const especialistas = [
  {
    "nombre": "Dr. Pérez",
    "especialidad": "Pediatría",
    "diasDisponibles": [1, 3, 5], // 1: Lunes, 3: Miércoles, 5: Viernes
    "horarios": { "inicio": "07:00", "fin": "14:00" }
  },
  {
    "nombre": "Dra. García",
    "especialidad": "Neurología",
    "diasDisponibles": [2, 4], // 2: Martes, 4: Jueves
    "horarios": { "inicio": "08:00", "fin": "13:00" }
  }
];

// Utilidad para convertir un número de día en el nombre del día
const getNombreDia = (numeroDia) => {
  const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  return dias[numeroDia];
};

const HorariosComponent = () => {
  const [especialistaSeleccionado, setEspecialistaSeleccionado] = useState(null);
  const [horarios, setHorarios] = useState([]);

  // Maneja el cambio de selección de especialista
  const handleEspecialistaChange = (event) => {
    const nombreEspecialista = event.target.value;
    const especialista = especialistas.find(e => e.nombre === nombreEspecialista);
    setEspecialistaSeleccionado(especialista);

    if (especialista) {
      // Construye los horarios de trabajo para cada día disponible
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
      <div className="bg-white text-black shadow-lg rounded-lg p-6">
        <h2 className="text-center border-2 border-custom-blue bg-custom-blue text-white rounded-lg text-2xl font-semibold mb-4">Horarios Disponibles</h2>
        
        {/* Selector de Especialista */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Seleccione un especialista:</label>
          <select 
            className="block w-full p-2 border text-base rounded-md"
            onChange={handleEspecialistaChange}
            defaultValue=""
          >
            <option value="" disabled>Seleccione un especialista</option>
            {especialistas.map((especialista, index) => (
              <option key={index} value={especialista.nombre}>{especialista.nombre}</option>
            ))}
          </select>
        </div>

        {/* Tabla de Horarios */}
        <div className="overflow-x-auto text-base">
          {especialistaSeleccionado ? (
            <table className="min-w-full bg-white">
              <thead className='text-left'>
                <tr>
                  <th className="py-2 px-4 border-b-2 border-gray-200">Día</th>
                  <th className="py-2 px-4 border-b-2 border-gray-200">Horario</th>
                </tr>
              </thead>
              <tbody>
                {horarios.map((horario, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">{horario.dia}</td>
                    <td className="py-2 px-4 border-b">{horario.horario}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-600">Seleccione un especialista para ver los horarios.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HorariosComponent;
