"use client";
import React, { useState, useEffect } from "react";
import {
  Calendar,
  Document,
  Profile2User,
  Home,
  ArrowDown2,
  Clock,
} from "iconsax-react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCentralStore } from "@/Store";
import axios from "axios";

function Sidebar() {
  const pathname = usePathname();
  const { setIsSidebarOpen, isSidebarOpen } = useCentralStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);
  const [isMedicosDropdownOpen, setIsMedicosDropdownOpen] =
    useState<boolean>(false);
  const [usuario, setUsuario] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const obtenerPerfilUsuario = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get(
            "https://downisup-api-production.up.railway.app/api/usuarios/perfil",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          setUsuario(response.data.usuario);
        }
        setLoading(false);
      } catch (error) {
        setError("Error al obtener el perfil del usuario");
        setLoading(false);
      }
    };

    obtenerPerfilUsuario();
  }, []);

  return (
    <main>
      <div className="w-60 shrink-0 h-screen sticky top-0 overflow-hidden bg-white dark:bg-gray-900 md:block hidden">
        <div className="w-full h-full bg-custom-blue bg-opacity-10 border-r dark:border-gray-800">
          <Link href="/application">
            <div className="p-3 md:p-6 flex cursor-pointer group items-center gap-2 h-1/8">
              <div>
                <h1 className="text-xl font-bold text-blue-800 dark:text-white text-center mx-5">
                  DownIsUpApp
                </h1>
              </div>
            </div>
          </Link>

          <hr className="bg-gray-400 dark:bg-gray-700 mx-4" />

          <div className="flex flex-col h-full justify-between">
            <div className="pt-6 text-gray-500 dark:text-gray-300 font-medium space-y-2 md:px-2 text-sm">
              <Link
                href="/application"
                className={`flex ${
                  pathname === "/application"
                    ? "text-blue-700 dark:text-blue-300"
                    : ""
                } hover:text-blue-700 dark:hover:text-blue-300 duration-200 px-6 py-2 items-center gap-2 transition-all ease-in-out`}
              >
                <Home variant="Outline" size={16} />
                Inicio
              </Link>

              {usuario && usuario.tipoUsuarioId === 3 ? (
                <div>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`flex justify-between items-center ${
                      pathname === "/app/pacientes"
                        ? "text-blue-700 dark:text-blue-300"
                        : ""
                    } hover:text-blue-700 dark:hover:text-blue-300 duration-200 px-6 py-2 w-full transition-all ease-in-out`}
                  >
                    <div className="flex items-center gap-2">
                      <Profile2User size={16} />
                      Pacientes
                    </div>
                    <ArrowDown2 size={16} />
                  </button>
                  {isDropdownOpen && (
                    <div className="pl-10 mt-2 space-y-2 mb-2">
                      <Link
                        href="/application/ver-pacientes"
                        className={`block ${
                          pathname === "/ver-pacientes"
                            ? "text-blue-700 dark:text-blue-300"
                            : ""
                        } hover:text-blue-700 dark:hover:text-blue-300 duration-200 px-6 py-2 transition-all ease-in-out`}
                      >
                        Ver Pacientes
                      </Link>
                      <Link
                        href="/application/agregar-paciente"
                        className={`block ${
                          pathname === "/agregar-paciente"
                            ? "text-blue-700 dark:text-blue-300"
                            : ""
                        } hover:text-blue-700 dark:hover:text-blue-300 duration-200 px-6 py-2 transition-all ease-in-out`}
                      >
                        Agregar Paciente
                      </Link>
                    </div>
                  )}
                  {/* Botón Administrar con Dropdown */}
                  <button
                    onClick={() => setIsAdminDropdownOpen(!isAdminDropdownOpen)}
                    className={`flex justify-between items-center ${
                      pathname && pathname.startsWith("/administrar")
                        ? "text-blue-700 dark:text-blue-300"
                        : ""
                    } hover:text-blue-700 dark:hover:text-blue-300 duration-200 px-6 py-2 w-full transition-all ease-in-out`}
                  >
                    <div className="flex items-center gap-2">
                      <Profile2User size={16} />
                      Administrar
                    </div>
                    <ArrowDown2 size={16} />
                  </button>

                  {/* Dropdown de Administrar */}
                  {isAdminDropdownOpen && (
                    <div className="pl-10 mt-2 space-y-2 mb-2">
                      <Link
                        href="/application/administrar-especialista"
                        className={`block ${
                          pathname === "/application/administrar-especialista"
                            ? "text-blue-700 dark:text-blue-300"
                            : ""
                        } hover:text-blue-700 dark:hover:text-blue-300 duration-200 px-6 py-2 transition-all ease-in-out`}
                      >
                        Admin Especialistas
                      </Link>

                      <Link
                        href="/application/administrar-turnos"
                        className={`block ${
                          pathname === "/application/administrar-turnos"
                            ? "text-blue-700 dark:text-blue-300"
                            : ""
                        } hover:text-blue-700 dark:hover:text-blue-300 duration-200 px-6 py-2 transition-all ease-in-out`}
                      >
                        Admin Turnos
                      </Link>
                    </div>
                  )}
                </div>
              ) : usuario && usuario.tipoUsuarioId === 2 ? (
                <div>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`flex justify-between items-center ${
                      pathname?.startsWith("/application/datos-medicos")
                        ? "text-blue-700 dark:text-blue-300"
                        : ""
                    } hover:text-blue-700 dark:hover:text-blue-300 duration-200 px-6 py-2 w-full transition-all ease-in-out`}
                  >
                    <div className="flex items-center gap-2">
                      <Profile2User size={16} />
                      Datos Médicos
                    </div>
                    <ArrowDown2 size={16} />
                  </button>
                  {isDropdownOpen && (
                    <div className="pl-10 mt-2 space-y-2">
                      <Link
                        href="/application/datos-medicos"
                        className={`block ${
                          pathname === "/application/datos-medicos/ver"
                            ? "text-blue-700 dark:text-blue-300"
                            : ""
                        } hover:text-blue-700 dark:hover:text-blue-300 duration-200 py-1 transition-all ease-in-out`}
                      >
                        Ver Datos Médicos
                      </Link>
                      <Link
                        href="/application/formulario-medico"
                        className={`block ${
                          pathname === "/application/datos-medicos/agregar"
                            ? "text-blue-700 dark:text-blue-300"
                            : ""
                        } hover:text-blue-700 dark:hover:text-blue-300 duration-200 py-1 transition-all ease-in-out`}
                      >
                        Agregar Datos Médicos
                      </Link>
                      <Link
                        href="/application/datos-medicos/editar"
                        className={`block ${
                          pathname === "/application/datos-medicos/editar"
                            ? "text-blue-700 dark:text-blue-300"
                            : ""
                        } hover:text-blue-700 dark:hover:text-blue-300 duration-200 py-1 transition-all ease-in-out`}
                      >
                        Editar Datos Médicos
                      </Link>
                    </div>
                  )}
                </div>
              ) : usuario && usuario.tipoUsuarioId === 1 ? (
                <div>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`flex justify-between items-center ${
                      pathname === "/app/teams"
                        ? "text-blue-700 dark:text-blue-300"
                        : ""
                    } hover:text-blue-700 dark:hover:text-blue-300 duration-200 px-6 py-2 w-full transition-all ease-in-out`}
                  >
                    <div className="flex items-center gap-2">
                      <Profile2User size={16} />
                      Mis Hijos
                    </div>
                    <ArrowDown2 size={16} />
                  </button>
                  {isDropdownOpen && (
                    <div className="pl-10 mt-2 space-y-2">
                      <Link
                        href="/application/view-children"
                        className={`block ${
                          pathname === "/panel-hijos"
                            ? "text-blue-700 dark:text-blue-300"
                            : ""
                        } hover:text-blue-700 dark:hover:text-blue-300 duration-200 py-1 transition-all ease-in-out`}
                      >
                        Ver Hijos
                      </Link>
                    </div>
                  )}
                </div>
              ) : null}
              <Link
                href="/application/schedules"
                className={`flex ${
                  pathname === "/application/horarios"
                    ? "text-blue-700 dark:text-blue-300"
                    : ""
                } hover:text-blue-700 dark:hover:text-blue-300 duration-200 px-6 py-2 items-center gap-2 transition-all ease-in-out`}
              >
                <Calendar size={16} />
                Horarios
              </Link>

              <Link
                href="/application/chat"
                className={`flex ${
                  pathname === "/application/chat"
                    ? "text-blue-700 dark:text-blue-300"
                    : ""
                } hover:text-blue-700 dark:hover:text-blue-300 duration-200 px-6 py-2 items-center gap-2 transition-all ease-in-out`}
              >
                <Document size={16} />
                Agendar turno
              </Link>
            </div>

            <div>
              <hr className="bg-gray-400 dark:bg-gray-700 mx-4 my-4" />
            </div>
          </div>
        </div>
      </div>
      {/* Botón para abrir el sidebar */}
      <button
        className="mx-1 py-1 p-1 mt-4 ml-3 text-lg text-gray-600 bg-gray-200 border-gray-600 shadow-md border-spacing-2 rounded-md md:hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        {/* Icono de hamburguesa con tres líneas completas */}
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar responsivo */}
      <Transition show={isSidebarOpen}>
    <Dialog
      as="div"
      className="fixed inset-0 z-40 flex"
      onClose={() => setIsSidebarOpen(false)}
    >
      {/* Fondo oscuro */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
      <Transition.Child
        enter="transform transition-transform ease-in-out duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition-transform ease-in-out duration-300"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <Dialog.Panel className="relative bg-white w-64 h-full shadow-lg">
          <button
            className="absolute top-4 right-4 text-gray-600"
            onClick={() => setIsSidebarOpen(false)}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold text-blue-800">DownIsUpApp</h2>
            <hr className="my-4" />

            {/* Navegación con iconos */}
            <nav className="flex flex-col space-y-2 text-base">
              <Link
                href="/application"
                onClick={() => setIsSidebarOpen(false)}
                className={`flex gap-2 ${
                  pathname === "/application"
                    ? "text-blue-700 dark:text-blue-300"
                    : "text-gray-500 dark:text-gray-400"
                } hover:text-blue-700 dark:hover:text-blue-300 duration-200 px-1 py-2 transition-all ease-in-out`}
              >
                <Home variant="Outline" size={17} />
                Inicio
              </Link>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center gap-2 ${
                  pathname === "/application/medical-panel"
                    ? "text-blue-700 dark:text-blue-300"
                    : "text-gray-500 dark:text-gray-400"
                } hover:text-blue-700 dark:hover:text-blue-300 duration-200 px-1 py-2 transition-all ease-in-out`}
              >
                <Profile2User size={16} />
                <Link href="/application/medical-panel">Ver Hijos</Link>
              </button>

              <Link
              href="/application/schedules"
              onClick={() => setIsSidebarOpen(false)}
              className={`flex gap-2 ${
                pathname === "/application/schedules"
                  ? "text-blue-700 dark:text-blue-300"
                  : "text-gray-500 dark:text-gray-400"
              } hover:text-blue-700 dark:hover:text-blue-300 duration-200 px-1 py-2 transition-all ease-in-out`}
            >
              <Calendar size={17} />
              Horarios
            </Link>

            <Link
              href="/application/chat"
              onClick={() => setIsSidebarOpen(false)}
              className={`flex gap-2 ${
                pathname === "/application/schedules"
                  ? "text-blue-700 dark:text-blue-300"
                  : "text-gray-500 dark:text-gray-400"
              } hover:text-blue-700 dark:hover:text-blue-300 duration-200 px-1 py-2 transition-all ease-in-out`}
            >
              <Clock size={17} />
              Agendar turno
            </Link>
            </nav>
          </div>
        </Dialog.Panel>
      </Transition.Child>
    </Dialog>
  </Transition>

    </main>
  );
}

export default Sidebar;
