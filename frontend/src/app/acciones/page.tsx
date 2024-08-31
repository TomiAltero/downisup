
import LandingLayout from "@/layouts/LandingLayout";
import { useState } from "react";
import { poppins } from "@/components/ui/fonts";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const diaSemana = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
const diaMes = 31;

const eventCards = [
  {
    title: "Ponemos casa en valle escondido",
    shortDescription: "Short description for Event 1",
    longDescription: "Long description for Event 1",
    image: "/chicasPlaza.jpg",
  },
  {
    title: "Event 2",
    shortDescription: "Short description for Event 2",
    longDescription: "Long description for Event 2",
    image: "/chicasPlaza.jpg",
  },
  {
    title: "Event 3",
    shortDescription: "Short description for Event 3",
    longDescription: "Long description for Event 3",
    image: "/chicasPlaza.jpg",
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
                className="flex flex-col items-center justify-center w-120 h-73 bg-gray-300 rounded-3xl shadow-md p-5 m-5 gap-1"
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
      </main>
    </LandingLayout>
  );
}
