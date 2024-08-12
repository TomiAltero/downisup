import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function getProfile( { token }: { token: string }) {
  try {
  const profile = await fetch("http://localhost:5000/api/usuarios/perfil", {
    headers: {
      Authorization: `Bearer ${token}`,
    }})
  const data = await profile.json()
  console.log("Usuario Logeado", data)
  return data
  } catch (error) {
    console.error(error)
    throw new Error("Error al obtener el perfil del usuario")
  }

}

