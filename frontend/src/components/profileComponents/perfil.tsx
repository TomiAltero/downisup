import Image from "next/image";
import { Usuario } from "@/types";
import { getUserProfile } from "@/lib/utils";
import { poppins } from "@/components/ui/fonts";
import Link from "next/link";
import { RightArrowIcon } from "@/components/ui/icons";
export default async function Perfil({ token }: { token: string | null}) {
  
  if (!token ) {
    return
  }
  const usuario: Usuario = await getUserProfile({ token });

  const nombreCompleto = usuario ? `${usuario.nombre} ${usuario.apellido}` : "";

  return (
    <section className={`flex ${poppins.className} w-full h-full justify-center`}>
      <article className="flex flex-col w-1/2 border-2 border-gray-200 p-10 rounded-[36px] shadow-lg">
        <article className="flex flex-col items-center">
          <Image src={"/no-photo.webp"} alt="Profile Photo" width={150} height={150} className="rounded-full border-gray-500 border-2 pointer-events-none mb-2" />
          <h1 className="text-xl text-black font-semibold text-center">{nombreCompleto}</h1>
          <h3 className="text-base text-gray-400">{usuario?.email}</h3>
        </article>
        <section className="flex mt-5 border-gray-300 border-2 rounded-3xl py-3 px-4">
          
          <article className="w-full flex flex-col items-center justify-center">
            <h1 className="text-xl">Usuario</h1>
            <h1 className="text-base text-gray-500">{usuario.username}</h1>
            
          </article>
        </section>
        <section className="flex my-5 border-gray-300 border-2 rounded-3xl py-3 px-4">
          
          <article className="w-full flex flex-col items-center justify-center">
            <h1 className="text-xl">Nombre Completo</h1>
            <h1 className="text-base text-gray-500">{nombreCompleto}</h1>
            
          </article>
        </section>
        <section className="flex border-gray-300 border-2 rounded-3xl py-3 px-4 items-center">
          
          <article className="w-full flex flex-col items-center justify-center">
            <h1 className="text-xl">Contraseña</h1>
            <h1 className="text-base text-gray-500 my-1">************</h1>
            
          </article>
          <Link href={"perfil/change-password"}>
            <RightArrowIcon className="text-gray-500 size-10"/>
          </Link>
        </section>
      </article>  
    </section>
  );
};
