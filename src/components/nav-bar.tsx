"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { poppins } from "@/components/ui/fonts";

const routes = [
  { name: "Inicio", route: "/" },
  { name: "Quienes Somos", route: "/quienessomos" },
  { name: "Club De Amigos", route: "/clubdeamigos" },
  { name: "Consultorio", route: "/consultorios" },
  { name: "Contactanos", route: "/contactanos" },
  { name: "Acciones", route: "/acciones" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-custom-blue fixed top-0 left-0 w-full z-50 shadow-md h-16">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo a la izquierda */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center left-full">
            <Image
              width={50}
              height={50}
              src="/logo-du.png"
              alt="Your Company"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Botón de menú móvil */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>

        {/* Links al centro para pantallas grandes */}
        <div className="hidden sm:flex sm:items-center space-x-6 h-full">
          {routes.map((route) => (
            <Link
              key={route.name}
              href={route.route}
              className={`relative text-white inline-flex items-center justify-center px-2 py-2 text-sm font-bold ${poppins.className} whitespace-nowrap h-full ${
                pathname === route.route ? "after:w-full" : ""
              }`}
            >
              <span
                className={`relative text-white after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 after:bottom-0 after:left-0 hover:after:w-full ${
                  pathname === route.route ? "after:w-full" : ""
                }`}
              >
                {route.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Botones a la derecha */}
        <div className="hidden sm:flex items-center space-x-3">
          <Link href="/donar">
            <Button
              variant="destructive"
              className="rounded-full text-base px-4 py-2 font-semibold hover:bg-red h-full"
            >
              DONAR
            </Button>
          </Link>
          <Link href="/application/auth/login">
            <Button
              className={`bg-custom-white text-black text-base px-4 py-2 font-semibold ${poppins.className} hover:text-blue-900 h-full`}
            >
              Iniciar Sesión
            </Button>
          </Link>
        </div>
      </div>

      {/* Sidebar móvil */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-custom-blue w-64 z-40 sm:hidden flex flex-col justify-between`}
      >
        <div className="space-y-1 px-4 py-6">
          <h1 className="text-xl font-extrabold text-white">Menu</h1>
          {routes.map((route) => (
            <Link
              key={route.name}
              href={route.route}
              className={`block rounded-md px-3 py-2 text-base font-bold text-white ${
                pathname === route.route ? "after:w-full" : ""
              }`}
            >
              <span
                className={`relative after:absolute after:w-0 after:h-0.5 text-white after:bg-blue-600 after:transition-all after:duration-300 after:bottom-0 after:left-0 hover:after:w-full ${
                  pathname === route.route ? "after:w-full" : ""
                }`}
              >
                {route.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Enlaces de Donar e Iniciar Sesión al final */}
        <div className="px-4 py-4 border-t border-blue-800">
          <Link
            href="/donar"
            className="block text-red text-base font-bold mb-2 hover:underline"
          >
            Donar
          </Link>
          <Link
            href="/auth/login"
            className="block text-white text-base font-bold hover:underline"
          >
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </nav>
  );
}
