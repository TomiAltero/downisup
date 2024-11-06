"use client";
import React, { useState, useEffect } from "react";
import {
  Calendar,
  Document,
  Profile2User,
  Home,
  ArrowDown2,
} from "iconsax-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCentralStore } from "@/Store";
import axios from "axios";

function Sidebar() {
  const pathname = usePathname();
  const { setIsSidebarOpen, isSidebarOpen } = useCentralStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isMedicosDropdownOpen, setIsMedicosDropdownOpen] = useState<boolean>(false);
  const [usuario, setUsuario] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const obtenerPerfilUsuario = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get(
            "http://localhost:5000/api/usuarios/perfil",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
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
    <div className="w-60 shrink-0 md:block h-screen sticky top-0 overflow-hidden bg-white dark:bg-gray-900">
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
                pathname === "/application" ? "text-blue-700 dark:text-blue-300" : ""
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
                    pathname === "/app/pacientes" ? "text-blue-700 dark:text-blue-300" : ""
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
                        pathname === "/ver-pacientes" ? "text-blue-700 dark:text-blue-300" : ""
                      } hover:text-blue-700 dark:hover:text-blue-300 duration-200 py-1 transition-all ease-in-out`}
                    >
                      Ver Pacientes
                    </Link>
                    <Link
                      href="/application/agregar-paciente"
                      className={`block ${
                        pathname === "/agregar-paciente" ? "text-blue-700 dark:text-blue-300" : ""
                      } hover:text-blue-700 dark:hover:text-blue-300 duration-200 py-1 transition-all ease-in-out`}
                    >
                      Agregar Paciente
                    </Link>
                  </div>
                      
                )}
              <div className="div">
                  <Link
                    href="/application/administrar-especialista"
                    className={`flex ${pathname === "/administrar-especialista" ? "text-blue-700 dark:text-blue-300" : ""}
                    hover:text-blue-700 dark:hover:text-blue-300 duration-200 px-6 py-2 items-center gap-2 transition-all ease-in-out`}
                  >
                    <Profile2User size={16} />Admin Especialistas
                  </Link>
              </div>
              </div>
              
            ) : usuario && usuario.tipoUsuarioId === 2 ? (
              <div>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`flex justify-between items-center ${
                    pathname?.startsWith("/application/datos-medicos") ? "text-blue-700 dark:text-blue-300" : ""
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
                        pathname === "/application/datos-medicos/ver" ? "text-blue-700 dark:text-blue-300" : ""
                      } hover:text-blue-700 dark:hover:text-blue-300 duration-200 py-1 transition-all ease-in-out`}
                    >
                      Ver Datos Médicos
                    </Link>
                    <Link
                      href="/application/formulario-medico"
                      className={`block ${
                        pathname === "/application/datos-medicos/agregar" ? "text-blue-700 dark:text-blue-300" : ""
                      } hover:text-blue-700 dark:hover:text-blue-300 duration-200 py-1 transition-all ease-in-out`}
                    >
                      Agregar Datos Médicos
                    </Link>
                    <Link
                      href="/application/datos-medicos/editar"
                      className={`block ${
                        pathname === "/application/datos-medicos/editar" ? "text-blue-700 dark:text-blue-300" : ""
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
                    pathname === "/app/teams" ? "text-blue-700 dark:text-blue-300" : ""
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
                      href="/application/panel-hijos"
                      className={`block ${
                        pathname === "/panel-hijos" ? "text-blue-700 dark:text-blue-300" : ""
                      } hover:text-blue-700 dark:hover:text-blue-300 duration-200 py-1 transition-all ease-in-out`}
                    >
                      Ver Hijos
                    </Link>
                  </div>
                )}
                <div className="mt-2">
                  <button
                    onClick={() => setIsMedicosDropdownOpen(!isMedicosDropdownOpen)}
                    className={`flex justify-between items-center ${
                      pathname?.startsWith("/application/datos-medicos") ? "text-blue-700 dark:text-blue-300" : ""
                    } hover:text-blue-700 dark:hover:text-blue-300 duration-200 px-6 py-2 w-full transition-all ease-in-out`}
                  >
                    <div className="flex items-center gap-2">
                      <Profile2User size={16} />
                      Datos Médicos
                    </div>
                    <ArrowDown2 size={16} />
                  </button>
                  {isMedicosDropdownOpen && (
                    <div className="pl-10 mt-2 space-y-2">
                      <Link
                        href="/application/panel-medico"
                        className={`block ${
                          pathname === "/application/datos-medicos/ver-panel" ? "text-blue-700 dark:text-blue-300" : ""
                        } hover:text-blue-700 dark:hover:text-blue-300 duration-200 py-1 transition-all ease-in-out`}
                      >
                        Ver Panel
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ) : null}

            <Link
              href="/application/terapias"
              className={`flex ${
                pathname === "/app/calendar" ? "text-blue-700 dark:text-blue-300" : ""
              } hover:text-blue-700 dark:hover:text-blue-300 duration-200 px-6 py-2 items-center gap-2 transition-all ease-in-out`}
            >
              <Calendar size={16} />
              Calendario Terapias
            </Link>

            <Link
              href="/application/horarios"
              className={`flex ${
                pathname === "/application/horarios" ? "text-blue-700 dark:text-blue-300" : ""
              } hover:text-blue-700 dark:hover:text-blue-300 duration-200 px-6 py-2 items-center gap-2 transition-all ease-in-out`}
            >
              <Calendar size={16} />
              Horarios
            </Link>

            <Link
              href="/application/chat"
              className={`flex ${
                pathname === "/application/chat" ? "text-blue-700 dark:text-blue-300" : ""
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
  );
}

export default Sidebar;
