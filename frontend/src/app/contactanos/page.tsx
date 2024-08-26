import LandingLayout from "@/layouts/LandingLayout";
import { poppins } from "@/components/ui/fonts";
import './contact.css';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FaInstagram, FaYoutube, FaWhatsapp, FaFacebook } from "react-icons/fa";

function PhoneIconSvg(){
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 inline-block mr-2 text-white ">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
  </svg>;
}

function MessageIconSvg() {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 inline-block mr-2 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>;
} 

function PinIconSvg(){
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-white mr-2 inline-block">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>;
}

export default function ContactUsPage() {
  return (
    <LandingLayout>
      <main className={`h-screen flex flex-col justify-start items-center ${poppins.className}`}>
        <h1 className={`text-4xl mt-22 mb-5 text-custom-blue font-semibold`}>Contáctanos</h1>
        
        {/* Container responsive */}
        <div className="flex flex-col lg:flex-row w-full justify-between px-4 lg:px-40">
          
          {/* Información de contacto responsive */}
          <div className="bg-blue-900 mt-10 lg:mt-20 text-white p-5 pb-15 rounded-3xl w-full lg:w-3/12 font-sans">
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
                <span className="text-white text-sm">Pérez de Herrera 2053</span>
              </p>
            </div>
          </div>

          {/* Formulario de contacto responsive */}
          <div className="flex flex-col justify-center w-full lg:w-1/2 pt-10 lg:pt-20">
            <section className="flex flex-col lg:flex-row gap-6">
              <article>
                <Label className={`block text-xs leading-6 text-blue-900 ${poppins.className}`}>Nombre</Label>
                <Input className="rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6" type="text" />
              </article>
              <article>
                <Label className={`block text-xs leading-6 text-blue-900 ${poppins.className}`}>Apellido</Label>
                <Input className="rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6" type="text" />
              </article>
            </section>
            <section className="flex flex-col lg:flex-row gap-6">
              <article>
                <Label className={`block text-xs leading-6 text-blue-900 ${poppins.className}`}>Email</Label>
                <Input className="rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6" type="email" />
              </article>
              <article>
                <Label className={`block text-xs leading-6 text-blue-900 ${poppins.className}`}>Teléfono</Label>
                <Input className="rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6" type="number" />
              </article>
            </section>
            <article className="mt-5">
              <input type="text" className="w-full rounded-3xl bg-gray-400 border-2 placeholder:text-sm p-6 placeholder:text-white" placeholder="Ingrese un mensaje" />
            </article>
          </div>
        </div>
        
        {/* Pie de página con redes sociales */}
        <footer className="w-full py-4 bg-gray-700 mt-auto">
          <div className="flex justify-center space-x-8 flex-wrap">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-2xl hover:text-gray-400" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-white text-2xl hover:text-gray-400" />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-white text-2xl hover:text-gray-400" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white text-2xl hover:text-gray-400" />
            </a>
          </div>
        </footer>
      </main>
    </LandingLayout>
  );
}
