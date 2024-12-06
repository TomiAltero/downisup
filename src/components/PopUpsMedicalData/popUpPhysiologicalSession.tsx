import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getPhysiologyTherapies } from "@/lib/utils";

const PopUpPhysiologycalTherapies = ({
  onClose,
  hijoId,
}: {
  onClose: () => void;
  hijoId: number;
}) => {
  const [sessionData, setSessionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPhysiologyTherapies(hijoId);
        console.log("Datos obtenidos de la sesión:", data);

        if (
          data &&
          data.physiologicalTherapies &&
          data.physiologicalTherapies.length > 0
        ) {
          setSessionData(data);
        } else {
          setSessionData({
            ...data,
            physiologicalTherapies: [],
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
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="relative bg-white dark:bg-boxdark p-8 rounded-lg shadow-lg w-[100vw] max-w-6xl h-[85vh] max-h-[85vh] overflow-y-auto">
          <div className="text-center">Cargando datos...</div>
        </div>
      </div>
    );
  }

  const hijo = sessionData?.hijo;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      />
      <motion.div
        className="relative bg-white dark:bg-boxdark p-8 rounded-lg shadow-lg w-[100vw] max-w-6xl h-[85vh] max-h-[85vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <button
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 bg-red-500 rounded-full p-2"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold mb-6 text-blue-900">
          Informe de Sesión Fisiológica:{" "}
          {hijo?.nombre || "Nombre del paciente no disponible"}{" "}
          {hijo?.apellido || ""}
        </h2>

        {sessionData?.physiologicalTherapies?.length > 0 ? (
          sessionData.physiologicalTherapies.map(
            (therapy: any, index: number) => (
              <div key={index} className="mt-6 space-y-6 text-left">
                <div className="mb-4">
                  <p className="text-sm text-gray-500">
                    {new Date(therapy.date).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700">
                    Objetivos de la Sesión
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {therapy.objectives ||
                      "No hay Objetivos de la Sesion Disponible."}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700">
                    Descripción de la Sesión
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {therapy.description ||
                      "No hay Descripcion de la Sesion Disponible."}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700">
                    Observaciones
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {therapy.observations ||
                      "No Hay Observaciones Disponibles."}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700">
                    Plan de Acción
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {therapy.planAccion || "No hay plan de acción disponible."}
                  </p>
                </div>
                {index < sessionData.physiologicalTherapies.length - 1 && (
                  <hr className="my-6" />
                )}
              </div>
            ),
          )
        ) : (
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            No hay terapias fisiológicas disponibles.
          </p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default PopUpPhysiologycalTherapies;
