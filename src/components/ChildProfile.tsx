"use client";
import { useEffect, useState, useRef } from "react";
import { getHijoProfile } from "@/lib/utils";
import { Hijo } from "@/types";
import { ArrowDown2, ArrowUp2, Profile } from "iconsax-react";
import { useTerapiasContext } from "@/contexts/TerapiasContext";

export default function ChildProfile() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hijos, setHijos] = useState<Hijo[]>([]);
  const { selectedHijo, setSelectedHijo } = useTerapiasContext();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem("token");
      if (!token) {
        return null;
      }
      const { hijos } = await getHijoProfile({ token });
      setHijos(hijos);

      if (hijos.length > 0) {
        setSelectedHijo(hijos[0]);
      }
    }
    fetchData();
  }, [setSelectedHijo]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleSelectHijo = (hijo: Hijo) => {
    setSelectedHijo(hijo);
    setIsDropdownOpen(false);
  };

  const dropdownItems = hijos.map((hijo) => {
    return [
      {
        icon: <Profile size={20} className="text-black dark:text-white" />,
        text: `${hijo.nombre} ${hijo.apellido}`,
        onClick: () => handleSelectHijo(hijo),
      },
    ];
  }).flat();

  return (
    <div className="relative border-2 p-2 rounded-xl w-auto bg-white dark:bg-gray-900">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="ml-2">
          <div className="text-sm font-semibold text-black dark:text-white">
            {selectedHijo ? (
              <div className="flex items-center">
                <Profile size={20} className="text-black dark:text-white" />
                <span className="ml-2">{`${selectedHijo.nombre} ${selectedHijo.apellido}`}</span>
              </div>
            ) : (
              "Cargando..."
            )}
          </div>
        </div>
        <div className="ml-2">
          {isDropdownOpen ? (
            <ArrowUp2 size={20} className="text-gray-600 dark:text-gray-400" />
          ) : (
            <ArrowDown2 size={20} className="text-gray-600 dark:text-gray-400" />
          )}
        </div>
      </div>
      {selectedHijo && isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black dark:ring-white ring-opacity-5 focus:outline-none z-10 transition-transform duration-200 ease-in-out"
        >
          <div className="py-2">
            {dropdownItems.map((item, index) => (
              <div
                key={index}
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 cursor-pointer"
                onClick={() => {
                  if (item.onClick) item.onClick();
                }}
              >
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-2">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
