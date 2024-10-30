import React from 'react';

const HorariosComponent = () => {
  // Datos de ejemplo
  const horarios = [
    { dia: 'Lunes', especialista: 'Dr. Pérez', horario: '10:00 - 10:30' },
    { dia: 'Lunes', especialista: 'Dra. García', horario: '11:00 - 11:30' },
    { dia: 'Martes', especialista: 'Dr. Pérez', horario: '09:00 - 09:30' },
    { dia: 'Miércoles', especialista: 'Dra. García', horario: '10:00 - 10:30' },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-white text-black shadow-lg rounded-lg p-6">
        <h2 className="text-center border-2 border-custom-blue bg-custom-blue text-white rounded-lg text-2xl font-semibold mb-4">Horarios Disponibles</h2>
        <div className="overflow-x-auto text-lg">
          <table className="min-w-full bg-white">
            <thead className='text-left'>
              <tr>
                <th className="py-2 px-4 border-b-2 border-gray-200">Día</th>
                <th className="py-2 px-4 border-b-2 border-gray-200">Especialista</th>
                <th className="py-2 px-4 border-b-2 border-gray-200">Horario</th>
              </tr>
            </thead>
            <tbody>
              {horarios.map((horario, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{horario.dia}</td>
                  <td className="py-2 px-4 border-b">{horario.especialista}</td>
                  <td className="py-2 px-4 border-b">{horario.horario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HorariosComponent;
