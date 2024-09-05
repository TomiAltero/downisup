"use client";
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import ubicacionImage from '../../public/ubicacion.png'; // Ajusta la ruta según sea necesario
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Donar = () => {
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
    <section className="bg-white">

      <section className="relative w-full h-screen mb-10" style={{ height: "300px" }}>

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold mt-10">DONAR</h1>
        </div>

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
          <SwiperSlide className="relative h-screen">
            <Image
              src="/background.png" // Cambia estas rutas por las imágenes que desees usar
              alt="Background 1"
              layout="fill"
              objectFit="cover"
              className="z-[-1]"
            />      
            <div className="absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-700 opacity-50"></div>
          </SwiperSlide>

          <SwiperSlide className="relative h-screen">
            <Image
              src="/chicasPlaza.jpg"
              alt="Background 2"
              layout="fill"
              objectFit="cover"
              className="z-[-1]"
            />      
            <div className="absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-700 opacity-50"></div>
          </SwiperSlide>

          <SwiperSlide className="relative h-screen">
            <Image
              src="/chicos.jpeg"
              alt="Background 3"
              layout="fill"
              objectFit="cover"
              className="z-[-1]"
            />      
            <div className="absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-700 opacity-50"></div>
          </SwiperSlide>
        </Swiper>
      </section>

      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col lg:flex-row lg:space-x-8"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-8/12 ml-4 text-left"> {/* Cambiado de text-center a text-left */}
          <h1 className="text-custom-blue text-4xl font-semibold mb-5">
            Como podes ayudar?
          </h1>
          <p className="text-gray-600 text-base">
            También podés acercar tu donación por Mercado Pago. Solo tenés que hacer click en el botón que está más abajo y colocar el monto de tu donación, la plataforma te va a guiar en todo el proceso.
          </p>
        </div>

        <div className="text-blue-700 text-4xl font-semibold mb-5 mt-2">
          <Link href="https://link.mercadopago.com.ar/downisup">
            <Button className="rounded-full text-white px-4 py-2 font-semibold bg-custom-blue hover:bg-blue-700">
              MercadoPago
            </Button>
          </Link>
        </div>

        <div className="w-8/12 ml-4 text-left"> {/* Cambiado de text-center a text-left */}
          <p className="text-gray-600 text-base">
            También, ya sea que realices una donación mensual o una donación única, te brindamos estos medios de contribución directamente en nuestro sitio web. Podés donar con tarjeta de crédito, débito bancario o mediante Pago Fácil y Rapipago. Para administrar tu donación a través de nuestro sitio web, seleccioná la frecuencia que prefieras y seguí todos los pasos indicados:
          </p>
        </div>

        <div className="text-blue-700 text-4xl font-semibold mb-5 mt-2">
          <Link href="">
            <Button className="rounded-full text-white px-4 py-2 font-semibold bg-custom-blue hover:bg-blue-700">
              Donacion Mensual
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Donar;
