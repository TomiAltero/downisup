import { useEffect, useState } from "react";
import { getAll } from "@/lib/utils";

const InfoMedical = ({ onClose, hijoId }: { onClose: () => void, hijoId: number }) => {
  const [sessionData, setSessionData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAll(hijoId);
        console.log("Datos obtenidos de la sesión:", data);

        if (data && data.psychologicalTherapies && data.psychologicalTherapies.length > 0) {
          const [firstTherapy] = data.psychologicalTherapies;
          setSessionData({
            ...data,
            psychologicalTherapy: firstTherapy,
          });
        } else {
          console.error("No se encontraron datos de la sesión.");
        }
      } catch (error) {
        console.error("Error al obtener los datos de la sesión:", error);
      }
    };

    fetchData();
  }, [hijoId]);

  if (!sessionData || !sessionData.hijo) {
    return <div>Cargando datos...</div>;
  }

  const therapy = sessionData.psychologicalTherapy;
  const hijo = sessionData.hijo; 

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white dark:bg-boxdark p-8 rounded-lg shadow-lg w-[100vw] max-w-6xl h-[85vh] max-h-[85vh] overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 bg-red-500 rounded-full p-2"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold mb-6 text-blue-900 ">
          Informe de Sesión Psicológica: {hijo.nombre} {hijo.apellido || "Nombre del paciente no disponible"}
        </h2>
        <div className="mt-6 space-y-6 text-left">
          <div>
            <h3 className="text-xl font-semibold text-blue-700">Objetivos de la Sesión</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {therapy?.objetivos || "No disponibles"}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-700">Descripción de la Sesión</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {therapy?.descripcion || "No disponible"}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-700">Observaciones</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {therapy?.observaciones || "No disponibles"}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-700">Plan de Acción</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {therapy?.planAccion || "No hay plan de acción disponible"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoMedical;

