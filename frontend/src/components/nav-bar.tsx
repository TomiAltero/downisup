"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { poppins } from "@/components/ui/fonts";


const routes = [
  { name: "Inicio", route: "/" },
  { name: "Quienes Somos", route: "/quienessomos" },
  { name: "Club De Amigos", route: "/clubdeamigos" },
  { name: "Consultorios", route: "/consultorios" },
  { name: "Contactanos", route: "/contactanos" },
  { name: "Acciones", route: "/acciones" },
  { name: "Tienda", route: "/tienda" }
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="bg-custom-blue fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
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

        {/* Links al centro */}
        <div className="hidden sm:flex sm:items-center space-x-6">
          {routes.map((route) => (
            <Link
              key={route.name}
              href={route.route}
              className={`relative text-white inline-flex items-center justify-center px-2 py-2 text-sm font-bold ${poppins.className} whitespace-nowrap ${
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
        <div className="flex items-center space-x-3">
          <Link href="/donar">
            <Button
              variant="destructive"
              className="rounded-full text-base px-4 py-2 font-semibold hover:bg-red"
            >
              DONAR
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button className={`bg-custom-white text-black text-base px-4 py-2 font-semibold ${poppins.className} hover:text-blue-900`}>
              Iniciar Sesión
            </Button>
          </Link>
        </div>
      </div>

      {/* Menú móvil */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {routes.map((route) => (
            <Link
              key={route.name}
              href={route.route}
              className={`block rounded-md px-3 py-2 text-base font-medium text-white ${
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
      </div>
    </nav>
  );
}
