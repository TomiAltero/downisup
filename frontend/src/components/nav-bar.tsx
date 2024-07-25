"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const routes = [
  {
    name: "Inicio",
    route: "/",
  },
  {
    name: "Quienes Somos",
    route: "/quienessomos",
  },
  {
    name: "Contáctanos",
    route: "/contactanos",
  },
  {
    name: "Club de Amigos",
    route: "/clubdeamigos",
  },
  {
    name: "Consultorios",
    route: "/consultorios",
  },
  {
    name: "Tienda",
    route: "/tienda",
  },
  {
    name: "Acciones",
    route: "/acciones",
  },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="bg-custom-blue">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-between sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Image
                width={50}
                height={50}
                src="/logo-du.png"
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-10 sm:block">
              <div className="flex items-center space-x-3">
                {routes.map((route) => (
                  <Link
                    key={route.name}
                    href={route.route}
                    className={`relative inline-flex items-center justify-center rounded-md px-2 py-2 text-sm font-medium ${pathname === route.route ? "bg-blue-600 text-white" : "text-gray-400"} hover:text-white`}
                  >
                    <span className="text-white after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 after:bottom-0 after:left-0 hover:after:w-full">
                      {route.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-x-3 items-center">
            <Link href="/donar">
              <Button
                variant="destructive"
                className="rounded-full text-base px-4 py-2 font-semibold hover:bg-red"
              >
                Donar Aquí
              </Button>
            </Link>
            <Link href="/login">
              <Button className="bg-custom-white text-black text-base px-4 py-2 font-semibold hover:text-blue-900">
                Iniciar Sesión
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {routes.map((route) => (
            <Link
              key={route.name}
              href={route.route}
              className={`block rounded-md px-3 py-2 text-base font-medium ${pathname === route.route ? "bg-gray-900 text-white" : "text-gray-400"} hover:text-white`}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
