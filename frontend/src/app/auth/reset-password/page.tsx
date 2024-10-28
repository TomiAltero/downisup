'use client'
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import { AlertCustomStyles, AlertCustomStylesRojo, LoadingSpinner } from "@/components/materialComponent";
import { generateVerificationCode } from "@/lib/utils"
export default function ResetPage() {
  const [isLoading, setIsLoading] = useState(false); // State for spinner
  const [alertMessage, setAlertMessage] = useState(''); // State for alert message
  const [isError, setIsError] = useState(false); // State to track if the message is an error
  const [showContent, setShowContent] = useState<boolean>(false);
  const [resetCode, setResetCode] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true); // Show spinner while loading
    const reset_code = generateVerificationCode();
    const form = e.currentTarget; // Access the form element
    const formEmail = (form.elements.namedItem('email') as HTMLInputElement).value;
    const formData = {
      email: formEmail,
      reset_code : reset_code 
    };
    setEmail(formEmail)
    setResetCode(reset_code)
    try {
      const response = await fetch('/api/mail/reset-password/send-reset-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setAlertMessage(' Mensaje enviado con exito!'); // Set the success alert message
        setIsError(false); // No error, success
        setTimeout(() => {
          setShowContent(content => !content);
          setAlertMessage("")
        }, 1500);
        setIsLoading(false); // Hide spinner after response
        form.reset();
      } else {
        setAlertMessage('Error al enviar el mensaje. Por favor, intente nuevamente.');
        setIsError(true);  // Mark it as an error
      }
    } catch (error) {
      setAlertMessage('Error sending message. Please check the console for details.');
      console.error('Error:', error);  // Log the error for debugging
      setIsError(true);  // Mark it as an error
    } finally {
      setIsLoading(false);  // Hide spinner after response
    }
  }

  const verifyResetCode = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget; // Access the form element
    const enteredCode = Array.from({ length: 6 })
      .map((_, index) => (form.elements.namedItem(`code-${index}`) as HTMLInputElement).value.toUpperCase())
      .join('');
    console.log(enteredCode)
    if (enteredCode === resetCode) {
      setAlertMessage('Código verificado con éxito!');
      setIsError(false); // No error, success
      
      // Proceed with the password reset process
    } else {
      setAlertMessage('El código ingresado es incorrecto. Por favor, intente nuevamente.');
      setIsError(true); // Mark it as an error
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <article className="mb-10">
        {alertMessage && (
          isError ? (
            <AlertCustomStylesRojo message={alertMessage} />  // Show error alert
          ) : (
            <AlertCustomStyles message={alertMessage} />  // Show success alert
          )
        )}
      </article>
      {
        !showContent ? (
          <Card className="-mt-4 w-[400px] h-auto">
            <CardHeader className="flex flex-col items-center">
              <Image src="/favicon.ico" width={72} height={50} alt="Logo DiU" />
              <CardTitle className="mt-4 text-xl font-bold text-blue-900">
                Restablecer contraseña
              </CardTitle>
            </CardHeader>
            <CardContent>
              <section className="my-5 -mt-2">
                <article className="">
                  <p className="text-center text-sm text-blue-950">
                    Ingrese su correo electrónico o usuario para restablecer su
                    contraseña
                  </p>
                </article>
                <form onSubmit={handleFormSubmit}>
                  <article className="space-y-4 my-4">
                    <Label
                      className="block text-xs font-bold leading-6 text-blue-900 m-0"
                      htmlFor="usernameOrEmail"
                    >
                      Correo Electrónico

                    </Label>
                    <div className="relative">
                      <Input
                        className="rounded-xl border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-700 mb-6"
                        id="usernameOrEmail"
                        name="email"
                        placeholder="Ingrese su usuario o correo electrónico"
                        required
                        type="text"
                      />
                    </div>
                  </article>

                  <article className="flex justify-center w-full mt-8">
                    <Button type="submit" className="w-full rounded-2xl bg-custom-blue px-3 py-2 text-sm font-semi bold text-white shadow-sm hover:bg-indigo-950 focus:outline-none">
                      {isLoading ? <LoadingSpinner /> : "Enviar"}  {/* Show spinner while loading */}
                    </Button>
                  </article>
                </form>

                <article className="flex justify-center items-center w-full mt-5 gap-x-1">
                  <p className="text-sm text-blue-900">
                    Haz recibido el email
                  </p>
                  <Link
                    href="/auth/signup"
                    className="text-blue-900 font-bold hover:underline text-sm"
                  >
                    Haz click
                  </Link>
                </article>

              </section>
            </CardContent>
          </Card>
        ) : (
          <Card className="-mt-4 w-[400px] h-auto">
          <CardHeader className="flex flex-col items-center">
            <Image src="/favicon.ico" width={72} height={50} alt="Logo DiU" />
            <CardTitle className="mt-4 text-xl font-bold text-blue-900">
              Reinicio de contraseña
            </CardTitle>
          </CardHeader>
          <CardContent>
            <section className="my-5 -mt-2">
              <article className="">
                <p className="text-center text-sm text-blue-950">
                  {email && (
                    <p className="text-center text-sm text-blue-950">
                      {`Ingrese el código de seis digitos enviado al correo electrónico: ${email.charAt(0)}*****@${email.split('@')[1]}`}
                    </p>
                  )}
                </p>
              </article>
              <form onSubmit={verifyResetCode}>
                <article className="space-y-4 my-4">
                  <Label
                    className="block text-base font-bold leading-6 text-blue-900 m-0"
                    htmlFor="usernameOrEmail"
                  >
                    Codigo de 6 letras

                  </Label>
                  <div className="flex justify-center">
                  {[...Array(6)].map((_, index) => (
                    <Input
                      key={index}
                      className="w-12 h-12  text-xl text-center rounded-xl border-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-700 mx-1 uppercase font-"
                      id={`code-${index}`}
                      name={`code-${index}`}
                      maxLength={1}
                      required
                      type="text"
                    />
                  ))}
                  </div>
                </article>

                <article className="flex justify-center w-full mt-8">
                  <Button type="submit" className="w-full rounded-2xl bg-custom-blue px-3 py-2 text-sm font-semi bold text-white shadow-sm hover:bg-indigo-950 focus:outline-none">
                    {isLoading ? <LoadingSpinner /> : "Enviar"}  {/* Show spinner while loading */}
                  </Button>
                </article>
              </form>
              
            </section>
          </CardContent>
        </Card>
        )
      }


    </div>
  )
}