"use client";
import React, { useState, FormEvent } from "react";
import axios from "axios";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

declare global {
  interface Window {
    Toastify: any;
  }
}

window.Toastify = Toastify;

export function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const redirectDelay = 1500;

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/usuarios/login",
        {
          username,
          password,
        },
      );
      const { token } = response.data;

      localStorage.setItem("token", token);
      setMessage("Inicio de sesión exitoso");

      setTimeout(() => {
        window.location.href = "/inicio";
      }, redirectDelay);

      Toastify({
        text: "Haz iniciado sesión exitosamente",
        duration: 6000,
        position: "right",
        style: {
          background: "#009933",
          color: "#FFFFFF",
          fontSize: "14px",
          padding: "10px",
          borderRadius: "4px",
          fontWeight: "bold",
          marginTop: "70px",
        },
      }).showToast();
    } catch (error) {
      console.error("Error en el login:", error);
      setMessage("Credenciales inválidas");

      Toastify({
        text: "Credenciales inválidas",
        duration: 6000,
        position: "right",
        style: {
          background: "#FF0000",
          color: "#FFFFFF",
          fontSize: "14px",
          padding: "10px",
          borderRadius: "4px",
          fontWeight: "bold",
          marginTop: "70px",
        },
      }).showToast();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleLogin}>
        <Card className="mt-8 w-[400px] h-[520px] ">
          <CardHeader className="flex flex-col items-center">
            <Image src="/favicon.ico" width={72} height={50} alt="Logo DiU" />
            <CardTitle className="mt-4 text-xl font-bold text-blue-900">
              Inicio de Sesión
            </CardTitle>
          </CardHeader>
          <CardContent>
            <section className="my-5">
              <article className="space-y-4 my-4">
                <Label
                  className="block text-xs font-bold leading-6 text-blue-900"
                  htmlFor="username"
                >
                  Nombre de Usuario
                </Label>
                <div className="relative">
                  <Input
                    className="rounded-xl border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-700 mb-6"
                    id="username"
                    name="username"
                    placeholder="Ingrese su nombre de usuario"
                    required
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </article>
              <article className="space-y-4 my-4">
                <Label
                  className="block text-xs font-bold leading-6 text-blue-900 mt-4"
                  htmlFor="password"
                >
                  Contraseña
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    className="rounded-xl border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-700" // Borde solo inferior
                    placeholder="Ingrese su contraseña"
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </article>
              <article className="flex justify-center w-full mt-8">
                <Button
                  className="w-full rounded-2xl bg-custom-blue px-3 py-2 text-sm font-semi bold text-white shadow-sm hover:bg-indigo-950 focus:outline-none"
                  type="submit"
                >
                  Continuar
                </Button>
              </article>
              <article className="flex justify-center w-full mt-7">
                <p className="text-sm text-blue-900">
                  ¿No tienes cuenta?{" "}
                  <Link
                    href="/signup"
                    className="text-blue-700 font-bold hover:underline"
                  >
                    Regístrate
                  </Link>
                </p>
              </article>
            </section>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
