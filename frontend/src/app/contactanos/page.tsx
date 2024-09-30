import LandingLayout from "@/layouts/LandingLayout";
import { poppins } from "@/components/ui/fonts";
import './contact.css';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Footer from "@/components/footer";
import { PhoneIconSvg, MessageIconSvg, PinIconSvg} from "@/components/ui/icons"
import { Button } from "@material-tailwind/react";

export default function ContactUsPage() {
  return (
    <LandingLayout>
      <main className={`h-screen flex flex-col justify-start items-center ${poppins.className}`}>
        <h1 className={`text-4xl mt-22 mb-5 text-custom-blue font-semibold`}>Contáctanos</h1>
        
        {/* Container responsive */}
        <div className="flex flex-col lg:flex-row w-full justify-between px-4 lg:px-40">
          
          {/* Información de contacto responsive */}
          <div className="bg-blue-900 mt-10 lg:mt-20 text-white p-5 pb-15 rounded-3xl w-[400px] lg:w- font-sans">
            <h2 className={`text-lg mb-10 text-white mt-5 text-center font-semibold`}>Información de Contacto</h2>
            <div className="space-y-3">
              <p>
                <PhoneIconSvg />
                <a href="tel:+3517960194" className="text-white text-sm hover:underline">3517960194</a>
              </p>
              <p>
                <MessageIconSvg />
                <a href="mailto:fundaciondownisupcbacba@gmail.com" className="text-white text-sm hover:underline">fundaciondownisupcbacba@gmail.com</a>
              </p>
              <p> 
                <PinIconSvg />
                <a href="https://maps.app.goo.gl/cpvhnUq2XH37BnCi8" className="text-white text-sm hover:underline">Pérez de Herrera 2053</a>
              </p>
            </div>
          </div>

          {/* Formulario de contacto responsive */}
          <div className="flex flex-col justify-center w-full lg:w-1/2 pt-10 lg:pt-20">
            <section className="flex flex-col lg:flex-row gap-6">
              <article>
                <Label className={`block text-xs leading-6 text-blue-900 ${poppins.className}`}>Nombre</Label>
                <Input className="rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6" type="text" placeholder="Ingresa tu nombre"/>
              </article>
              <article>
                <Label className={`block text-xs leading-6 text-blue-900 ${poppins.className}`}>Apellido</Label>
                <Input className="rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6" type="text" placeholder="Ingresa tu apellido"/>
              </article>
            </section>
            <section className="flex flex-col lg:flex-row gap-6">
              <article>
                <Label className={`block text-xs leading-6 text-blue-900 ${poppins.className}`}>Email</Label>
                <Input className="rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6" type="email" placeholder="Ingresa tu email"/>
              </article>
              <article>
                <Label className={`block text-xs leading-6 text-blue-900 ${poppins.className}`}>Teléfono</Label>
                <Input className="rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6" type="number" placeholder="Ingresa tu teléfono"/>
              </article>
            </section>
            <article className="mt-5">
              <input type="text" className="w-full rounded-3xl bg-gray-400 border-2 placeholder:text-sm text-sm p-6 placeholder:text-white focus:ring-0 " placeholder="Ingrese un mensaje" />
            </article>
            <div>
              <button className="bg-blue-900 mt-5 hover:bg-blue-700 text-base text-white py-2 px-4 rounded-xl">
                      Enviar
              </button>
            </div>
          </div>
        </div>
        
        {/* Pie de página con redes sociales */}
        <Footer />
      </main>
    </LandingLayout>
  );
}
