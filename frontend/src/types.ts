
export interface Usuario {
    nombre: string;
    apellido: string;
    username: string;
    email: string;
    dni: string;
  }

export interface Hijo {
    id: number;
    nombre: string;
    apellido: string;
    edad: number;
    dni: string;
    imagen: string | null;
}