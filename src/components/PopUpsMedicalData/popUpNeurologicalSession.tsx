import { useEffect, useState } from "react";
import { getNeurologicalTherapies } from "@/lib/utils";

const PopUpNeurologicalTherapies = ({ onClose, hijoId }: { onClose: () => void, hijoId: number }) => {
  const [sessionData, setSessionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNeurologicalTherapies(hijoId);
        console.log("Datos obtenidos de la sesión:", data);

        if (data && data.neurologicalTherapies && data.neurologicalTherapies.length > 0) {
          const [firstTherapy] = data.neurologicalTherapies;
          setSessionData({
            ...data,
            neurologicalTherapies: firstTherapy,
          });
        } else {
          setSessionData({
            ...data,
            neurologicalTherapies: null,
          });
        }
      } catch (error) {
        console.error("Error al obtener los datos de la sesión:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [hijoId]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative bg-white dark:bg-boxdark p-8 rounded-lg shadow-lg w-[100vw] max-w-6xl h-[85vh] max-h-[85vh] overflow-y-auto">
          <div className="text-center">Cargando datos...</div>
        </div>
      </div>
    );
  }

  const therapy = sessionData?.neurologicalTherapies;
  const hijo = sessionData?.hijo;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white dark:bg-boxdark p-8 rounded-lg shadow-lg w-[100vw] max-w-6xl h-[85vh] max-h-[85vh] overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 bg-red-500 rounded-full p-2"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold mb-6 text-blue-900">
          Informe de Sesión Neurológica: {hijo?.nombre || "Nombre del paciente no disponible"} {hijo?.apellido || ""}
        </h2>

        {therapy ? (
          <div className="mt-6 space-y-6 text-left">
            <div>
              <h3 className="text-xl font-semibold text-blue-700">Objetivos de la Sesión</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {therapy?.objectives || "No hay Objetivos de la Sesion Disponible."}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700">Descripción de la Sesión</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {therapy?.description || "No hay Descripcion de la Sesion Disponible."}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700">Observaciones</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {therapy?.observations || "No Hay Observaciones Disponibles."}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700">Plan de Acción</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {therapy?.planAccion || "No hay plan de acción disponible."}
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-6 text-gray-700 dark:text-gray-300">
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">No hay terapias neurológicas disponibles.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopUpNeurologicalTherapies;

