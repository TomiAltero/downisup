"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import LandingLayout from "@/layouts/LandingLayout";
type SectionKey = 'mission' | 'vision' | 'history';

const sections: Record<SectionKey, { title: string; content: JSX.Element }> = {
  mission: {
    title: "Nuestra Misión",
    content: (
      <>
        <p><FontAwesomeIcon icon={faCheck} className="text-custom-blue" /> Promover los derechos reconocidos en la Convención Internacional sobre los Derechos de las Personas con Discapacidad.</p>
        <p><FontAwesomeIcon icon={faCheck} className="text-custom-blue" /> Visibilizar el Síndrome de Down, mediante acciones de educación, formación y actividades sociales y culturales, fortaleciendo la convivencia.</p>
        <p><FontAwesomeIcon icon={faCheck} className="text-custom-blue" /> Fomentar la vida independiente y la autonomía de las personas con síndrome de Down.</p>
      </>
    )
  },
  vision: {
    title: "Nuestra Visión",
    content: (
      <>
        <p><FontAwesomeIcon icon={faCheck} className="text-custom-blue" /> Informar y capacitar a la sociedad en general en temas referidos a la diversidad.</p>
        <p><FontAwesomeIcon icon={faCheck} className="text-custom-blue" /> Impulsar la generación de políticas públicas, para el sector.</p>
        <p><FontAwesomeIcon icon={faCheck} className="text-custom-blue" /> Cooperar técnicamente y articular con instituciones públicas y privadas, nacionales e internacionales, para el logro de nuestros objetivos</p>
        <p><FontAwesomeIcon icon={faCheck} className="text-custom-blue" /> Generar programas de contención, de desarrollo y autonomía.</p>
        <p><FontAwesomeIcon icon={faCheck} className="text-custom-blue" /> Formar a las personas con síndrome de Down para ejercer su derecho a la vida independiente en su entorno comunitario.</p>
      </>
    )
  },
  history: {
    title: "Nuestra Historia",
    content: (
      <>
        <p><FontAwesomeIcon icon={faCheck} className="text-custom-blue" /> Somos una Fundación creada por familias que acompañamos a otras familias en el camino de la inclusión de nuestros hijos. Tenemos como eje informar, compartir y motivar a todos los que quieran participar en este cambio de mirada sobre discapacidad. Nuestra historia comenzó en 2015 cuando decidimos comenzar organizar charlas, acciones y más, trabajando para lograr el cambio que buscábamos. Basándonos en la existencia de un movimiento nacional llamado Down is Up, con sede en varias provincias, nace esta comunidad con el fin de satisfacer la necesidad de contención, atención e información sobre el Síndrome de Down.</p>
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

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <LandingLayout>
      <main className="flex flex-col justify-center mx-14">
      <section className="relative mb-24">
        <h1 className="text-custom-blue text-3xl text-center mb-4">
          QUIENES SOMOS?
        </h1>
        <div className="relative w-full" style={{ height: "300px" }}>
          <img 
            src="background.png" 
            alt="Imagen de fondo" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>



        <section className="flex justify-center items-center mb-22">
        <div className="w-4/12 ml-4">
          <Image
              width={300}
              height={300}
              src="/persona2.webp"
              alt="Quienes Somos"
              className="rounded-3xl"
            />
        </div>
          <div className="w-8/12 ml-4"> 
            <h1 className="text-custom-blue text-4xl font-semibold mb-5">
              Como comenzamos?
            </h1>
            <p className="text-custom-blue text-lg">
            Comenzó en 2015 cuando decidimos comenzar a organizar charlas, acciones y más, trabajando para lograr el cambio que buscábamos. Nos basamos en la existencia de un movimiento nacional llamado Down is Up, con sede en varias provincias, con el fin de satisfacer la necesidad de contención, atención e información sobre el Síndrome de Down.
              </p>
          </div>
        </section>
        <section className="flex justify-center items-center mb-22">
          <div className="w-8/12 mr-4"> 
            <h1 className="text-custom-blue text-4xl mb-5 font-semibold">
              Nuestros Objetivos
            </h1>
            <p className="text-custom-blue text-lg">
              <img src="/tick.png" alt="Tick" className="inline-block mr-2" width={20} height={20}/> Promover los derechos reconocidos en la Convención Internacional sobre los Derechos de las Personas con Discapacidad.<br/>
              <img src="/tick.png" alt="Tick" className="inline-block mr-2" width={20} height={20}/> Visibilizar el Síndrome de Down, mediante acciones de educación, formación y actividades sociales y culturales, fortaleciendo la convivencia.<br/>
              <img src="/tick.png" alt="Tick" className="inline-block mr-2" width={20} height={20}/> Fomentar la vida independiente y la autonomía de las personas con síndrome de Down.
            </p>
          </div>
          <div className="w-4/12 ml-4">
            <Image
              width={300}  
              height={300} 
              src="/persona2.webp"
              alt="Quienes Somos"
              className="rounded-3xl" 
            />
          </div>
        </section>




        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
        <section className="flex justify-between px-16 -mt-15">
          <article
            className={`flex flex-col items-center gap-y-2 p-6 rounded-3xl bg-white cursor-pointer border-2 transition-shadow duration-300 ease-in-out ${
              activeSection === "mission" ? "shadow-2xl border-blue-500" : "hover:shadow-lg"
            }`}
            onClick={() => setActiveSection("mission")}
          >
            <Image
              width={167}
              height={150}
              src="/mision.png"
              alt="Mision Log"
            />
          </article>
          <article
            className={`flex flex-col items-center gap-y-2 p-6 rounded-3xl bg-white cursor-pointer border-2 transition-shadow duration-300 ease-in-out ${
              activeSection === "vision" ? "shadow-2xl border-blue-500" : "hover:shadow-lg"
            }`}
            onClick={() => setActiveSection("vision")}
          >
            <Image
              width={167}
              height={150}
              src="/vision.png"
              alt="Vision Log"
            />
          </article>
          <article
            className={`flex flex-col items-center gap-y-2 p-6 rounded-3xl bg-white cursor-pointer border-2 transition-shadow duration-300 ease-in-out ${
              activeSection === "history" ? "shadow-2xl border-blue-500" : "hover:shadow-lg"
            }`}
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
        </motion.div>
        {renderSectionContent()}
      </main>
    </LandingLayout>
  );
}
