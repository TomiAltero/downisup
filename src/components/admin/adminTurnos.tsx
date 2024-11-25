"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

// Definimos el tipo de datos para un turno
type Turno = {
  especialista: string;
  dia: number;
  horario: string;
  nombrePaciente: string;
  padre: string;
  fechaTurno: string;
};

// Mapeo de días de la semana para mostrar el nombre del día
const diasSemana: { [key: number]: string } = {
  1: "Lunes",
  2: "Martes",
  3: "Miércoles",
  4: "Jueves",
  5: "Viernes",
};

function AdministrarTurnos() {
  const [turnos, setTurnos] = useState<Turno[]>([]);
  const [sortField, setSortField] = useState<"especialista" | "fechaTurno">("especialista");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/turnosAdmin");
        setTurnos(response.data.turnos);
      } catch (error) {
        console.error("Error al cargar turnos:", error);
      }
    };
    fetchTurnos();
  }, []);

  const borrarTurno = async (nombrePaciente: string, horario: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/turnosAdmin/${nombrePaciente}/${horario}`);
      setTurnos(turnos.filter((turno) => turno.nombrePaciente !== nombrePaciente || turno.horario !== horario));
    } catch (error) {
      console.error("Error al borrar turno:", error);
    }
  };

  const ordenarTurnos = (field: "especialista" | "fechaTurno") => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);

    const sortedTurnos = [...turnos].sort((a, b) => {
      if (field === "especialista") {
        return order === "asc"
          ? a.especialista.localeCompare(b.especialista)
          : b.especialista.localeCompare(a.especialista);
      } else {
        return order === "asc"
          ? new Date(a.fechaTurno).getTime() - new Date(b.fechaTurno).getTime()
          : new Date(b.fechaTurno).getTime() - new Date(a.fechaTurno).getTime();
      }
    });

    setTurnos(sortedTurnos);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-gray-100 dark:bg-gray-800 text-black text-center text-lg dark:text-white shadow-lg border-2 border-gray-200 dark:border-0 rounded-lg p-6 mb-5">
        <h1 className="text-xl text-custom-blue dark:text-blue-500 font-bold mb-4">Administrar Turnos</h1>
        <p className="text-base text-gray-500 dark:text-gray-300 mb-6">Administra todos los turnos registrados. </p>
        <hr className="mb-5" />
        <table className="table-auto w-full text-sm mb-6 divide-y divide-gray-200 dark:divide-gray-600">
          <thead>
            <tr>
              <th
                className="px-4 py-2 cursor-pointer"
                onClick={() => ordenarTurnos("especialista")}
              >
                Especialista {sortField === "especialista" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
              <th className="px-4 py-2">Día</th>
              <th className="px-4 py-2">Horario</th>
              <th className="px-4 py-2">Paciente</th>
              <th className="px-4 py-2">Padre</th>
              <th
                className="px-4 py-2 cursor-pointer"
                onClick={() => ordenarTurnos("fechaTurno")}
              >
                Fecha Turno {sortField === "fechaTurno" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {turnos.map((turno, index) => (
              <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <td className="px-4 py-2">{turno.especialista}</td>
                <td className="px-4 py-2">{diasSemana[turno.dia]}</td>
                <td className="px-4 py-2">{turno.horario}</td>
                <td className="px-4 py-2">{turno.nombrePaciente}</td>
                <td className="px-4 py-2">{turno.padre}</td>
                <td className="px-4 py-2">{new Date(turno.fechaTurno).toLocaleDateString("es-ES")}</td>
                <td className="px-4 py-2">
                  <button
                    className="border py-1 px-4 rounded-lg border-red text-red hover:bg-rose-100 dark:hover:bg-rose-900 dark:hover:text-white transition-colors"
                    onClick={() => borrarTurno(turno.nombrePaciente, turno.horario)}
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdministrarTurnos;
