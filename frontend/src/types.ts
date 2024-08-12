export type PasswordStrengthType = "Débil" | "Medio" | "Fuerte";

export enum PasswordStrength {
    Weak = "Débil",
    Medium = "Medio",
    Strong = "Fuerte",
}

export interface Usuario {
    nombre: string;
    apellido: string;
    username: string;
    email: string;
    dni: string;
  }