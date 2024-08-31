"use client";
import { useEffect } from "react";
import { opensans, poppins } from "@/components/ui/fonts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import LandingLayout from "@/layouts/LandingLayout";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // Importamos Autoplay para el deslizamiento automático
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Importamos CSS de autoplay
import { FaInstagram, FaYoutube, FaWhatsapp, FaFacebook } from "react-icons/fa";

// CSS para las animaciones
const styles = `
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-out, transform 1s ease-out;
  }
  
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Función para manejar las animaciones al hacer scroll
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

  document.querySelectorAll(".fade-in").forEach((element) => {
    observer.observe(element);
  });
};

export default function Home() {
  useEffect(() => {
    handleScrollAnimations();
  }, []);

  return (
    <LandingLayout>
      <style>{styles}</style>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {/* Sección del carrusel de imágenes */}
          <section className="mt-10 bg-custom-blue relative h-screen w-full flex flex-col justify-center items-center snap-start overflow-hidden">
            <div className="absolute inset-0">
              <Swiper
                modules={[Navigation, Autoplay]} // Añadimos Autoplay a los módulos
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 3000, // 3 segundos
                  disableOnInteraction: false, // Autoplay no se desactiva al interactuar
                }}
                loop={true}
                navigation={true}
                allowTouchMove={true} // Permitimos el deslizamiento manual
                className="h-full w-full"
              >
                <SwiperSlide>
                  <Image
                    src="/chicasPlaza.jpg"
                    alt="Background 1"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-custom-blue to-custom-blue opacity-50"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/background.png"
                    alt="Background 2"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-custom-blue to-custom-blue opacity-50"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/chicos.jpeg"
                    alt="Background 3"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-custom-blue to-custom-blue opacity-50"></div>
                </SwiperSlide>
              </Swiper>
            </div>
            <section className={`${poppins.className} font-semibold z-10`}>
              <h1 className="text-center my-4 text-4xl text-white font-raleway">
                Bienvenidos a
              </h1>
              <article className="text-center text-white">
                <h1 className="text-6xl mb-4 text-white font-raleway">DownIsUp</h1>
                <h1 className="text-6xl text-white font-raleway mb-10">Córdoba</h1>
              </article>
            </section>
            <section className="flex flex-col items-center z-10">
              <Link href="/contactanos">
                <Button className="bg-custom-white text-black text-base px-4 py-2 font-semibold font-raleway hover:text-white hover:bg-custom-blue">
                  Contáctanos
                </Button>
              </Link>
            </section>
          </section>

          {/* Sección "Nuestra Historia" */}
          <section className="min-h-[calc(100vh-100px)] w-full flex flex-col md:flex-row snap-start transition-transform duration-1200 ease-in-out relative fade-in">
            <div className="w-full md:w-4/12 flex flex-col justify-center items-center text-center p-6 md:p-10 z-10 bg-custom-blue md:bg-transparent">
              <Image
                src="/logo-du.png"
                alt="DownIsUp Córdoba Logo"
                width={100}
                height={100}
                className="mb-4 md:mb-6"
              />
              <p className="text-white text-lg md:text-xl leading-relaxed">
                "LOGRAR LA
              </p>
              <p className="text-white text-xl md:text-2xl font-extrabold leading-relaxed">
                AUTONOMÍA Y VIDA INDEPENDIENTE
              </p>
              <p className="text-white text-lg md:text-xl leading-relaxed">
                ES UN DESAFÍO Y UN RETO, TANTO PARA LA PERSONA, COMO PARA SU ENTORNO"
              </p>
            </div>

            {/* División diagonal, solo visible en pantallas medianas y más grandes */}
            <div className="hidden md:block absolute w-full h-full -inset-x-0 z-0 bg-custom-blue" style={{ clipPath: "polygon(0 0, 38% 0, 25% 100%, 0% 100%)" }}></div>

            <div className="w-full md:w-8/12 flex flex-col justify-center items-center p-6 md:p-10 z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-custom-blue mt-5 mb-5 md:mb-6">NUESTRA HISTORIA</h2>
              <p className="text-base md:text-lg text-custom-blue mb-6 md:mb-10">
                Comenzó en 2015 cuando decidimos comenzar a organizar charlas, acciones y más, trabajando para lograr el cambio que buscábamos. Nos basamos en la existencia de un movimiento nacional llamado Down is Up, con sede en varias provincias, con el fin de satisfacer la necesidad de contención, atención e información sobre el Síndrome de Down.
              </p>
              <p className="text-custom-blue text-base md:text-lg mb-6">
                <Image src="/tick.png" alt="Tick" className="inline-block mr-2" width={16} height={16} /> Promover los derechos reconocidos en la Convención Internacional sobre los Derechos de las Personas con Discapacidad.<br />
                <Image src="/tick.png" alt="Tick" className="inline-block mr-2" width={16} height={16} /> Visibilizar el Síndrome de Down, mediante acciones de educación, formación y actividades sociales y culturales, fortaleciendo la convivencia.<br />
                <Image src="/tick.png" alt="Tick" className="inline-block mr-2" width={16} height={16} /> Fomentar la vida independiente y la autonomía de las personas con síndrome de Down.
              </p>
              <button className="mt-6 mb-10 md:mt-10 px-4 text-base md:text-lg py-2 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700">
                <Link href="/quienessomos/">
                  Ver más
                </Link>
              </button>
            </div>
          </section>
        </main>

        {/* Pie de página con los íconos de redes sociales */}
        <footer className="w-full py-4 bg-gray-700 mt-auto fade-in">
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
      </div>
    </LandingLayout>
  );
}
