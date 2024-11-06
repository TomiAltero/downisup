"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input, Select, Option } from "@material-tailwind/react";

// Definimos el tipo de datos para un especialista
type Especialista = {
  nombre: string;
  especialidad: string;
  diasDisponibles: number[];
  horarios: { inicio: string; fin: string };
};

// Mapeo de días de la semana para convertir números a nombres de días
const diasSemana: { [key: number]: string } = {
  1: "Lunes",
  2: "Martes",
  3: "Miércoles",
  4: "Jueves",
  5: "Viernes",
};

const especialidades = ["Psicología", "Neurología", "Fisiología", "Fonoaudiología"];

function AdministrarEspecialista() {
  const [especialistas, setEspecialistas] = useState<Especialista[]>([]);
  const [nuevoEspecialista, setNuevoEspecialista] = useState<Especialista>({
    nombre: "",
    especialidad: "",
    diasDisponibles: [],
    horarios: { inicio: "", fin: "" },
  });

  // Obtener especialistas al cargar el componente
  useEffect(() => {
    const fetchEspecialistas = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/especialistas");
        setEspecialistas(response.data.especialistas);
      } catch (error) {
        console.error("Error al cargar especialistas:", error);
      }
    };
    fetchEspecialistas();
  }, []);

  // Agregar especialista mediante la API
  const agregarEspecialista = async () => {
    try {
      await axios.post("http://localhost:5000/api/especialistas", nuevoEspecialista);
      setEspecialistas([...especialistas, nuevoEspecialista]);
      setNuevoEspecialista({
        nombre: "",
        especialidad: "",
        diasDisponibles: [],
        horarios: { inicio: "", fin: "" },
      });
    } catch (error) {
      console.error("Error al agregar especialista:", error);
    }
  };

  // Borrar especialista mediante la API
  const borrarEspecialista = async (nombre: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/especialistas/${nombre}`);
      setEspecialistas(especialistas.filter((e) => e.nombre !== nombre));
    } catch (error) {
      console.error("Error al borrar especialista:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-gray-100 dark:bg-gray-800 text-black text-center text-lg dark:text-white shadow-lg border-2 border-gray-200 dark:border-0 rounded-lg p-6 mb-5">
        <h1 className="text-xl text-custom-blue dark:text-blue-500 font-bold mb-4">Administrar Especialistas</h1>
        <hr className="mb-5" />
        <table className="table-auto w-full text-base mb-6">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Especialidad</th>
              <th>Días Disponibles</th>
              <th>Horario</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {especialistas.map((especialista, index) => (
              <tr key={index}>
                <td>{especialista.nombre}</td>
                <td>{especialista.especialidad}</td>
                <td>
                  {especialista.diasDisponibles.map((dia) => diasSemana[dia]).join(", ")}
                </td>
                <td>
                  {especialista.horarios.inicio} - {especialista.horarios.fin}
                </td>
                <td>
                  <button
                    className="border py-1 px-4 rounded-lg border-red text-red hover:bg-rose-100 dark:hover:bg-rose-900 dark:hover:text-white"
                    onClick={() => borrarEspecialista(especialista.nombre)}
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 text-black text-center text-lg dark:text-white shadow-lg border-2 border-gray-200 dark:border-0 rounded-lg p-6">
        <h2 className="text-xl font-bold text-custom-blue dark:text-blue-500 mb-2">Agregar especialista disponible</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            agregarEspecialista();
          }}
        >
          <label
            className="block text-xs text-left font-bold mt-2 leading-6 dark:text-white"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <Input
            className="border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 dark:border-white outline-none focus:ring-0 focus:border-blue-700 mb-6 w-full"
            id="nombre"
            name="nombre"
            placeholder="Ingrese el nombre"
            type="text"
            value={nuevoEspecialista.nombre}
            onChange={(e) =>
              setNuevoEspecialista({ ...nuevoEspecialista, nombre: e.target.value })
            }
          />
          
          <label
            className="block text-xs text-left font-bold mt-2 leading-6 dark:text-white"
            htmlFor="especialidad"
          >
            Especialidad
          </label>
          <Select
            className="border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 dark:border-white outline-none focus:ring-0 focus:border-blue-700 w-full"
            id="especialidad"
            name="especialidad"
            variant="standard" 
            placeholder="Especialidad"
            value={nuevoEspecialista.especialidad}
            onChange={(value) =>
              setNuevoEspecialista({ ...nuevoEspecialista, especialidad: value as string })
            }
          >
            {especialidades.map((especialidad) => (
              <Option className="outline-none focus:ring-2 focus:ring-blue-700 dark:bg-gray-700 mb-2" key={especialidad} value={especialidad}>
                {especialidad}
              </Option>
            ))}
          </Select>

          <label
            className="block text-xs text-left font-bold mt-2 leading-6 dark:text-white"
            htmlFor="diasDisponibles"
          >
            Días Disponibles (ej: 1,3,5)
          </label>
          <Input
            className="border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 dark:border-white outline-none focus:ring-0 focus:border-blue-700 mb-6 w-full"
            id="diasDisponibles"
            name="diasDisponibles"
            placeholder="Ingrese los días disponibles"
            type="text"
            value={nuevoEspecialista.diasDisponibles.join(",")}
            onChange={(e) =>
              setNuevoEspecialista({
                ...nuevoEspecialista,
                diasDisponibles: e.target.value.split(",").map(Number),
              })
            }
          />

          <label
            className="block text-xs text-left font-bold mt-2 leading-6 dark:text-white"
            htmlFor="horarioInicio"
          >
            Hora Inicio
          </label>
          <Input
            className="border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 dark:border-white outline-none focus:ring-0 focus:border-blue-700 mb-6 w-full"
            id="horarioInicio"
            name="horarioInicio"
            type="time"
            value={nuevoEspecialista.horarios.inicio}
            onChange={(e) =>
              setNuevoEspecialista({
                ...nuevoEspecialista,
                horarios: { ...nuevoEspecialista.horarios, inicio: e.target.value },
              })
            }
          />

          <label
            className="block text-xs text-left font-bold mt-2 leading-6 dark:text-white"
            htmlFor="horarioFin"
          >
            Hora Fin
          </label>
          <Input
            className="border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 dark:border-white outline-none focus:ring-0 focus:border-blue-700 mb-6 w-full"
            id="horarioFin"
            name="horarioFin"
            type="time"
            value={nuevoEspecialista.horarios.fin}
            onChange={(e) =>
              setNuevoEspecialista({
                ...nuevoEspecialista,
                horarios: { ...nuevoEspecialista.horarios, fin: e.target.value },
              })
            }
          />

          <button type="submit" className="border text-base border-custom-blue text-custom-blue dark:border-blue-300 dark:text-blue-300 py-2 px-4 mt-5 rounded-lg m-2 hover:bg-custom-blue hover:text-white dark:hover:bg-blue-700 dark:hover:text-white">
            Agregar Especialista
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdministrarEspecialista;
