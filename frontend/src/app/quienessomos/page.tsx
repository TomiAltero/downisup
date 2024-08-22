"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import LandingLayout from "@/layouts/LandingLayout";

type SectionKey = 'mission' | 'vision' | 'history';

const sections: Record<SectionKey, { title: string; content: JSX.Element }> = {
  mission: {
    title: "Nuestra Misión",
    content: (
      <div className="mt-2 mb-4 flex flex-col gap-2 text-">
        <p className=''><img src="/tick.png" alt="Tick" className="inline-block mr-2" width={15} height={15}/> Promover los derechos reconocidos en la Convención Internacional sobre los Derechos de las Personas con Discapacidad.</p>
        <p className=''><img src="/tick.png" alt="Tick" className="inline-block mr-2" width={15} height={15}/> Visibilizar el Síndrome de Down, mediante acciones de educación, formación y actividades sociales y culturales, fortaleciendo la convivencia.</p>
        <p className=''><img src="/tick.png" alt="Tick" className="inline-block mr-2" width={15} height={15}/> Fomentar la vida independiente y la autonomía de las personas con síndrome de Down.</p>
      </div>
    )
  },
  vision: {
    title: "Nuestra Visión",
    content: (
      <div className="mt-2 mb-4 flex flex-col gap-2 text-">
        <p><img src="/tick.png" alt="Tick" className="text-custom-blue inline-block mr-2" width={15} height={15}/> Informar y capacitar a la sociedad en general en temas referidos a la diversidad.</p>
        <p><img src="/tick.png" alt="Tick" className="text-custom-blue inline-block mr-2" width={15} height={15}/> Impulsar la generación de políticas públicas, para el sector.</p>
        <p><img src="/tick.png" alt="Tick" className="text-custom-blue inline-block mr-2" width={15} height={15}/> Cooperar técnicamente y articular con instituciones públicas y privadas, nacionales e internacionales, para el logro de nuestros objetivos</p>
        <p><img src="/tick.png" alt="Tick" className="text-custom-blue inline-block mr-2" width={15} height={15}/> Generar programas de contención, de desarrollo y autonomía.</p>
        <p><img src="/tick.png" alt="Tick" className="text-custom-blue inline-block mr-2" width={15} height={15}/> Formar a las personas con síndrome de Down para ejercer su derecho a la vida independiente en su entorno comunitario.</p>
      </div>
    )
  },
  history: {
    title: "Nuestra Historia",
    content: (
      <div className="mt-2 mb-4 flex flex-col gap-2 text-">
        <p><img src="/tick.png" alt="Tick" className="text-custom-blue inline-block mr-2" width={15} height={15}/> Somos una Fundación creada por familias que acompañamos a otras familias en el camino de la inclusión de nuestros hijos. Tenemos como eje informar, compartir y motivar a todos los que quieran participar en este cambio de mirada sobre discapacidad. Nuestra historia comenzó en 2015 cuando decidimos comenzar organizar charlas, acciones y más, trabajando para lograr el cambio que buscábamos. Basándonos en la existencia de un movimiento nacional llamado Down is Up, con sede en varias provincias, nace esta comunidad con el fin de satisfacer la necesidad de contención, atención e información sobre el Síndrome de Down.</p>
      </div>
    )
  }
};

export default function QuienesSomos() {
  const [activeSection, setActiveSection] = useState<SectionKey | "">("");

  const renderSectionContent = () => {
    if (activeSection && sections[activeSection]) {
      return (
        <section className="mt-8 mx-8">
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
      <main className="flex flex-col justify-center">
          {/* Sección del carrusel de imágenes */}
          <section className="relative w-full h-screen mb-22" style={{ height: "300px" }}>
            {/* Título sobre el carrusel */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <h1 className="text-white text-4xl font-bold mt-10">QUIENES SOMOS</h1>
            </div>

            {/* Carrusel de imágenes */}
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000, // Cambia cada 3 segundos
                disableOnInteraction: false,
              }}
              loop={true} // Vuelve a la primera imagen después de la última
              navigation={false} // Habilita las flechas de navegación
              allowTouchMove={false} // Deshabilita el arrastre manual
              className="h-full w-full"
            >
              <SwiperSlide  className="relative h-screen">
                <Image
                  src="/background.png" // Cambia estas rutas por las imágenes que desees usar
                  alt="Background 1"
                  layout="fill"
                  objectFit="cover"
                  className="z-[-1] "
                />      <div className="absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-700 opacity-50"></div>

              </SwiperSlide>
              <SwiperSlide  className="relative h-screen">
                <Image
                  src="/chicasPlaza.jpg"
                  alt="Background 2"
                  layout="fill"
                  objectFit="cover"
                  className="z-[-1] "
                />      <div className="absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-700 opacity-50"></div>

              </SwiperSlide>
              <SwiperSlide  className="relative h-screen">
                <Image
                  src="/chicos.jpeg"
                  alt="Background 3"
                  layout="fill"
                  objectFit="cover"
                  className="z-[-1] "
                />      <div className="absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-700 opacity-50"></div>

              </SwiperSlide>
            </Swiper>
          </section>
        <section className="mx-18">
            

          <section className="flex justify-center items-center mb-22">
            <div className="w-4/12 ml-4">
              <Image
                width={350}
                height={350}
                src="/persona2.webp"
                alt="Quienes Somos"
                className="rounded-3xl"
              />
            </div>
            <div className="w-8/12 ml-4">
              <h1 className="text-custom-blue text-4xl font-semibold mb-5">
                Como comenzamos?
              </h1>
              <p className="text-custom-blue text-xl">
                Comenzó en 2015 cuando decidimos comenzar a organizar charlas, acciones y más, trabajando para lograr el cambio que buscábamos. Nos basamos en la existencia de un movimiento nacional llamado Down is Up, con sede en varias provincias, con el fin de satisfacer la necesidad de contención, atención e información sobre el Síndrome de Down.
              </p>
            </div>
          </section>

          <section className="flex justify-center items-center mb-22">
            <div className="w-8/12 mr-4">
              <h1 className="text-custom-blue text-4xl mb-5 font-semibold">
                Nuestros objetivos
              </h1>
              <p className="text-custom-blue text-xl">
                <img src="/tick.png" alt="Tick" className="inline-block mr-2" width={20} height={20}/> Visibilizar el Síndrome de Down, mediante acciones de educación, formación y actividades sociales y culturales.<br/>
                <img src="/tick.png" alt="Tick" className="inline-block mr-2" width={20} height={20}/> Fomentar la vida independiente y la autonomía de las personas con síndrome de Down.<br/>
                <img src="/tick.png" alt="Tick" className="inline-block mr-2" width={20} height={20}/> Promover los derechos reconocidos en la Convención Internacional sobre los Derechos de las Personas con Discapacidad.<br/>
              </p>
            </div>
            <div className="w-4/12 ml-4">
              <Image
                width={350}
                height={350}
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
            <section className="flex justify-between px-16 -mt-10">
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
        </section>
      </main>
    </LandingLayout>
  );
}
