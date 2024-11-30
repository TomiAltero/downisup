"use client";
import { signIn } from "next-auth/react"; // Importa la función de NextAuth
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import "toastify-js/src/toastify.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import Toastify from "toastify-js";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ArrowLeftIconSvg } from "@/components/ui/icons";

const handleGoogleSignup = () => {
  signIn("google", { callbackUrl: "/application" });
};

export function SignUp() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [dni, setDni] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [nombre, setNombre] = useState<string>("");
  const [apellido, setApellido] = useState<string>("");
  const [isMatch, setIsMatch] = useState<boolean>(true);
  const [errors, setErrors] = useState<{ msg: string }[]>([]);
  const redirectDelay = 2000;
  const [successfulMessage, setSuccessfulMessage] = useState<string | null>(
    null,
  );

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setIsMatch(event.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmPassword(event.target.value);
    setIsMatch(event.target.value === password);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isMatch) {
      Toastify({
        text: "Las contraseñas no coinciden",
        duration: 5000,
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
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/usuarios", {
        username,
        email,
        dni,
        password,
        nombre,
        apellido,
      });

      Toastify({
        text: "Usuario registrado exitosamente",
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

      setTimeout(() => {
        window.location.href = "/auth/login";
      }, redirectDelay);

      console.log("User registration successful:", response.data);
      setErrors([]);
      setSuccessfulMessage("Usuario registrado exitosamente");

      setNombre("");
      setApellido("");
      setUsername("");
      setEmail("");
      setDni("");
      setPassword("");
      setConfirmPassword("");
    } catch (error: any) {
      console.error(
        "Error registrando el usuario:",
        error.response?.data || error.message,
      );
      if (error.response && error.response.data && error.response.data.errors) {
        const validationErrors = error.response.data.errors.map(
          (error: any) => error.msg,
        );
        validationErrors.forEach((errorText: string) => {
          Toastify({
            text: errorText,
            duration: 5000,
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
        });
      } else {
        setErrors([{ msg: "Hubo un error al registrar el usuario" }]);
      }
      setSuccessfulMessage(null);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Card className="mt-8 w-[450px]">
        <CardHeader className="flex flex-col items-center">
          <section className="relative">
            <Link href={"/"}>
                <ArrowLeftIconSvg className={`absolute top-[-7px] right-40 mx-4 text-custom-blue`} />
            </Link>
          </section>  
          <Image src="/favicon.ico" width={72} height={50} alt="Logo DiU" />
          <CardTitle className="-mt-2 my-2 text-xl font-bold text-blue-900">
            Regístrate
          </CardTitle>
        </CardHeader>

        <CardContent id="card errores">
        
          <section className="my-3 -mt-5">
            <section className="flex flex-row space-x-4">
              <article className="space-y-2 my-2">
                <Label
                  className="block text-xs font-bold leading-6 text-blue-900"
                  htmlFor="nombre"
                >
                  Nombre
                </Label>
                <Input
                  className="rounded-xl border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-700"
                  id="nombre"
                  name="nombre"
                  placeholder="Ingrese su nombre"
                  required
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </article>
              <article className="space-y-2 my-2">
                <Label
                  className="block text-xs font-bold leading-6 text-blue-900"
                  htmlFor="apellido"
                >
                  Apellido
                </Label>
                <Input
                  className="rounded-xl border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-700"
                  id="apellido"
                  name="apellido"
                  placeholder="Ingrese su apellido"
                  required
                  type="text"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                />
              </article>
            </section>

            <article className="space-y-2 my-2">
              <Label
                className="block text-xs font-bold leading-6 text-blue-900"
                htmlFor="username"
              >
                Nombre de Usuario
              </Label>
              <Input
                className="rounded-xl border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-700"
                id="username"
                name="username"
                placeholder="Ingrese su nombre de usuario"
                required
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </article>
            <section className="flex flex-row gap-x-2">
              <article className="space-y-2 my-2">
                <Label
                  className="block text-xs font-bold leading-6 text-blue-900"
                  htmlFor="dni"
                >
                  DNI
                </Label>
                <Input
                  className="rounded-xl border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-700"
                  id="dni"
                  name="dni"
                  placeholder="Ingrese su DNI"
                  required
                  type="text"
                  value={dni}
                  onChange={(e) => setDni(e.target.value)}
                />
              </article>

              <article className="space-y-2 my-2">
                <Label
                  className="block text-xs font-bold leading-6 text-blue-900"
                  htmlFor="email"
                >
                  Email
                </Label>
                <Input
                  className="rounded-xl border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-700"
                  id="email"
                  name="email"
                  placeholder="Ingrese su correo electrónico"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </article>
            </section>

            <section className="my-2  gap-x-4 flex flex-row">
              <article>
                <Label
                  className="block text-xs font-bold leading-6 text-blue-900"
                  htmlFor="password"
                >
                  Contraseña
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    className={`rounded-xl border-t-0 border-l-0 border-r-0 border-b-2 ${
                      isMatch ? "border-blue-800" : "border-red-600"
                    } outline-none focus:ring-0 focus:border-blue-700`}
                    placeholder="Ingrese su contraseña"
                    required
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-400" />
                    ) : (
                      <FaEye className="text-gray-400" />
                    )}
                  </button>
                </div>
              </article>
              <article>
                <Label
                  className="block text-xs font-bold leading-6 text-blue-900"
                  htmlFor="password2"
                >
                  Confirmar Contraseña
                </Label>
                <div className="relative">
                  <Input
                    id="password2"
                    className={`rounded-xl border-t-0 border-l-0 border-r-0 border-b-2 ${
                      isMatch ? "border-blue-800" : "border-red-600"
                    } outline-none focus:ring-0 focus:border-blue-700`}
                    placeholder="Repita la contraseña"
                    required
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-400" />
                    ) : (
                      <FaEye className="text-gray-400" />
                    )}
                  </button>
                </div>
              </article>
            </section>
            <article className="flex justify-center w-full mt-5">
              <Button
                disabled={!isMatch}
                variant={"default"}
                className="w-full rounded-2xl bg-custom-blue px-3 py-2 text-sm font-semi bold text-white shadow-sm hover:bg-indigo-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                type="submit"
              >
                Continuar
              </Button>
            </article>
            <article className="flex justify-center w-full mt-4">
              <Button
                className="-mt-2 w-full rounded-2xl bg-white border px-3 py-2 text-sm font-semi bold text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none flex items-center justify-center"
                type="button"
                onClick={handleGoogleSignup}
              >
                <FcGoogle className="mr-2" size={20} />
                Registrarse con Google
              </Button>
            </article>

            <article className="flex justify-center w-full mt-5 -mb-2">
              <p className="text-sm text-blue-900">
                ¿Ya tienes cuenta?{" "}
                <Link
                  href="/auth/login"
                  className="text-blue-900 font-bold hover:underline"
                >
                  Inicia sesión
                </Link>
              </p>
            </article>
          </section>
        </CardContent>
      </Card>
    </form>
  );
}
