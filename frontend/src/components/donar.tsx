"use client";
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import solaridad from '../../public/solaridad.png';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "../components/footer";

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
      <section className="relative w-full h-[250px] mb-10 lg:h-[500px]" style={{ height: "250px" }}>
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold mt-10">DONAR</h1>
        </div>

        {/* Swiper component inside try-catch */}
        <div>
          {(() => {
            try {
              return (
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
                  className="h-full w-full"
                >
                  <SwiperSlide className="relative h-full">
                    <Image
                      src="/background.png"
                      alt="Background 1"
                      layout="fill"
                      objectFit="cover"
                      className="z-[-1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-700 opacity-50"></div>
                  </SwiperSlide>

                  <SwiperSlide className="relative h-full">
                    <Image
                      src="/chicasPlaza.jpg"
                      alt="Background 2"
                      layout="fill"
                      objectFit="cover"
                      className="z-[-1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-700 opacity-50"></div>
                  </SwiperSlide>

                  <SwiperSlide className="relative h-full">
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
              );
            } catch (error) {
              console.error("Error en Swiper:", error);
              return <p>Error al cargar el slider</p>;
            }
          })()}
        </div>
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
        <div className="w-full lg:w-8/12">
          <h1 className='text-custom-blue text-3xl lg:text-4xl text-center font-semibold mb-5'>
            La solidaridad empieza en casa, ¿te sumás?
          </h1>
          <p className="text-gray-600 text-center px-4 text-base lg:text-lg">
            En Downisup creemos firmemente que la solidaridad empieza en casa. Se aprende y se cultiva a través de la práctica de la entrega generosa, por eso te invitamos a acompañarnos en esta causa.
          </p>
        </div>

        <div className="flex justify-center mt-5">          
          <Image
            src={solaridad}
            alt="solaridad"
            className="items-center justify-center rounded-3xl h-40 w-40 lg:h-72 lg:w-72"
            layout="responsive"
          />
        </div>

        <div className="w-full lg:w-8/12 mt-5 text-center px-5">
          <h1 className="text-custom-blue text-2xl lg:text-4xl font-semibold mb-5">
            ¿Cómo podés ayudar?
          </h1>
          <p className="text-gray-600 text-sm lg:text-base mb-2">
            Podés acercar tu donación por Mercado Pago. Solo hacé click en el botón más abajo y colocá el monto de tu donación, la plataforma te guiará en el proceso.
          </p>
        </div>

        <div className="text-blue-700 text-2xl lg:text-4xl font-semibold mb-5 mt-2">
          <Link href="https://link.mercadopago.com.ar/downisup">
            <Button className="rounded-full text-white px-4 py-2 font-semibold bg-custom-blue hover:bg-blue-700">
              MercadoPago
            </Button>
          </Link>
        </div>

        <div className="w-full lg:w-8/12 text-center px-4">
          <p className="text-gray-600 px-10 text-sm lg:text-base mb-2">
            También, ya sea que realices una donación mensual o una donación única, te brindamos estos medios de contribución directamente en nuestro sitio web. Podés donar con tarjeta de crédito, débito bancario o mediante Pago Fácil y Rapipago. Para administrar tu donación a través de nuestro sitio web, seleccioná la frecuencia que prefieras y seguí todos los pasos indicados:
          </p>
        </div>

        <div className="text-blue-700 text-2xl lg:text-4xl font-semibold mb-20 mt-2">
          <Link href="">
            <Button className="rounded-full text-white px-4 py-2 font-semibold bg-custom-blue hover:bg-blue-700">
              Donación Mensual
            </Button>
          </Link>
        </div>

        <Footer />
      </div>
    </section>
  );
};

export default Donar;
