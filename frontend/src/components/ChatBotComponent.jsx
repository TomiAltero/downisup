import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AlertCustomStyles,
  AlertCustomStylesRojo,
  LoadingSpinner,
} from "./materialComponent";
import { getHijoProfile } from "@/lib/utils";

const ChatBotComponent = () => {
  const [especialistas, setEspecialistas] = useState([]);
  const [step, setStep] = useState(1);
  const [selectedEspecialista, setSelectedEspecialista] = useState(null);
  const [diasDisponibles, setDiasDisponibles] = useState([]);
  const [selectedDia, setSelectedDia] = useState(null);
  const [horarios, setHorarios] = useState([]);
  const [nombrePaciente, setNombrePaciente] = useState(""); // Inicializado como vacío
  const [perfilHijo, setPerfilHijo] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchHijoProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const profile = await getHijoProfile({ token });
          console.log(profile.hijos);
          setPerfilHijo(profile.hijos);
        }
      } catch (error) {
        console.error("Error al obtener el perfil del hijo:", error);
      }
    };

    fetchHijoProfile();

    const fetchEspecialistas = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/turnos/especialistas",
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
            `http://localhost:5000/api/turnos/disponibilidad/${selectedEspecialista.nombre}/${selectedDia}`,
          );
          setHorarios(response.data.disponibilidad);
        } catch (error) {
          console.error("Error al obtener horarios disponibles:", error);
          alert(
            "Error al obtener horarios disponibles. Verifica que el backend esté funcionando y los datos sean correctos.",
          );
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

  const handleEspecialistaSelect = (especialista) => {
    setSelectedEspecialista(especialista);
    setDiasDisponibles(especialista.diasDisponibles);
    setStep(2);
  };

  const handleDiaSelect = (dia) => {
    setSelectedDia(dia);
    setStep(3);
  };

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
    <div className="">
      {alertMessage &&
        (isError ? (
          <AlertCustomStylesRojo message={alertMessage} />
        ) : (
          <AlertCustomStyles message={alertMessage} />
        ))}

      <div className="mt-4 bg-white text-base shadow-xl border-2 rounded-lg p-6 max-h-[500px] max-w-2xl mx-auto overflow-y-auto">
        <h2 className="text-center text-2xl font-semibold mb-4 text-black">
          Chat Turnero
        </h2>

        {step > 1 && (
          <button
            onClick={volverPasoAnterior}
            className="border border-red text-red py-1 px-4 rounded-lg mb-4 hover:bg-rose-100"
          >
            Volver
          </button>
        )}

        {step === 1 && (
          <div className="text-center">
            <p className="mb-2 text-black">Seleccione un especialista:</p>
            {especialistas.map((especialista) => (
              <button
                key={especialista.nombre}
                onClick={() => handleEspecialistaSelect(especialista)}
                className="border border-custom-blue text-custom-blue py-2 px-4 rounded-lg m-2 hover:bg-custom-blue hover:text-white"
              >
                {especialista.nombre} - {especialista.especialidad}
              </button>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className="text-center">
            <p className="mb-2 text-black">Seleccione un día:</p>
            {diasDisponibles.map((dia) => (
              <button
                key={dia}
                onClick={() => handleDiaSelect(dia)}
                className="border border-custom-blue text-custom-blue py-2 px-4 rounded-lg m-2 hover:bg-custom-blue hover:text-white"
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
            <p className="mb-2 text-black">Seleccione un horario disponible:</p>
            {horarios.map((h, index) => (
              <button
                key={index}
                onClick={() => !h.ocupado && handleGuardarTurno(h.horario)}
                className={`border border-gray-500 py-2 px-4 rounded-lg m-2 ${
                  h.ocupado
                    ? "bg-red text-white cursor-not-allowed"
                    : "text-gray-700 hover:bg-gray-200"
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
            <p className="mb-2 text-black">
              Haz click y selecciona el hijo que requiera turno:
            </p>
            {perfilHijo.map((hijo) => (
              <button
                key={hijo.id}
                onClick={() => setNombrePaciente(hijo.nombre)}
                className={`border border-custom-blue text-custom-blue py-2 px-4 rounded-lg m-2 ${
                  nombrePaciente === hijo.nombre
                    ? "bg-custom-blue text-white"
                    : "hover:bg-custom-blue hover:text-white"
                }`}
              >
                {hijo.nombre} {hijo.apellido}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBotComponent;
