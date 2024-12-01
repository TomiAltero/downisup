import { useEffect, useState } from "react";
import { getPsycholgyTherapies } from "@/lib/utils";

const PopUpPsychologycalSession = ({ onClose, hijoId }: { onClose: () => void, hijoId: number }) => {
  const [sessionData, setSessionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPsycholgyTherapies(hijoId);
        console.log("Datos obtenidos de la sesión:", data);

        if (data && data.psychologicalTherapies && data.psychologicalTherapies.length > 0) {
          setSessionData(data);
        } else {
          setSessionData({
            ...data,
            psychologicalTherapies: [],
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
          Informe de Sesión Psicológica: {hijo?.nombre || "Nombre del paciente no disponible"} {hijo?.apellido || ""}
        </h2>

        {sessionData?.psychologicalTherapies?.length > 0 ? (
          sessionData.psychologicalTherapies.map((therapy: any, index: number) => (
            <div key={index} className="mt-6 space-y-6 text-left">
              <div className="mb-4">
                <p className="text-sm text-gray-500">
                  {new Date(therapy.fecha).toLocaleDateString()}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-700">Objetivos de la Sesión</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {therapy.objetivos || "No hay Objetivos de la Sesion Disponible."}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-700">Descripción de la Sesión</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {therapy.descripcion || "No hay Descripcion de la Sesion Disponible."}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-700">Observaciones</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {therapy.observaciones || "No Hay Observaciones Disponibles."}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-700">Plan de Acción</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {therapy.planAccion || "No hay plan de acción disponible."}
                </p>
              </div>
              {index < sessionData.psychologicalTherapies.length - 1 && <hr className="my-6" />}
            </div>
          ))
        ) : (
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            No hay terapias Psicológicas disponibles.
            </p>        
          )}
      </div>
    </div>
  );
};

export default PopUpPsychologycalSession;
