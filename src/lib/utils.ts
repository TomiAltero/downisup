import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getUserProfile({ token }: { token: string }) {
  try {
    const profile = await fetch("http://localhost:5000/api/usuarios/perfil", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await profile.json();
    return data.usuario;
  } catch (error) {
    throw new Error("Error al obtener el perfil del usuario");
  }
}

export async function getHijoProfile({ token }: { token: string }) {
  try {
    const profile = await fetch("http://localhost:5000/api/hijos/profiles", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await profile.json();

    return data;
  } catch (error) {
    throw new Error("Error al obtener el perfil del usuario hijo");
  }
}

export const getPsycholgyTherapies = async (hijoId = 1) => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `http://localhost:5000/api/medicalData/${hijoId}/psychologyTherapies`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error("Error al obtener las terapias psicológicas");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en getAll:", error);
    throw error;
  }
};
export const getSpeechTherapies = async (hijoId = 1) => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `http://localhost:5000/api/medicalData/${hijoId}/speechTherapies`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error("Error al obtener las terapias fonoaudiológicas");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en getAll:", error);
    throw error;
  }
};

export const getPhysiologyTherapies = async (hijoId = 1) => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `http://localhost:5000/api/medicalData/${hijoId}/physiologyTherapies`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error("Error al obtener las terapias fonoaudiológicas");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en getAll:", error);
    throw error;
  }
};

export const getNeurologicalTherapies = async (hijoId = 1) => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `http://localhost:5000/api/medicalData/${hijoId}/neurologicalTherapies`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error("Error al obtener las terapias Neurologicas");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en getAll:", error);
    throw error;
  }
};

export async function getChildrenAndUser({ token }: { token: string }) {
  try {
    const response = await fetch("http://localhost:5000/api/hijos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Error al obtener los hijos");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en getChildren:", error);
    throw error;
  }
}

export async function getSpecialityForUser({ token }: { token: string }) {
  try {
    const response = await fetch(
      "http://localhost:5000/api/usuarios/speciality",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error("Error al obtener la especialidad del usuario");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en getSpecialityForUser:", error);
    throw error;
  }
}

export async function getAllSpecialities() {
  try {
    const response = await fetch(
      "http://localhost:5000/api/medicalData/specialities",
    );

    if (!response.ok) {
      throw new Error("Error al obtener las especialidades");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en getSpecialityForUser:", error);
    throw error;
  }
}

export function generateVerificationCode() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters[randomIndex];
  }
  return code;
}
