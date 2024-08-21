const InfoMedical = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white dark:bg-boxdark p-8 rounded-lg shadow-lg w-[100vw] max-w-6xl h-[85vh] max-h-[85vh] overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 bg-red-500 rounded-full p-2"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold mb-6 text-blue-900 underline">
          Informe de Sesión: Hector Altero 
        </h2>
        <div className="mt-6 space-y-6 text-left">
          <div>
            <h3 className="text-xl font-semibold text-blue-700">Objetivos de la Sesión</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              1. Explorar las causas subyacentes de la ansiedad que Juan ha estado experimentando.
              <br />
              2. Identificar y desafiar patrones de pensamiento negativos.
              <br />
              3. Desarrollar estrategias para manejar el estrés y mejorar el bienestar general.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-700">Descripción de la Sesión</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Durante la sesión, Juan expresó sentimientos de ansiedad relacionados con su trabajo y
              problemas personales. Se abordaron sus preocupaciones sobre el equilibrio entre la vida
              laboral y personal, y se discutió el impacto de su entorno en su estado emocional.
              <br />
              Se utilizó la Terapia Cognitivo-Conductual para identificar y desafiar los patrones de
              pensamiento que contribuyen a su ansiedad. Juan participó activamente en las actividades
              propuestas y mostró apertura para aplicar las técnicas en su vida diaria.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-700">Observaciones</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Juan mostró un nivel moderado de angustia al comenzar la sesión, pero se volvió más
              relajado a medida que avanzaba. Su disposición para trabajar en las tareas sugeridas
              y su auto-reflexión durante la sesión son indicativos de un compromiso con el proceso
              terapéutico.
              <br />
              Se observó que Juan tiene un fuerte deseo de mejorar su bienestar, pero también enfrenta
              desafíos significativos en cuanto a su autoeficacia y manejo del estrés. Se recomienda
              continuar con la terapia y establecer objetivos específicos para abordar estos aspectos.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-700">Plan de Acción</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              1. Juan continuará con sesiones semanales para mantener el enfoque en la reducción de la
              ansiedad y el estrés.
              <br />
              2. Se le asignarán tareas específicas para practicar técnicas de manejo del estrés y
              autorreflexión.
              <br />
              3. Se evaluará el progreso en la próxima sesión y se ajustará el plan de tratamiento según
              sea necesario.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoMedical;
