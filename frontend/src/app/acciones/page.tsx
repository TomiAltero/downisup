
import LandingLayout from "@/layouts/LandingLayout";
import { useState } from "react";
import { CalendarIcon } from "@/components/ui/icons"
import { poppins } from "@/components/ui/fonts";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaYoutube, FaWhatsapp, FaFacebook } from "react-icons/fa"; 

const diaSemana = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
const diaMes = 31;

const eventCards = [
  {
    title: "Ponemos casa en valle escondido",
    shortDescription: "Short description for Event 1",
    longDescription: "Long description for Event 1",
    image: "/chicasPlaza.jpg",
    date : "Martes 3 de Septiembre"
  },
  {
    title: "Event 2",
    shortDescription: "Short description for Event 2",
    longDescription: "Long description for Event 2",
    image: "/chicasPlaza.jpg",
    date : "Martes 3 de Septiembre"

  },
  {
    title: "Event 3",
    shortDescription: "Short description for Event 3",
    longDescription: "Long description for Event 3",
    image: "/chicasPlaza.jpg",
    date : "Martes 3 de Septiembre"

  },
];

export default function AccionesPage() {

  return (
    <LandingLayout>
      <main
        className={`h-screen flex flex-col items-center ${poppins.className}`}
      >
        <h1 className="text-4xl mt-22 mb-5 text-custom-blue font-semibold">
          Acciones
        </h1>
        <section className="flex w-full px-10">
          <section className="grid grid-cols-2 w-full items-center">
            {eventCards.map((event, index) => (
              <article
                key={index}
                className="flex flex-col items-center justify-center w-120 h-auto bg-gray-300 rounded-3xl shadow-md p-5 m-5 gap-1"
              >
                  <h2 className="text-xl mt-5 mb-5 text-custom-blue font-semibold">
                    {event.title}
                  </h2>
                  
                <article className="flex gap-x-4">
                <Image
                  src={event.image}
                  alt="Event"
                  className="object-cover rounded-3xl"
                  width={250}
                  height={250}
                />
                <article className="flex flex-col justify-between py-10">
                  <p className="text-sm text-center text-gray-700">
                    {event.shortDescription}
                  </p>
                  <Button
                    className="mt-5 bg-custom-blue text-white px-5 py-2 rounded-lg"
                  >
                    Ver más
                  </Button>
                </article>
                </article>
                <article className="flex items-center gap-x-2 mt-4">
                  <CalendarIcon  className="text-blue-900"/>
                  <h3 className="text-sm text-blue-900">
                    {event.date}
                  </h3>
                </article>

              </article>
            ))}
          </section>

          <section className="px-10">
            <h2 className="text-xl mt-12 mb-5 text-custom-blue font-semibold">
              Proximos Eventos
            </h2>
            <div className="calendar-container">
              <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-blue-900">
                {diaSemana.map((dia) => (
                  <div key={dia}>{dia}</div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2 text-center text-black text-sm">
                {Array.from({ length: diaMes }, (_, i) => i + 1).map((dia) => (
                  <div
                    key={dia}
                    className="h-10 flex items-center justify-center border rounded-lg bg-gray-100"
                  >
                    {dia}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
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
