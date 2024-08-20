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
                  src="/chicos.jpeg"
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

        <section className="h-screen w-full flex snap-start transition-transform duration-700 ease-in-out relative">
          {/* Columna izquierda: 3/12 */}
          <div className="w-4/12 flex flex-col justify-center items-center text-center p-10 z-10 -mt-40">
          
            <Image
              src="/logo-du.png"
              alt="DownIsUp Córdoba Logo"
              width={125}
              height={125}
              className="mb-6"
            />
            <p className="text-white text-xl leading-relaxed">
              "LOGRAR LA 
            </p>
            <p className="text-white text-2xl font-extrabold leading-relaxed">
              AUTONOMÍA Y VIDA INDEPENDIENTE
            </p>
            <p className="text-white text-xl leading-relaxed">
              ES UN DESAFÍO Y UN RETO, TANTO PARA LA PERSONA, COMO PARA SU ENTORNO"
            </p>
          </div>

          {/* División diagonal */}
          <div className="absolute w-full h-full -inset-x-30 z-0 bg-custom-blue" style={{ clipPath: "polygon(0 0, 45% 0, 35% 100%, 0% 100%)" }}></div>

          {/* Columna derecha: 9/12 */}
          <div className="w-8/12 flex flex-col justify-center items-center p-10 z-10"><br></br>
            <h2 className="text-5xl font-bold text-custom-blue mb-6">NUESTRA HISTORIA</h2>
            <p className="text-lg text-custom-blue mb-10">
              Comenzó en 2015 cuando decidimos comenzar a organizar charlas, acciones y más, trabajando para lograr el cambio que buscábamos. Nos basamos en la existencia de un movimiento nacional llamado Down is Up, con sede en varias provincias, con el fin de satisfacer la necesidad de contención, atención e información sobre el Síndrome de Down.
            </p><br></br>
            <p className="text-custom-blue text-lg">
              <Image src="/tick.png" alt="Tick" className="inline-block mr-2" width={20} height={20}/> Promover los derechos reconocidos en la Convención Internacional sobre los Derechos de las Personas con Discapacidad.<br/>
              <Image src="/tick.png" alt="Tick" className="inline-block mr-2" width={20} height={20}/> Visibilizar el Síndrome de Down, mediante acciones de educación, formación y actividades sociales y culturales, fortaleciendo la convivencia.<br/>
              <Image src="/tick.png" alt="Tick" className="inline-block mr-2" width={20} height={20}/> Fomentar la vida independiente y la autonomía de las personas con síndrome de Down.
            </p>
            <button className="mt-10 px-4 text-lg py-2 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600">
              <Link href="/quienessomos/">
                Ver más
              </Link>
            </button>
          </div>
        </section>



      </main>
    </LandingLayout>
  );
}
