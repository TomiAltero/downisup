import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TurnosGuardadosComponent = () => {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const response = await axios.get('/api/turnos/turnosGuardados');  // Llama al endpoint que leerá turnos.json
        setTurnos(response.data);
      } catch (error) {
        console.error('Error al cargar turnos:', error);
      }
    };
    fetchTurnos();
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-center text-2xl font-semibold mb-4 text-black">Turnos Guardados</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-gray-200 text-black">Especialista</th>
                <th className="py-2 px-4 border-b-2 border-gray-200 text-black">Día</th>
                <th className="py-2 px-4 border-b-2 border-gray-200 text-black">Horario</th>
                <th className="py-2 px-4 border-b-2 border-gray-200 text-black">Paciente</th>
              </tr>
            </thead>
            <tbody>
              {turnos.map((turno, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{turno.especialista}</td>
                  <td className="py-2 px-4 border-b">{turno.dia}</td>
                  <td className="py-2 px-4 border-b">{turno.horario}</td>
                  <td className="py-2 px-4 border-b">{turno.nombrePaciente}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TurnosGuardadosComponent;
