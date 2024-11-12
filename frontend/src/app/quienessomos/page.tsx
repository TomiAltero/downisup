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
import {FooterWithLinks} from "@/components/footerLinks"

export default function QuienesSomos() {

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
        <section className="relative w-full h-[60vh] lg:h-screen mb-22" style={{ height: "250px" }}>
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
              delay: 3000, 
              disableOnInteraction: false,
            }}
            loop={true} 
            navigation={false} 
            allowTouchMove={false} 
            className="h-full w-auto"
          >
            <SwiperSlide className="relative h-screen">
              <Image
                src="/background.png"
                alt="Background 1"
                layout="fill"
                objectFit="cover"
                className="z-[-1] "
              />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-700 opacity-50"></div>
            </SwiperSlide>
            <SwiperSlide className="relative h-screen">
              <Image
                src="/chicasPlaza.jpg"
                alt="Background 2"
                layout="fill"
                objectFit="cover"
                className="z-[-1] "
              />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-700 opacity-50"></div>
            </SwiperSlide>
            <SwiperSlide className="relative h-screen">
              <Image
                src="/chicos.jpeg"
                alt="Background 3"
                layout="fill"
                objectFit="cover"
                className="z-[-1] "
              />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-700 opacity-50"></div>
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="mx-4 md:mx-18">
          {/* Sección: Cómo comenzamos */}
          <section className="flex flex-col lg:flex-row justify-center items-center mb-22">
            <div className="w-full lg:w-4/12 ml-4 mb-4 lg:mb-0">
              <Image
                width={350}
                height={350}
                src="/Jornadas.jpg"
                alt="Quienes Somos"
                className="rounded-3xl"
              />
            </div>
            <div className="w-full lg:w-8/12 px-4">
              <h1 className="text-custom-blue text-3xl lg:text-4xl font-semibold mb-5">
                Como comenzamos?
              </h1>
              <p className="text-custom-blue text-lg lg:text-xl">
                Comenzó en 2015 cuando decidimos comenzar a organizar charlas, acciones y más, trabajando para lograr el cambio que buscábamos. Nos basamos en la existencia de un movimiento nacional llamado Down is Up, con sede en varias provincias, con el fin de satisfacer la necesidad de contención, atención e información sobre el Síndrome de Down.
              </p>
            </div>
          </section>

          {/* Sección: Nuestros objetivos */}
          <section className="flex flex-col lg:flex-row justify-center items-center mb-22">
            <div className="w-full lg:w-8/12 mr-4 px-4">
              <h1 className="text-custom-blue text-3xl lg:text-4xl mb-5 font-semibold">
                Nuestros objetivos
              </h1>
              <p className="text-custom-blue text-lg lg:text-xl md:text-md ">
                <Image src="/tick.png" alt="Tick" width={20} height={20} className="inline-block mr-2" /> Visibilizar el Síndrome de Down, mediante acciones de educación, formación y actividades sociales y culturales.<br/>
                <Image src="/tick.png" alt="Tick" width={20} height={20} className="inline-block mr-2" /> Fomentar la vida independiente y la autonomía de las personas con síndrome de Down.<br/>
                <Image src="/tick.png" alt="Tick" width={20} height={20} className="inline-block mr-2" /> Promover los derechos reconocidos en la Convención Internacional sobre los Derechos de las Personas con Discapacidad.<br/>
              </p>
            </div>
            <div className="w-full lg:w-4/12 mt-4 lg:mt-0">
              <Image
                width={350}
                height={350}
                src="/fotoquienessomos2.png"
                alt="Quienes Somos"
                className="rounded-3xl"
              />
            </div>
          </section>
        </section>
        <FooterWithLinks />
      </main>
    </LandingLayout>
  );
}
