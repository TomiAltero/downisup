"use client"; // Añadir esta línea

import Image from "next/image";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import LandingLayout from "@/app/landinglyout";

type SectionKey = 'mission' | 'vision' | 'history';

const sections: Record<SectionKey, { title: string; content: JSX.Element }> = {
  mission: {
    title: "Nuestra Misión",
    content: (
      <>
        <p>- Promover los derechos reconocidos en la Convención Internacional sobre los Derechos de las Personas con Discapacidad.</p>
        <p>- Visibilizar el Síndrome de Down, mediante acciones de educación, formación y actividades sociales y culturales, fortaleciendo la convivencia.</p>
        <p>- Fomentar la vida independiente y la autonomía de las personas con síndrome de Down.</p>
      </>
    )
  },
  vision: {
    title: "Nuestra Visión",
    content: (
      <>
        <p>- Informar y capacitar a la sociedad en general en temas referidos a la diversidad.</p>
        <p>- Impulsar la generación de políticas públicas, para el sector.</p>
        <p>- Cooperar técnicamente y articular con instituciones públicas y privadas, nacionales e internacionales, para el logro de nuestros objetivos</p>
        <p>- Generar programas de contención, de desarrollo y autonomía.</p>
        <p>- Formar a las personas con síndrome de Down para ejercer su derecho a la vida independiente en su entorno comunitario.</p>
      </>
    )
  },
  history: {
    title: "Nuestra Historia",
    content: (
      <>
        <p>Somos una Fundación creada por familias que acompañamos a otras familias en el camino de la inclusión de nuestros hijos. Tenemos como eje informar, compartir y motivar a todos los que quieran participar en este cambio de mirada sobre discapacidad.Nuestra historia comenzó en 2015 cuando decidimos comenzar organizar charlas, acciones y más, trabajando para lograr el cambio que buscábamos. Basándonos en la existencia de un movimiento nacional llamado Down is Up, con sede en varias provincias, nace esta comunidad con el fin de satisfacer la necesidad de contención, atención e información sobre el Síndrome de Down.</p>
      </>
    )
  }
};

export default function QuienesSomos() {
  const [activeSection, setActiveSection] = useState<SectionKey | "">("");

  const renderSectionContent = () => {
    if (activeSection && sections[activeSection]) {
      return (
        <section className="mt-8">
          <h2 className="text-custom-blue font-extrabold text-2xl text-center mb-4">
            {sections[activeSection].title}
          </h2>
          <div className="text-sm text-justify text-custom-blue">
            {sections[activeSection].content}
          </div>
        </section>
      );
    }
    return null;
  };

  return (
    <LandingLayout>
      <main className="flex flex-col justify-center mx-14">
        <section className="mt-14 mb-24">
          <h1 className="text-custom-blue -mt-3 text-3xl font-bold text-center">
            QUIENES SOMOS?
          </h1>
        </section>
        <section className="flex justify-between px-16 -mt-6">
          <article
            className="flex flex-col items-center gap-y-2 p-6 rounded-3xl bg-white cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-2xl animate-pulse"
            onClick={() => setActiveSection("mission")}
          >
            <Image
              width={138}
              height={131}
              src="/mision.png"
              alt="Mision Log"
            />
          </article>
          <article
            className="flex flex-col items-center gap-y-2 p-6 rounded-3xl bg-white cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-2xl animate-pulse"
            onClick={() => setActiveSection("vision")}
          >
            <Image
              width={219}
              height={129}
              src="/vision.png"
              alt="Vision Log"
            />
          </article>
          <article
            className="flex flex-col items-center gap-y-2 p-6 rounded-3xl bg-white cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-2xl animate-pulse"
            onClick={() => setActiveSection("history")}
          >
            <Image
              width={167}
              height={150}
              src="/historia.png"
              alt="Historia Log"
            />
          </article>
        </section>
        {renderSectionContent()}
      </main>
    </LandingLayout>
  );
}
