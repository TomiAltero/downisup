import { useState, useEffect } from "react";

const Ajustes = ({ onClose }: { onClose: () => void }) => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Retrieve the stored value or default to false
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode === "true";
  });
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode.toString());
      return newMode;
    });
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleChangeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-boxdark p-4 rounded-lg shadow-lg w-96">
        <button
          className="top-2 ml-80 text-gray-600 dark:text-gray-400 bg-red-500 rounded-full p-1"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold -mt-4 mb-4 text-blue-900 dark:text-white">
          Ajustes
        </h2>
        <div className="mt-2 space-y-4 text-left items-center">
          <div className="flex justify-between items-center">
            <label className="block text-base font-medium text-black dark:text-white">
              Modo Oscuro
            </label>
            <button
              onClick={toggleDarkMode}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                darkMode ? "bg-blue-900" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  darkMode ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
          <div className="flex justify-between items-center">
            <label className="block text-base font-medium text-black dark:text-white">
              Notificaciones
            </label>
            <button
              onClick={toggleNotifications}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notificationsEnabled ? "bg-blue-900" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notificationsEnabled ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ajustes;
