"use client";
import { opensans } from "@/components/ui/fonts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import LandingLayout from "@/layouts/LandingLayout";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  return (
    <LandingLayout>
      <main className="h-screen w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth">
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
                  src="/background.png" // Cambia estas rutas por las imágenes que desees usar
                  alt="Background 1"
                  layout="fill"
                  objectFit="cover"
                  className="z-[-1] opacity-95"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/chicasPlaza.jpg"
                  alt="Background 2"
                  layout="fill"
                  objectFit="cover"
                  className="z-[-1] opacity-95"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/chicos.jpg"
                  alt="Background 3"
                  layout="fill"
                  objectFit="cover"
                  className="z-[-1] opacity-95"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <section className={`${opensans.className} font-semibold z-10`}>
            <h1 className="text-center my-4 text-4xl text-white font-raleway">
              Bienvenidos a
            </h1>
            <article className="text-6xl text-center text-white">
              <h1 className="mb-4 text-white font-raleway">DownIsUp</h1>
              <h1 className="text-white font-raleway mb-10">Córdoba</h1>
            </article>
          </section>
          <section className="flex flex-col items-center z-10">
            <Link href="/contactanos">
              <Button className="bg-custom-white text-black text-base px-4 py-2 font-semibold font-raleway animate-pulse hover:text-white hover:bg-custom-blue">
                Contáctanos
              </Button>
            </Link>
          </section>
        </section>

        {/* Segunda sección que aparece al hacer scroll */}
        <section className="h-screen w-full bg-white flex flex-col justify-center items-center snap-start transition-transform duration-700 ease-in-out">
          <h2 className="text-4xl font-bold">Segunda Sección</h2>
          <p className="text-lg mt-4">Contenido adicional aquí...</p>
        </section>
      </main>
    </LandingLayout>
  );
}
