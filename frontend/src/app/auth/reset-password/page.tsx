import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function ResetPage() {

    return (
        <div className="flex items-center justify-center min-h-screen">
        <form>
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
                    name="usernameOrEmail"
                    placeholder="Ingrese su usuario o correo electrónico"
                    required
                    type="text"
                  />
                </div>
              </article>

                <article className="flex justify-center w-full mt-8">
                  <Button
                    className="w-full rounded-2xl bg-custom-blue px-3 py-2 text-sm font-semi bold text-white shadow-sm hover:bg-indigo-950 focus:outline-none"
                    type="submit"
                  >
                    Enviar correo
                  </Button>
                </article>
               
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
        </form>
      </div>
    )
}