"use client";
import { useEffect } from "react";
import { opensans } from "@/components/ui/fonts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import LandingLayout from "@/layouts/LandingLayout";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaInstagram, FaYoutube, FaWhatsapp, FaFacebook } from "react-icons/fa";

const handleScrollAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".animate-on-scroll").forEach((element) => {
    observer.observe(element);
  });
};

export default function Home() {
  useEffect(() => {
    handleScrollAnimations();
  }, []);

  return (
    <LandingLayout>
      <main className="h-screen w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth custom-scrollbar">
        {/* Sección del carrusel de imágenes */}
        <section className="relative h-screen w-full flex flex-col justify-center items-center snap-start overflow-hidden">
          <div className="absolute inset-0">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000, // Cambia cada 3 segundos
                disableOnInteraction: false,
              }}
              loop={true} // Vuelve a la primera imagen después de la última
              navigation={true} // Habilita las flechas de navegación
              allowTouchMove={false} // Deshabilita el arrastre manual
              className="h-full w-full"
            >
              <SwiperSlide>
                <Image
                  src="/chicasPlaza.jpg" // Cambia estas rutas por las imágenes que desees usar
                  alt="Background 1"
                  layout="fill"
                  objectFit="cover"
                  className="z-[-1] opacity-95"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/background.png"
                  alt="Background 2"
                  layout="fill"
                  objectFit="cover"
                  className="z-[-1] opacity-95"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/chicos.jpeg"
                  alt="Background 3"
                  layout="fill"
                  objectFit="cover"
                  className="z-[-1] opacity-95"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <section className={`${opensans.className} font-semibold z-10 animate-on-scroll`}>
            <h1 className="text-center my-4 text-4xl text-white font-raleway">
              Bienvenidos a
            </h1>
            <article className="text-6xl text-center text-white animate-on-scroll">
              <h1 className="mb-4 text-white font-raleway">DownIsUp</h1>
              <h1 className="text-white font-raleway mb-10">Córdoba</h1>
            </article>
          </section>
          <section className="flex flex-col items-center z-10 animate-on-scroll">
            <Link href="/contactanos">
              <Button className="bg-custom-white text-black text-base px-4 py-2 font-semibold font-raleway hover:text-white hover:bg-custom-blue">
                Contáctanos
              </Button>
            </Link>
          </section>
        </section>

        <section className="min-h-[calc(100vh-100px)] w-full flex flex-col md:flex-row snap-start transition-transform duration-1200 ease-in-out relative animate-on-scroll">
          {/* Columna izquierda: 4/12 en pantallas medianas y más grandes */}
          <div className="w-full md:w-4/12 flex flex-col justify-center items-center text-center p-6 md:p-10 z-10 -mt-20 md:-mt-40 bg-custom-blue md:bg-transparent">
            <Image
              src="/logo-du.png"
              alt="DownIsUp Córdoba Logo"
              width={100}
              height={100}
              className="mb-4 md:mb-6"
            />
            <p className="text-white text-lg md:text-xl leading-relaxed">
              &quotLOGRAR LA
            </p>
            <p className="text-white text-xl md:text-2xl font-extrabold leading-relaxed">
              AUTONOMÍA Y VIDA INDEPENDIENTE
            </p>
            <p className="text-white text-lg md:text-xl leading-relaxed">
              ES UN DESAFÍO Y UN RETO, TANTO PARA LA PERSONA, COMO PARA SU ENTORNO&quot
            </p>
          </div>

          {/* División diagonal, sólo visible en pantallas medianas y más grandes */}
          <div className="hidden md:block absolute w-full h-full -inset-x-0 z-0 bg-custom-blue" style={{ clipPath: "polygon(0 0, 38% 0, 25% 100%, 0% 100%)" }}></div>

          {/* Columna derecha: 8/12 en pantallas medianas y más grandes */}
          <div className="w-full md:w-8/12 flex flex-col justify-center items-center p-6 md:p-10 z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-custom-blue mb-4 md:mb-6">NUESTRA HISTORIA</h2>
            <p className="text-base md:text-lg text-custom-blue mb-6 md:mb-10">
              Comenzó en 2015 cuando decidimos comenzar a organizar charlas, acciones y más, trabajando para lograr el cambio que buscábamos. Nos basamos en la existencia de un movimiento nacional llamado Down is Up, con sede en varias provincias, con el fin de satisfacer la necesidad de contención, atención e información sobre el Síndrome de Down.
            </p>
            <p className="text-custom-blue text-base md:text-lg mb-6">
              <Image src="/tick.png" alt="Tick" className="inline-block mr-2" width={16} height={16}/> Promover los derechos reconocidos en la Convención Internacional sobre los Derechos de las Personas con Discapacidad.<br/>
              <Image src="/tick.png" alt="Tick" className="inline-block mr-2" width={16} height={16}/> Visibilizar el Síndrome de Down, mediante acciones de educación, formación y actividades sociales y culturales, fortaleciendo la convivencia.<br/>
              <Image src="/tick.png" alt="Tick" className="inline-block mr-2" width={16} height={16}/> Fomentar la vida independiente y la autonomía de las personas con síndrome de Down.
            </p>
            <button className="mt-6 md:mt-10 px-4 text-base md:text-lg py-2 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600">
              <Link href="/quienessomos/">
                Ver más
              </Link>
            </button>
          </div>
        </section>



        {/* Pie de página con los iconos de redes sociales */}
        <footer className="w-full py-4 bg-gray-700">
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
