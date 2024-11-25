import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AlertCustomStyles,
  AlertCustomStylesRojo,
  LoadingSpinner,
} from "./materialComponent";
import { getHijoProfile } from "@/lib/utils";
import { now } from "next-auth/client/_utils";

const ChatBotComponent = () => {
  const [especialistas, setEspecialistas] = useState([]);
  const [step, setStep] = useState(1);
  const [selectedEspecialista, setSelectedEspecialista] = useState(null);
  const [diasDisponibles, setDiasDisponibles] = useState([]);
  const [selectedDia, setSelectedDia] = useState(null);
  const [horarios, setHorarios] = useState([]);
  const [nombrePaciente, setNombrePaciente] = useState("");
  const [perfilHijo, setPerfilHijo] = useState([]);
  const [padre, setPadre] = useState("Tomas Altero"); // Asignar valor de padre
  const [fechaTurno, setFechaTurno] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchHijoProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const profile = await getHijoProfile({ token });
          setPerfilHijo(profile.hijos);
        }
      } catch (error) {
        console.error("Error al obtener el perfil del hijo:", error);
      }
    };

    fetchHijoProfile();

    const fetchEspecialistas = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/turnos/especialistas"
      );
      setEspecialistas(response.data);
    };
    fetchEspecialistas();
  }, []);

  useEffect(() => {
    if (selectedEspecialista && selectedDia) {
      const fetchHorarios = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/turnos/disponibilidad/${selectedEspecialista.nombre}/${selectedDia}`
          );
          setHorarios(response.data.disponibilidad);
        } catch (error) {
          console.error("Error al obtener horarios disponibles:", error);
          alert("Error al obtener horarios disponibles.");
        }
      };
      fetchHorarios();
    }
  }, [selectedEspecialista, selectedDia]);

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleEspecialistaSelect = (especialista) => {
    setSelectedEspecialista(especialista);
    setDiasDisponibles(especialista.diasDisponibles);
    setStep(2);
  };

  const handleDiaSelect = (dia) => {
    setSelectedDia(dia);
    setFechaTurno(new Date().toISOString().split('T')[0]); // Asignar la fecha actual en formato fecha
    setStep(3);
  }

  const handleGuardarTurno = async (horario) => {
    if (!nombrePaciente) {
      setAlertMessage("El nombre del paciente es obligatorio");
      setIsError(true);
      return;
    }

    const turno = {
      especialista: selectedEspecialista.nombre,
      dia: selectedDia,
      horario,
      nombrePaciente,
      padre,
      fechaTurno,
    };

    try {
      await axios.post("http://localhost:5000/api/turnos/guardar/", turno);
      setAlertMessage("Turno guardado exitosamente");
      setIsError(false);
      resetState();
      setStep(1);
    } catch (error) {
      setAlertMessage("Error al guardar el turno. Inténtalo nuevamente");
      setIsError(true);
    }
  };

  const resetState = () => {
    setSelectedEspecialista(null);
    setSelectedDia(null);
    setHorarios([]);
    setNombrePaciente("");
  };

  const volverPasoAnterior = () => {
    setStep(step - 1);
    if (step === 2) resetState();
  };

  return (
    <div className=" dark:text-white">
      {alertMessage &&
        (isError ? (
          <AlertCustomStylesRojo message={alertMessage} />
        ) : (
          <AlertCustomStyles message={alertMessage} />
        ))}

      <h2 className="text-center text-xl mb-4 text-black dark:text-white">
        Completa el formulario paso a paso para agendar un turno médico:
      </h2>

      <div className="mt-4 bg-gray-100 dark:bg-gray-800 text-base shadow-xl dark:border-gray-800 border-2 rounded-lg p-6 max-h-[500px] max-w-2xl mx-auto overflow-y-auto">
        <h1 className="text-center text-2xl font-semibold mb-4 text-black dark:text-white">
          Turnero
        </h1>

        {step > 1 && (
          <button
            onClick={volverPasoAnterior}
            className="border py-1 px-4 rounded-lg mb-4 border-red text-red hover:bg-rose-100 dark:hover:bg-rose-900 dark:hover:text-white"
          >
            Volver
          </button>
        )}

        {step === 1 && (
          <div className="text-center">
            <p className="mb-2 text-black dark:text-gray-300">
              Seleccionar el especialista:
            </p>
            {especialistas.map((especialista) => (
              <button
                key={especialista.nombre}
                onClick={() => handleEspecialistaSelect(especialista)}
                className="border border-custom-blue text-custom-blue dark:border-blue-300 dark:text-blue-300 py-2 px-4 rounded-lg m-2 hover:bg-custom-blue hover:text-white dark:hover:bg-blue-700 dark:hover:text-white"
              >
                {especialista.nombre} - {especialista.especialidad}
              </button>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className="text-center">
            <p className="mb-2 -mt-11 mx-20 text-black dark:text-gray-300">
              Seleccionar día disponible:
            </p>
            {diasDisponibles.map((dia) => (
              <button
                key={dia}
                onClick={() => handleDiaSelect(dia)}
                className="border border-custom-blue text-custom-blue dark:border-blue-300 dark:text-blue-300 py-2 px-4 rounded-lg m-2 hover:bg-custom-blue hover:text-white dark:hover:bg-blue-700 dark:hover:text-white"
              >
                {
                  [
                    "Domingo",
                    "Lunes",
                    "Martes",
                    "Miércoles",
                    "Jueves",
                    "Viernes",
                    "Sábado",
                  ][dia]
                }
              </button>
            ))}
          </div>
        )}

        {step === 3 && (
          <div className="text-center">
            <p className="mb-5 -mt-11 text-black dark:text-gray-300">
              Seleccione un horario disponible:
            </p>
            {horarios.map((h, index) => (
              <button
                key={index}
                onClick={() => !h.ocupado && handleGuardarTurno(h.horario)}
                className={`border border-gray-500 py-2 px-4 rounded-lg m-2 ${
                  h.ocupado
                    ? "border-red text-red bg-rose-100 dark:bg-rose-900 cursor-not-allowed"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
                disabled={h.ocupado}
              >
                {h.horario}
              </button>
            ))}
          </div>
        )}

        {step === 3 && (
          <div className="text-center mt-4">
            <p className="mb-2 text-black dark:text-gray-300">
              Haz click y selecciona el hijo que requiera turno:
            </p>
            {perfilHijo.map((hijo) => (
              <button
                key={hijo.id}
                onClick={() => setNombrePaciente(hijo.nombre)}
                className={`border border-custom-blue text-custom-blue dark:border-blue-300 dark:text-blue-300 py-2 px-4 rounded-lg m-2 ${
                  nombrePaciente === hijo.nombre
                    ? "bg-custom-blue text-white dark:bg-blue-700"
                    : "hover:bg-custom-blue hover:text-white dark:hover:bg-blue-700 dark:hover:text-white"
                }`}
              >
                {hijo.nombre} {hijo.apellido}
              </button>
            ))}
          </div>
        )}
      </div>
      <p className="mb-2 text-gray-600 text-sm mt-5 dark:text-gray-300 text-center">
        * Los horarios de cada especialista se pueden ver en horarios
      </p>
    </div>
  );
};

export default ChatBotComponent;
