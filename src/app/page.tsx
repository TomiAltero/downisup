"use client";
import { useEffect } from "react";
import { opensans, poppins } from "@/components/ui/fonts";
import { Button } from "@/components/ui/button";
import { ButtonHome, ButtonShowMore } from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import LandingLayout from "@/layouts/LandingLayout";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // Importamos Autoplay para el deslizamiento automático
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Importamos CSS de autoplay
import { Footer } from "../components/footer";
import { FooterWithLinks } from "@/components/footerLinks";
import { PhoneIconSvg, MessageIconSvg, PinIconSvg, CalendarIcon} from "@/components/ui/icons"

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

const eventCards = [
  {
    title: "Día internacional del Síndrome de Down",
    shortDescription: "Todos somos iguales, pero diferentes",
    longDescription: "Long description for Event 1",
    image: "/DiaInternacional.webp",
    date : "Martes 3 de Septiembre"
  },
  {
    title: "2das Jornadas sobre el Síndrome de Down",
    shortDescription: "Educar hijos en el camino a la autonomia.",
    longDescription: "Long description for Event 2",
    image: "/Jornadas.jpg",
    date : "Martes 3 de Septiembre"

  },
];


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
                    src="/fotoquienessomos2.png"
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
                <div className="bg-custom-blue shadow-lg shadow-indigo-500/50 rounded-lg"><ButtonHome /></div>
            </section>
          </section>

          {/* Segunda sección */}
          <section className="min-h-[calc(100vh-100px)] w-full flex flex-col md:flex-row snap-start transition-transform duration-1200 ease-in-out relative fade-in">
            <div className="w-full md:w-4/12 flex flex-col justify-center items-center text-center p-6 md:p-10 z-10 bg-custom-blue md:bg-transparent">
              <Image
                src="/logo-du.png"
                alt="DownIsUp Córdoba Logo"
                width={100}
                height={100}
                className="lg:-mt-30 md:mt-0  mb-4 md:mb-6"
              />
              <p className="text-white text-lg md:text-xl leading-relaxed">&quot;LOGRAR LA</p>
              <p className="text-white text-xl md:text-2xl font-extrabold leading-relaxed">AUTONOMÍA Y VIDA INDEPENDIENTE</p>
              <p className="text-white text-lg md:text-xl leading-relaxed">ES UN DESAFÍO Y UN RETO, TANTO PARA LA PERSONA, COMO PARA SU ENTORNO&quot;</p>
            </div>

            {/* División diagonal, solo visible en pantallas medianas y más grandes */}
            <div className="hidden md:block absolute w-full h-full -inset-x-0 z-0 bg-custom-blue" style={{ clipPath: "polygon(0 0, 38% 0, 25% 100%, 0% 100%)" }}></div>

            <div className="w-full md:w-8/12 flex flex-col justify-center items-center p-6 md:p-10 z-10">
              <h2 className="lg:text-4xl md:text-5xl font-bold text-custom-blue mt-5 mb-5 md:mb-6">NUESTRA HISTORIA</h2>
              <p className="text-base md:text-lg text-custom-blue mb-6 md:mb-10">
                Comenzó en 2015 cuando decidimos comenzar a organizar charlas, acciones y más, trabajando para lograr el cambio que buscábamos. Nos basamos en la existencia de un movimiento nacional llamado Down is Up, con sede en varias provincias, con el fin de satisfacer la necesidad de contención, atención e información sobre el Síndrome de Down.
              </p>
              <p className="text-custom-blue text-base md:text-lg mb-6">
                <Image src="/tick.png" alt="Tick" className="inline-block mr-2" width={16} height={16} /> Promover los derechos reconocidos en la Convención Internacional sobre los Derechos de las Personas con Discapacidad.<br />
                <Image src="/tick.png" alt="Tick" className="inline-block mr-2" width={16} height={16} /> Visibilizar el Síndrome de Down, mediante acciones de educación, formación y actividades sociales y culturales, fortaleciendo la convivencia.<br />
                <Image src="/tick.png" alt="Tick" className="inline-block mr-2" width={16} height={16} /> Fomentar la vida independiente y la autonomía de las personas con síndrome de Down.
              </p>
              <div className="bg-pink-600 shadow-lg shadow-pink-500/50 rounded-lg "><ButtonShowMore /></div>
            </div>
          </section>

          <Footer/>

          {/* Tercera sección */}
          <section className="min-h-[calc(100vh-120px)] w-full flex flex-col md:flex-row snap-start transition-transform duration-1200 ease-in-out relative fade-in">
            {/* Sección de contenido a la izquierda */}
            <div className="w-full md:w-6/12 flex flex-col justify-center items-center p-6 md:p-10 z-10 bg-white">
              <Image
                src="/ubicacionZoom.png"
                alt="Ubicacion fundacion"
                width={1000}
                height={1400}
                className="mb-4 md:mb-6 rounded-3xl"
              />
              <a href="https://maps.app.goo.gl/cpvhnUq2XH37BnCi8" className="text-custom-blue text-lg mt-5 mb-5 leading-relaxed flex items-center hover:underline"><PinIconSvg/>Pérez de Herrera 2053</a>
            </div>

            {/* División diagonal invertida */}
            <div
              className="hidden md:block absolute w-full h-full -inset-x-0 z-0 bg-custom-blue"
              style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 60% 100%)" }}
            ></div>

            {/* Sección con imagen y texto a la derecha */}
            <div className="w-full md:w-6/12 flex flex-col justify-center items-center text-center p-6 md:p-10 z-10 bg-custom-blue md:bg-transparent">
              <h2 className="text-white lg:text-4xl md:text-lg lg:-mt-30 md:mt-0 mb-5 font-semibold leading-relaxed">
                VENI A CONOCERNOS
              </h2>
              <p className="text-white text-base lg:mx-30 md:mx-10 leading-relaxed">
                Programas de tratamiento diseñados para mejorar la calidad  de vida y la participación de personas con discapacidad en diversos ámbitos. En los consultorios, se enfocan en trabajar 
                de manera integral con profesionales y familias para lograr la autonomía de cada paciente, estableciendo objetivos específicos y enfatizando la comunicación y la experiencia como fundamentales para el éxito del tratamiento.
              </p>
            </div>

          </section>

          {/* Footer para la tercera sección */}
          <footer className="w-full py-5 bg-gray-800 mt-auto fade-in">
            <div className="flex justify-center space-x-8 flex-wrap">
              {/* © 2024 Fundación DownIsUp. Todos los derechos reservados. */}
            <p className="text-white text-lg md:text-md text-center">“Sabemos que el potencial de las personas con síndrome de Down no tiene límites.”</p>
            </div>
          </footer>

          {/* Cuarta sección */}
          <section className="h-screen w-full flex flex-col md:flex-row snap-start transition-transform duration-1200 ease-in-out relative fade-in">
            <div className="w-full md:w-4/12 flex flex-col justify-center items-center lg:-mt-30 md:mt-0 p-6 md:p-10 z-10 bg-custom-blue md:bg-transparent">
              <div className="flex flex-col items-center md:items-start">
                <p className="text-white text-xl md:text-2xl text-center font-bold leading-relaxed">
                  INFORMACIÓN DE CONTACTO
                </p>
                <p className="text-white text-lg mt-5 mb-5 leading-relaxed flex items-center">
                  <PhoneIconSvg /> <a href="tel:+3517960194" className="text-white text-lg hover:underline">3517960194</a>
                </p>
                <p className="text-white text-lg mt-5 mb-5 leading-relaxed flex items-center">
                  <MessageIconSvg /><a href="mailto:fundaciondownisupcbacba@gmail.com" className="text-white text-lg hover:underline">fundaciondownisupcbacba@gmail.com</a>
                </p>
                <a href="https://maps.app.goo.gl/cpvhnUq2XH37BnCi8" className="text-white text-lg mt-5 mb-5 leading-relaxed flex items-center hover:underline"><PinIconSvg />Pérez de Herrera 2053</a>
              </div>
            </div>

            {/* División diagonal, solo visible en pantallas medianas y más grandes */}
            <div className="hidden md:block absolute w-full h-full -inset-x-0 z-0 bg-custom-blue" style={{ clipPath: "polygon(0 0, 38% 0, 25% 100%, 0% 100%)" }}></div>

            <div className="w-full md:w-8/12 flex flex-col justify-center items-center p-6 md:p-10 z-10">
              {eventCards.map((event, index) => (
                <article
                  key={index}
                  className="flex flex-col items-center justify-center w-full max-w-md bg-gray-200 rounded-3xl shadow-md p-4 m-4 gap-2"
                >
                  <h2 className="text-xl mt-4 mb-4 text-custom-blue font-semibold text-center">
                    {event.title}
                  </h2>

                  <div className="flex flex-col md:flex-row gap-x-4">
                    <Image
                      src={event.image}
                      alt="Event"
                      className="object-cover rounded-3xl"
                      width={200}
                      height={200}
                    />
                    <div className="flex flex-col justify-between py-6">
                      <p className="text-sm text-center text-gray-700">
                        {event.shortDescription}
                      </p>
                      <Button className="mt-4 bg-custom-blue text-white px-4 py-2 rounded-lg">
                        <a href="/acciones">Ver más</a>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-2 mt-4">
                    <CalendarIcon className="text-sm size-5 text-black" />
                    <h3 className="text-sm">{event.date}</h3>
                  </div>
                </article>
              ))}
            </div>
          </section>


          {/* Footer para la cuarta sección */}
          <footer className="hidden md:block w-full mt-auto fade-in">
            <FooterWithLinks />
          </footer>

        </main>


      </div>
    </LandingLayout>
  );
}
