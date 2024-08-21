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
                Cambiar Contraseña
              </CardTitle>
            </CardHeader>
            <CardContent>
              <section className="my-5 -mt-2">
              <article className="space-y-4 my-4">
                <Label
                  className="block text-xs font-bold leading-6 text-blue-900 m-0"
                  htmlFor="usernameOrEmail"
                >
                  Nueva Contraseña
                </Label>
                <div className="relative">
                  <Input
                    className="rounded-xl border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-700 mb-6"
                    id="usernameOrEmail"
                    name="usernameOrEmail"
                    placeholder="Ingrese su nueva contraseña"
                    required
                    type="text"
                  />
                </div>
              </article>
              <article className="space-y-4 my-4">
                <Label
                  className="block text-xs font-bold leading-6 text-blue-900 m-0"
                  htmlFor="usernameOrEmail"
                >
                  Confirmar Contraseña
                </Label>
                <div className="relative">
                  <Input
                    className="rounded-xl border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-700 mb-6"
                    id="usernameOrEmail"
                    name="usernameOrEmail"
                    placeholder="Confirme su nueva contraseña"
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
                    Cambiar Contraseña
                  </Button>
                </article>
              </section>
            </CardContent>
          </Card>
        </form>
      </div>
    )
}