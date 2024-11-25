import Image from "next/image";
import { Usuario } from "@/types";
import { getUserProfile } from "@/lib/utils";
import { poppins } from "@/components/ui/fonts";
import { useEffect } from "react";
import Link from "next/link";

export default async function Perfil({ token }: { token: string | null}) {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  
  if (!token ) {
    return;
  }
  const usuario: Usuario = await getUserProfile({ token });
  const nombreCompleto = usuario ? `${usuario.nombre} ${usuario.apellido}` : "";

  return (
    <section className={`flex ${poppins.className} w-full justify-center`}>
      <article className="flex flex-col w-full lg:w-1/2 border-2 border-gray-200 dark:border-gray-700 p-10 rounded-[36px] shadow-lg bg-white dark:bg-gray-900">
        <article className="flex flex-col items-center">
          <Image src={"/no-photo.webp"} alt="Profile Photo" width={150} height={150} className="rounded-full border-gray-500 dark:border-gray-400 border-2 pointer-events-none mb-2" />
          <h1 className="text-xl text-black dark:text-white font-semibold text-center">{nombreCompleto}</h1>
          <h3 className="text-base text-gray-400 dark:text-gray-300">{usuario?.email}</h3>
        </article>
        <section className="flex mt-5 border-gray-300 dark:border-gray-600 border-2 rounded-3xl py-3 px-4">
          <article className="w-full flex flex-col items-center justify-center">
            <h1 className="text-xl text-black dark:text-white">Usuario</h1>
            <h1 className="text-base text-gray-500 dark:text-gray-300">{usuario.username}</h1>
          </article>
        </section>
        <section className="flex my-5 border-gray-300 dark:border-gray-600 border-2 rounded-3xl py-3 px-4">
          <article className="w-full flex flex-col items-center justify-center">
            <h1 className="text-xl text-black dark:text-white">Nombre Completo</h1>
            <h1 className="text-base text-gray-500 dark:text-gray-300">{nombreCompleto}</h1>
          </article>
        </section>
        <section className="flex border-gray-300 dark:border-gray-600 border-2  rounded-3xl py-3 px-4 items-center">
          <article className="w-full flex flex-col items-center justify-center">
            <h1 className="text-xl text-black dark:text-white">Contraseña</h1>
            <h1 className="text-base text-gray-500 dark:text-gray-300 my-1">************</h1>
          </article>
        </section>
        <a href={"perfil/change-password"} className="text-base text-center text-custom-blue dark:text-blue-300 mt-5">Cambiar Contraseña</a>
      </article>  
    </section>
  );
};
