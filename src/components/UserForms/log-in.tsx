"use client";
import { signIn } from "next-auth/react"; // Importa la función de NextAuth
import React, { useState, FormEvent } from "react";
import axios from "axios";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ArrowLeftIconSvg } from "@/components/ui/icons";

const handleGoogleLogin = () => {
  signIn("google", { callbackUrl: "/application" });
};

export function LogIn() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const redirectDelay = 1000;

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://downisup-api-production.up.railway.app/api/usuarios/login",
        {
          usernameOrEmail,
          password,
        },
      );
      const { token } = response.data;

      localStorage.setItem("token", token);
      setMessage("Inicio de sesión exitoso");

      setTimeout(() => {
        window.location.href = "/application/";
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
    } catch (error: unknown) {
      console.error("Error en el login:", error);

      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (error.response.status === 401) {
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
          } else {
            setMessage("Error en el servidor, por favor intenta nuevamente");
            Toastify({
              text: "Error en el servidor, por favor intenta nuevamente",
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
        } else if (error.request) {
          setMessage(
            "No se pudo contactar al servidor, por favor verifica tu conexión",
          );
          Toastify({
            text: "No se pudo contactar al servidor, por favor verifica tu conexión",
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
        } else {
          setMessage("Ocurrió un error, por favor intenta nuevamente");
          Toastify({
            text: "Ocurrió un error, por favor intenta nuevamente",
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
      } else {
        setMessage("Ocurrió un error inesperado, por favor intenta nuevamente");
        Toastify({
          text: "Ocurrió un error inesperado, por favor intenta nuevamente",
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
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleLogin}>
        <Card className="-mt-4 w-[400px] h-[570px]">
          <CardHeader className="flex flex-col items-center">
            <section className="relative">
              <Link href={"/"}>
                <ArrowLeftIconSvg
                  className={`absolute top-[-7px] right-33 mx-4 text-custom-blue`}
                />
              </Link>
            </section>
            <Image src="/favicon.ico" width={72} height={50} alt="Logo DiU" />
            <CardTitle className="mt-4 text-xl font-bold text-blue-900">
              Inicio de Sesión
            </CardTitle>
          </CardHeader>
          <CardContent>
            <section className="my-5 -mt-2">
              <article className="space-y-4 my-4">
                <Label
                  className="block text-xs font-bold leading-6 text-blue-900"
                  htmlFor="usernameOrEmail"
                >
                  Usuario o Correo Electrónico
                </Label>
                <div className="relative">
                  <Input
                    className="rounded-xl border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-700 mb-6"
                    id="usernameOrEmail"
                    name="usernameOrEmail"
                    placeholder="Ingrese su usuario o correo electrónico"
                    required
                    type="text"
                    value={usernameOrEmail}
                    onChange={(e) => setUsernameOrEmail(e.target.value)}
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
                    className="rounded-xl border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-700"
                    placeholder="Ingrese su contraseña"
                    required
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-500" />
                    ) : (
                      <FaEye className="text-gray-500" />
                    )}
                  </button>
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
              <article className="flex justify-center w-full mt-4">
                <Button
                  className="-mt-2 w-full rounded-2xl bg-white border px-3 py-2 text-sm font-semi bold text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none flex items-center justify-center"
                  type="button"
                  onClick={handleGoogleLogin}
                >
                  <FcGoogle className="mr-2" size={20} />
                  Continuar con Google
                </Button>
              </article>
              <article className="flex justify-center w-full mt-5">
                <p className="text-sm text-blue-900">
                  ¿No tienes cuenta?{" "}
                  <Link
                    href="/auth/signup"
                    className="text-blue-900 font-bold hover:underline"
                  >
                    Regístrate
                  </Link>
                </p>
              </article>
              <article className="flex justify-center w-full mt-2">
                <p className="text-sm text-blue-900">
                  ¿Olvidaste tu contraseña?{" "}
                  <Link
                    href="/auth/reset-password"
                    className="text-blue-900 font-bold hover:underline"
                  >
                    Recupera tu contraseña
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
