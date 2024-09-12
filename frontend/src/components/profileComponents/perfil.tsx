import Image from "next/image";
import { Usuario } from "@/types";
import { getUserProfile } from "@/lib/utils";
import { poppins } from "@/components/ui/fonts";

import { Label} from "@/components/ui/label"
import { Input } from "@/components/ui/input";
export default async function Perfil({ token }: { token: string | null}) {
  
  if (!token ) {
    return
  }
  const usuario: Usuario = await getUserProfile({ token });

  const nombreCompleto = usuario ? `${usuario.nombre} ${usuario.apellido}` : "";

  return (
    <section className={`flex ${poppins.className} w-full h-full justify-center`}>
      <article className="flex w-full border-2 border-blue-900 p-10 rounded-3xl gap-x-2">
        <article className="">
          <Image src={"/no-photo.webp"} alt="Profile Photo" width={200} height={200} className="rounded-full border-blue-900 border-2 pointer-events-none" />
          <h1 className="text-base text-blue-900 font-semibold text-center">{nombreCompleto}</h1>
        </article>
        <article className="px-10">
          <article className="flex w-full gap-x-2">
            <article className="flex flex-col gap-y-2">
              <Label className="ml-2 text-black">Nombre</Label>
              <Input disabled value={usuario.nombre}/>
            </article>
            <article className="flex flex-col gap-y-2">
              <Label className="ml-2 text-black">Apellido</Label>
              <Input disabled value={usuario.apellido}/>
            </article>
          </article>
          <article className="flex w-full gap-x-2">
            <article className="flex flex-col gap-y-2">
              <Label className="ml-2 text-black">Nombre</Label>
              <Input disabled value={usuario.nombre}/>
            </article>
            <article className="flex flex-col gap-y-2">
              <Label className="ml-2 text-black">Apellido</Label>
              <Input disabled value={usuario.apellido}/>
            </article>
          </article>
        </article>
      </article>  
    </section>
  );
};
